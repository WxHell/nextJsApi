import { getDb } from "@/lib/db";

export async function  getAllSettings(page,limit) {
    const db = await getDb();
    const skip = (page - 1) * limit
    const allSettings = await db.collection("Settings").find({}).skip(skip).limit(limit).toArray();
    return allSettings;
}