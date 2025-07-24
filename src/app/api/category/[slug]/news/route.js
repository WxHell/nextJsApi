import { getNewsByCategoryId, getSlugByNews } from "@/app/services/categoryService";
import { handleApiError } from "@/app/utils/errorHandler";
import { NextResponse } from "next/server";

export async function GET(req,{params}) {
  try{
  const {slug} = await params; 
        
    if (!slug) {
      return NextResponse.json({ success: false, message: "Slug alınamadı" }, { status: 400 });
    }
    const category = await getSlugByNews(slug);
    if(!category){
        return NextResponse.json({success:false , message:"Categori alanamadı"},{status:404});
    }
    const newsBySlug = await getNewsByCategoryId(category._id);
    const populatedNews = newsBySlug.map(news => ({
      ...news,
      category: {
        _id: category._id,
        name: category.name,
        slug: category.slug
      }
    }));

    return NextResponse.json({succes:true,data:populatedNews},{status:200});
    }catch(error){
        return handleApiError(error,"Haberler alınamadı")
    }

    
    
}