import { getDb } from "@/lib/db";
import { ObjectId } from "mongodb";


export async function getAllNews(page,limit) {
    const db = await getDb(); //db classından db bağlantılarını sağlar
    const skip = (page -1) * limit;
    const news = await db.collection("News").find({}).sort({publishedAt:-1}).skip(skip).limit(limit).toArray();
    return news;
    
}


export async function getNewsById(id) {
    const db = await getDb();
    const idByNews = db.collection("news").findOne({_id:new ObjectId(id)});
    return idByNews;
}

