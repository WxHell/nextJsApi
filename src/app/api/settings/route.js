import { getAllNews } from "@/app/services/newsService";
import { getAllSettings, getAllSettingsPagenation } from "@/app/services/settingsService";
import { handleApiError } from "@/app/utils/errorHandler";

export async function GET(req) {
  try{
  const  {searchParams} = new URL(req.url);
  const page = parseInt(searchParams.get("page"));
  const limit = parseInt(searchParams.get("limit"));

  if(isNaN(page) || isNaN(limit)){
    const allSettings = await getAllSettings();
    return Response.json({succes:true,settings:allSettings});
  }
  const searchContent = await getAllSettingsPagenation(page,limit);

  return Response.json({succes:true,settings : searchContent})
  }catch(error){
    return handleApiError(error,"Settings bilgileri alınmadı");
  }
  
    
}