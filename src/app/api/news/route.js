        import { getAllNews } from "@/app/services/newsService";
        import { handleApiError } from "@/app/utils/errorHandler";


        export async function GET(req){
        try{
                const { searchParams } = new URL(req.url); //urlden query parametrelerini al
                const page = parseInt(searchParams.get("page")) || 1;
                const limit = parseInt(searchParams.get("limit")) || 5;
                const News = await getAllNews(page,limit);      
                return Response.json({success:true, news: News});
        }catch(error){
            return handleApiError(error,"Haberler getirelemedi");
        }
        }