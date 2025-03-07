import { baseUrl } from "@/consts";
import { CityResponse } from "@/types";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const searchParam = searchParams.get("query");

  if (!searchParam) {
    return NextResponse.json(
      { error: "City name is required" },
      { status: 400 }
    );
  }

  const API_KEY = process.env.API_KEY;
  const url = `${baseUrl}/geo/1.0/direct?q=${searchParam}&limit=1&appid=${API_KEY}`;

  try {
    const response = await fetch(url);
    const data: CityResponse[] = await response.json();

    if (data.length === 0) {
      return NextResponse.json(
        { error: `Location not found - ${searchParam}` },
        { status: 404 }
      );
    }

    return NextResponse.json(data[0].name);
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
