    import { getNewsById } from "@/app/services/newsService";
    import { handleApiError } from "@/app/utils/errorHandler";

    export async function GET(req,{params}) {
    try{
    
        const { id } = params;
        const idNews = await getNewsById(id);

        return Response.json({success:true,data:idNews})
    }catch(error){
        return handleApiError(error,"İd alınmadı");
    }
    
    }