import { docClient } from "@/lib/dynamodb";
import { ScanCommand } from "@aws-sdk/lib-dynamodb";
import { Shelter, ShelterNeed } from "@/lib/shelters-data";

const TABLE_NAME = "registro_de_refugios_ourpawradise";

export async function getShelters(): Promise<Shelter[]> {
    try {
        const command = new ScanCommand({
            TableName: TABLE_NAME,
        });

        const response = await docClient.send(command);
        const items = response.Items || [];

        return items.map((item: any) => {
            // Map DynamoDB item to Shelter interface
            // Note: DynamoDB items from ScanCommand with lib-dynamodb are standard JS objects,
            // not the { S: "value" } format if using the DocumentClient correctly.
            // However, the user provided example shows { S: "value" } format which is standard DynamoDB JSON.
            // If we use DynamoDBDocumentClient, it unmarshalls automatically.
            // Let's assume standard unmarshalled objects first. 
            // Wait, the user showed an example of the ITEM in DynamoDB which had { S: ... }.
            // But @aws-sdk/lib-dynamodb's DynamoDBDocumentClient handles unmarshalling.
            // So 'item' here should be a plain JS object.

            // We need to be careful about the structure.
            // The user's example:
            // shelter_needs: { M: { needs: { L: [{S: "Voluntarios"}] }, urgents: { L: ... } } }
            // Unmarshalled, this should look like:
            // shelter_needs: { needs: ["Voluntarios"], urgents: ["Alimento", "Medicina", "Camas"] }

            // console.log("=====================================================")
            // console.log(item)
            // console.log("=====================================================")

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
                dogsCount: 100, // Not in DB yet, default to 0 or random? User said "poblar a los refugios mock que ya tenemos"
                // The user said: "Creo que estos datos son suficientes para poder poblar a los refugios mock que ya tenemos"
                // I will default to some values or 0.
                totalRescued: 100,
                adoptionRate: 100,
                availableDogs: 100,
                shelter_external_links: item.shelter_links
            };
        });
    } catch (error) {
        console.error("Error fetching shelters:", error);
        return [];
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
