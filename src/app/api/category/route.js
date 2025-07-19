import { handleApiError } from "@/app/utils/errorHandler";
import { getAllCategory, getCategoryAllNews } from "@/app/services/categoryService";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url); 
    const page = parseInt(searchParams.get("page"));
    const limit = parseInt(searchParams.get("limit"));
    if (isNaN(page) ||isNaN(limit)){
        const allCategory = await getAllCategory();
        return Response.json({success : true , categories:allCategory})
    }
    const allCategoryPage = await getCategoryAllNews(page, limit);

    return Response.json({ success: true, categoriesPage: allCategoryPage }); 
  } catch (error) {
    return handleApiError(error, "Kategoriler getirilemedi");
  }
}
