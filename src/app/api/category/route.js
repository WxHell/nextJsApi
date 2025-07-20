import { handleApiError } from "@/app/utils/errorHandler";
import { getAllCategory, getCategoryAllNews } from "@/app/services/categoryService";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url); 
    const page = parseInt(searchParams.get("page"));
    const limit = parseInt(searchParams.get("limit"));
    if (isNaN(page) ||isNaN(limit)){
        const allCategory = await getAllCategory();
        return NextResponse.json({success : true , categories:allCategory})
    }
    const allCategoryPage = await getCategoryAllNews(page, limit);

    return NextResponse.json({ success: true, categoriesPage: allCategoryPage }); 
  } catch (error) {
    return handleApiError(error, "Kategoriler getirilemedi");
  }
}
