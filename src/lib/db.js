import clientPromise from "./mongoDB";

export async function getDb(dbName = "models") {
    const client = await clientPromise;
    return client.db(dbName);
    
}
