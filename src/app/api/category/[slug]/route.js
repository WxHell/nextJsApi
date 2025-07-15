import { getSlugByNews } from "@/app/services/categoryService";
import { handleApiError } from "@/app/utils/errorHandler";



export async function GET(req,{ params }) {
  try {
    const { slug } =  params;
    const slugByNews = await getSlugByNews(slug);
    

    return Response.json({ success: true, data: slugByNews });

  } catch (error) {
    return handleApiError(error, "Haber kategorileri bulunamadı");

}
}

