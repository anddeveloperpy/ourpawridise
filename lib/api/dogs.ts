import { docClient } from "@/lib/dynamodb";
import { ScanCommand, GetCommand } from "@aws-sdk/lib-dynamodb";
import { Dog, DogTag, DogHealthInfo, DogShelterInfo } from "@/lib/dogs-data";
import { getShelterById, getShelters } from "@/lib/api/shelters";

const TABLE_NAME = "registro_de_mascotas_ourpawradise";

function mapItemToDog(item: any, shelterInfo: DogShelterInfo): Dog {
    // Handle images
    let images: string[] = [];
    if (Array.isArray(item.pet_images)) {
        images = item.pet_images.map((img: any) => {
            if (typeof img === 'string') return img;
            if (img.S) return img.S;
            return "";
        }).filter((img: string) => img !== "");
    }

    // Handle personality
    let personality: string[] = [];
    if (Array.isArray(item.pet_personality)) {
        personality = item.pet_personality.map((p: any) => {
            if (typeof p === 'string') return p;
            if (p.S) return p.S;
            return "";
        }).filter((p: string) => p !== "");
    }

    // Handle tags
    const tags: DogTag[] = [];
    if (item.pet_tags && typeof item.pet_tags === 'object') {
        Object.entries(item.pet_tags).forEach(([key, value]: [string, any]) => {
            let variant: 'default' | 'secondary' | 'accent' = 'default';
            const valStr = typeof value === 'object' && value.S ? value.S : String(value);

            if (['default', 'secondary', 'accent'].includes(valStr)) {
                variant = valStr as 'default' | 'secondary' | 'accent';
            }
            tags.push({
                label: key,
                variant: variant
            });
        });
    }

    // Handle healthInfo
    const healthInfo: DogHealthInfo[] = [];
    if (item.pet_healthInfo && typeof item.pet_healthInfo === 'object') {
        Object.entries(item.pet_healthInfo).forEach(([key, value]: [string, any]) => {
            const status = typeof value === 'object' && value.S ? value.S : String(value);
            healthInfo.push({
                label: key,
                status: status
            });
        });
    }

    // Map pet_size to sizeCategory
    let sizeCategory: 'Grande' | 'Mediano' | 'Pequeño' | 'Mini' = 'Mediano';
    if (item.pet_size) {
        const sizeStr = String(item.pet_size).toLowerCase();
        if (sizeStr.includes('grande')) sizeCategory = 'Grande';
        else if (sizeStr.includes('mediano')) sizeCategory = 'Mediano';
        else if (sizeStr.includes('pequeño') || sizeStr.includes('pequeno')) sizeCategory = 'Pequeño';
        else if (sizeStr.includes('mini')) sizeCategory = 'Mini';
    }

    // Map pet_type to type
    let type: 'Perro' | 'Gato' | 'Otro' = 'Perro';
    if (item.pet_type) {
        const typeStr = String(item.pet_type);
        if (typeStr === 'Perro' || typeStr === 'Gato' || typeStr === 'Otro') {
            type = typeStr as 'Perro' | 'Gato' | 'Otro';
        }
    }

    return {
        id: item.uuid || item.id,
        name: item.pet_name,
        breed: item.pet_breed,
        age: item.pet_age,
        size: item.pet_size,
        sizeCategory: sizeCategory,
        type: type,
        temperament: item.pet_temperament,
        color: item.pet_color,
        healthStatus: item.pet_healthStatus,
        gender: item.pet_gender === 'Macho' || item.pet_gender === 'Hembra' ? item.pet_gender : 'Macho',
        images: images,
        story: item.pet_story,
        personality: personality,
        healthInfo: healthInfo,
        tags: tags,
        shelter: shelterInfo,
        adoptionFee: item.pet_adoptionFee
    };
}

export async function getAllDogs(): Promise<Dog[]> {
    try {
        // Ideally we should fetch shelters first to have a map, to avoid N+1 fetches or missing info
        // However, for now, let's fetch all shelters and map them by ID for efficient lookup
        const shelters = await getShelters();
        const shelterMap = new Map(shelters.map(s => [s.id, s]));

        const command = new ScanCommand({
            TableName: TABLE_NAME,
        });

        const response = await docClient.send(command);
        const items = response.Items || [];

        return items.map((item: any) => {
            const shelterId = item.shelter_uuid;
            const shelter = shelterMap.get(shelterId);
            const shelterInfo: DogShelterInfo = shelter ? {
                id: shelter.id,
                name: shelter.name,
                location: shelter.location,
                phone: shelter.phone || "",
                email: shelter.email,
                image: shelter.image
            } : {
                id: shelterId || "unknown",
                name: "Desconocido",
                location: "Desconocido",
                phone: ""
            };
            return mapItemToDog(item, shelterInfo);
        });

    } catch (error) {
        console.error("Error fetching all dogs:", error);
        return [];
    }
}

export async function getDogsByShelterId(shelterId: string): Promise<Dog[]> {
    try {
        const shelter = await getShelterById(shelterId);
        const shelterInfo: DogShelterInfo = shelter ? {
            id: shelter.id,
            name: shelter.name,
            location: shelter.location,
            phone: shelter.phone || "",
            email: shelter.email,
            image: shelter.image
        } : {
            id: shelterId,
            name: "Desconocido",
            location: "Desconocido",
            phone: ""
        };

        const command = new ScanCommand({
            TableName: TABLE_NAME,
            FilterExpression: "shelter_uuid = :shelterId",
            ExpressionAttributeValues: {
                ":shelterId": shelterId,
            },
        });

        const response = await docClient.send(command);
        const items = response.Items || [];

        return items.map((item: any) => mapItemToDog(item, shelterInfo));

    } catch (error) {
        console.error("Error fetching dogs:", error);
        return [];
    }
}

export async function getDogById(id: string): Promise<Dog | null> {
    try {
        const command = new GetCommand({
            TableName: TABLE_NAME,
            Key: {
                uuid: id
            }
        });

        const response = await docClient.send(command);
        const item = response.Item;

        if (!item) return null;

        const shelter = await getShelterById(item.shelter_uuid);
        const shelterInfo: DogShelterInfo = shelter ? {
            id: shelter.id,
            name: shelter.name,
            location: shelter.location,
            phone: shelter.phone || "",
            email: shelter.email,
            image: shelter.image
        } : {
            id: item.shelter_uuid,
            name: "Desconocido",
            location: "Desconocido",
            phone: ""
        };

        return mapItemToDog(item, shelterInfo);
    } catch (error) {
        console.error(`Error fetching dog with id ${id}:`, error);
        return null;
    }
}

export async function getAllDogIds(): Promise<string[]> {
    try {
        const command = new ScanCommand({
            TableName: TABLE_NAME,
            ProjectionExpression: "#uuid",
            ExpressionAttributeNames: {
                "#uuid": "uuid"
            }
        });

        const response = await docClient.send(command);
        const items = response.Items || [];

        return items.map((item: any) => item.uuid).filter((id: string) => !!id);
    } catch (error) {
        console.error("Error fetching all dog IDs:", error);
        return [];
    }
}
