import { getNewsByCategoryId, getSlugByNews } from "@/app/services/categoryService";
import { getNewsById } from "@/app/services/newsService";
import { handleApiError } from "@/app/utils/errorHandler";

import { NextResponse } from "next/server";

export async function GET(req,{params}) {
        
    try{
        const {slug,id} =  await params;
       
        if(!slug){
            return NextResponse.json({success:false,message:"Slug alınamadı"},{status:400});
        }
        const category = await getSlugByNews(slug);
        if(!category){
            return NextResponse.json({success:false,error:"Kategori alınmadı"},{status:404});
        }
        
        const newsId= await getNewsById(id);
        
        if(newsId.category.toString() !== category._id.toString()){
            return NextResponse.json({success:false,message:"Bu haber bu kategoriye ait değil"},{status:400})
        }
         const populatedNews = {
            ...newsId,
            category:{
                _id:category._id,
                name:category.name,
                slug:category.slug
            }
        };
        return NextResponse.json({success:true,data:populatedNews},{status:200});
        
    }catch(error){
            return handleApiError(error,"Haber getirelemedi",{status:400});
    }
}