import { docClient } from "@/lib/dynamodb";
import { ScanCommand } from "@aws-sdk/lib-dynamodb";

const DOGS_TABLE_NAME = "registro_de_mascotas_ourpawradise";

export async function getDogCountsByShelter(): Promise<Record<string, number>> {
    try {
        const command = new ScanCommand({
            TableName: DOGS_TABLE_NAME,
            ProjectionExpression: "shelter_uuid",
        });

        const response = await docClient.send(command);
        const items = response.Items || [];

        const counts: Record<string, number> = {};
        items.forEach((item: any) => {
            const shelterId = item.shelter_uuid;
            if (shelterId) {
                counts[shelterId] = (counts[shelterId] || 0) + 1;
            }
        });

        return counts;
    } catch (error) {
        console.error("Error counting dogs by shelter:", error);
        return {};
    }
}

