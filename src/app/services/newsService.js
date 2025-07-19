import { getDb } from "@/lib/db";
import { ObjectId } from "mongodb";


export async function getAllNewsByPageNation(page,limit) {
    const db = await getDb(); //db classından db bağlantılarını sağlar
    const skip = (page -1) * limit;
    const news = await db.collection("News").find({}).sort({publishedAt:-1}).skip(skip).limit(limit).toArray();
    return news;
    
}
export async function getAllNews(){
    const db = await getDb();
    const allNews= await db.collection("News").find({}).sort({publishedAt:-1}).toArray();
    return allNews;
}


export async function getNewsById(id) {
    const db = await getDb();
    const idByNews = await db.collection("News").findOne({_id:new ObjectId(id)});
    return idByNews;
}

