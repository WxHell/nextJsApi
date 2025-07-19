import { getDb } from "@/lib/db";
import { ObjectId } from "mongodb";

export async function getCategoryAllNews(page,limit) {
    const db = await getDb(); //db classından db bağlantılarını sağlar
    const skip = (page - 1) * limit;
    const getCategoryAllNews = await db.collection("Category").find({}).skip(skip).limit(limit).toArray();
    return getCategoryAllNews;
}

export async function getAllCategory() {
    const db = await getDb();
    const allCategory= await db.collection("Category").find({}).toArray();
    return allCategory;
    
}   
export async function getSlugByNews(slug) {
    const db = await getDb();
    const getSlugByNews = await db.collection("Category").findOne({slug});
    return getSlugByNews;
    
}

export async function getNewsByCategoryId(categoryId) {
    const db = await getDb();
    return db.collection("News").find({category:new ObjectId(categoryId)}).toArray();
    
}
