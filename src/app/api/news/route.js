import { getAllCategory } from "@/app/services/categoryService";
import { getAllNews, getAllNewsByPageNation } from "@/app/services/newsService";
import { handleApiError } from "@/app/utils/errorHandler";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url); //urlden query parametrelerini al
    let page = searchParams.get("page");
    let limit = searchParams.get("limit");
    if (page === null && limit === null) {
      const allNews = await getAllNews();
      return NextResponse.json({ success: true, data: allNews });
    }
    page = parseInt(page);
    limit = parseInt(limit);
    if (isNaN(page) || isNaN(limit)) {
      return NextResponse.json({ success: false, data: null });
    }

    const News = await getAllNewsByPageNation(page, limit);
    return NextResponse.json({ success: true, data: News });
  } catch (error) {
    return handleApiError(error, "Haberler getirelemedi");
  }
}
