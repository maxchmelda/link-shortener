
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const data = await request.json();
    const url = data.url;

    let shortened = `${url}/shortened`;

    return NextResponse.json({ shortened })
}