import { getDb } from "@/lib/db";

export async function getCategoryAllNews(page,limit) {
    const db = await getDb(); //db classından db bağlantılarını sağlar
    const skip = (page - 1) * limit;
    const getCategoryAllNews = await db.collection("Category").find({}).skip(skip).limit(limit).toArray();
    return getCategoryAllNews;
}


export async function getSlugByNews(slug) {
    const db = await getDb();
    const getSlugByNews = db.collection("Category").findOne({slug});
    return getSlugByNews;
    
}