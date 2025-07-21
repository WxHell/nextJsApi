import { getAllNews } from "@/app/services/newsService";
import {
  getAllSettings,
  getAllSettingsPagenation,
} from "@/app/services/settingsService";
import { handleApiError } from "@/app/utils/errorHandler";
import { getDb } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const settings = await getAllSettings();
    return NextResponse.json({success:true,settings});
    
  } catch (error) {
    return handleApiError(error, "Settings bilgileri alınmadı");
  }
}
