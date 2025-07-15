        import { getAllNews } from "@/app/services/newsService";
        import { handleApiError } from "@/app/utils/errorHandler";


        export async function GET(req){
        try{
                const { serachParams } = new URL(req.url); //urlden query parametrelerini al
                const page = parseInt(serachParams.get("page")) || 1;
                const limit = parseInt(serachParams.get("limit")) || 5;

                const News = await getAllNews(page,limit);
                
                return Response.json({success:true, data : News});
        }catch(error){
            return handleApiError(error,"Haberler getirelemedi");
        }
        }