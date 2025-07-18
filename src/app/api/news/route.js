        import { getAllNews, getAllNewsByPageNation } from "@/app/services/newsService";
        import { handleApiError } from "@/app/utils/errorHandler";


        export async function GET(req){
        try{ 
                const { searchParams } = new URL(req.url); //urlden query parametrelerini al
                const page = parseInt(searchParams.get("page"));
                const limit = parseInt(searchParams.get("limit"));
                if(isNaN(page) || isNaN(limit)){
                     const allNews= await getAllNews();
                     return Response.json({success:true,news:allNews });   
                }
                const News = await getAllNewsByPageNation(page,limit);      
                return Response.json({success:true, newsPage : News});
        }catch(error){
            return handleApiError(error,"Haberler getirelemedi");
        }
        }