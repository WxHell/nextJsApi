    import { getNewsById } from "@/app/services/newsService";
    import { handleApiError } from "@/app/utils/errorHandler";
import { NextResponse } from "next/server";

    export async function GET(req,{params}) {
    try{
    
        const { id } = params;
        const idNews = await getNewsById(id);

        return NextResponse.json({success:true,_id:idNews})
    }catch(error){
        return handleApiError(error,"İd ait haber bulunamadı");
    }
    
    }