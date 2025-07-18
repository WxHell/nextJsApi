import { getAllNews } from "@/app/services/newsService";
import { getAllSettings } from "@/app/services/settingsService";
import { handleApiError } from "@/app/utils/errorHandler";

export async function GET(req) {
  try{
  const  {searchParams} = new URL(req.url);
  const page = parseInt(searchParams.get("page"))  ||1;
  const limit = parseInt(searchParams.get("limit")) || 5;

  const searchContent = await getAllSettings(page,limit);

  return Response.json({succes:true,settings : searchContent})
  }catch(error){
    return handleApiError(error,"Settings bilgileri alınmadı");
  }
  
    
}