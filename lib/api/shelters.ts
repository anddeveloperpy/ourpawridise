import { docClient } from "@/lib/dynamodb";
import { ScanCommand, GetCommand } from "@aws-sdk/lib-dynamodb";
import { Shelter, ShelterNeed } from "@/lib/shelters-data";
import { getDogCountsByShelter } from "@/lib/api/stats";

const TABLE_NAME = "registro_de_refugios_ourpawradise";

function mapItemToShelter(item: any, dogCount: number = 0): Shelter {
    const needs: ShelterNeed[] = [];

    if (item.shelter_needs) {
        if (item.shelter_needs.urgents && Array.isArray(item.shelter_needs.urgents)) {
            item.shelter_needs.urgents.forEach((urgent: string) => {
                // Map string to icon type if possible, or default
                const icon = mapNeedToIcon(urgent);
                needs.push({
                    icon: icon,
                    label: urgent,
                    urgent: true
                });
            });
        }
        if (item.shelter_needs.needs && Array.isArray(item.shelter_needs.needs)) {
            item.shelter_needs.needs.forEach((need: string) => {
                const icon = mapNeedToIcon(need);
                needs.push({
                    icon: icon,
                    label: need,
                    urgent: false
                });
            });
        }
    }

    return {
        id: item.uuid || item.id, // Fallback if uuid is missing
        name: item.shelter_name,
        location: item.shelter_location,
        phone: item.shelter_contant_phone, // Note typo in DB: shelter_contant_phone
        email: item.shelter_contact_email,
        description: item.shelter_story,
        mission: item.shelter_mission, // Using story as mission for now if mission is missing
        image: item.shelter_image_url,
        bannerImage: item.shelter_image_url, // Reusing image for banner
        needs: needs,
        dogsCount: dogCount,
        // The user said: "Creo que estos datos son suficientes para poder poblar a los refugios mock que ya tenemos"
        // I will default to some values or 0.
        totalRescued: 100, // Placeholder
        adoptionRate: 100, // Placeholder
        availableDogs: dogCount,
        shelter_external_links: item.shelter_links
    };
}

export async function getShelters(): Promise<Shelter[]> {
    try {
        const [commandResponse, counts] = await Promise.all([
            docClient.send(new ScanCommand({ TableName: TABLE_NAME })),
            getDogCountsByShelter()
        ]);

        const items = commandResponse.Items || [];

        return items.map((item: any) => mapItemToShelter(item, counts[item.uuid || item.id] || 0));
    } catch (error) {
        console.error("Error fetching shelters:", error);
        return [];
    }
}

export async function getShelterById(id: string): Promise<Shelter | null> {
    try {
        // Parallel fetch for shelter data and counts (or we could optimize to just count for this shelter)
        // For now reusing the batch count for simplicity as requested.
        const [commandResponse, counts] = await Promise.all([
             docClient.send(new GetCommand({
                TableName: TABLE_NAME,
                Key: { uuid: id }
            })),
            getDogCountsByShelter()
        ]);

        if (!commandResponse.Item) return null;
        
        return mapItemToShelter(commandResponse.Item, counts[id] || 0);
    } catch (error) {
        console.error(`Error fetching shelter with id ${id}:`, error);
        // Fallback to scan if GetItem fails (e.g. key mismatch)
        try {
             const shelters = await getShelters();
             return shelters.find(s => s.id === id) || null;
        } catch (scanError) {
            console.error("Error scanning for shelter fallback:", scanError);
            return null;
        }
    }
}

function mapNeedToIcon(need: string): 'food' | 'medicine' | 'blankets' | 'volunteers' {
    const lower = need.toLowerCase();
    if (lower.includes('alimento') || lower.includes('comida')) return 'food';
    if (lower.includes('medicina') || lower.includes('salud') || lower.includes('veterinario')) return 'medicine';
    if (lower.includes('cama') || lower.includes('cobija') || lower.includes('manta')) return 'blankets';
    if (lower.includes('voluntario')) return 'volunteers';
    return 'volunteers'; // Default
}
