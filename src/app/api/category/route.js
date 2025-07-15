import { handleApiError } from "@/app/utils/errorHandler";
import { getCategoryAllNews } from "@/app/services/categoryService";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url); 
    const page = parseInt(searchParams.get("page")) || 1;
    const limit = parseInt(searchParams.get("limit"))|| 5;

    const allCategory = await getCategoryAllNews(page, limit);

    return Response.json({ success: true, data: allCategory }); 
  } catch (error) {
    return handleApiError(error, "Kategoriler getirilemedi");
  }
}
