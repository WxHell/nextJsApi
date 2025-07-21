import { handleApiError } from "@/app/utils/errorHandler";
import {
  getAllCategory,
  getCategoryAllNews,
} from "@/app/services/categoryService";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    let page = searchParams.get("page");
    let limit = searchParams.get("limit");
    if (page === null && limit === null) {
      const allNews = await getAllCategory();
      return NextResponse.json({ success: true, news: allNews });
    }
    page = parseInt(page);
    limit = parseInt(limit);
    if (isNaN(page) || isNaN(limit)) {
      return NextResponse.json({ success: false, news: null });
    }
    return NextResponse.json({
      success: true,
      categoriesPage: allCategoryPage,
    });
  } catch (error) {
    return handleApiError(error, "Kategoriler getirilemedi");
  }
}
