import { getDb } from "@/lib/db";

export async function  getAllSettingsPagenation(page,limit) {
    const db = await getDb();
    const skip = (page - 1) * limit
    const settings = await db.collection("Settings").find({}).skip(skip).limit(limit).toArray();
    return settings;
}
export async function getAllSettings () {
    const db = await getDb();
    const allSettings = await db.collection("Settings").find({}).toArray();
    return allSettings;
}