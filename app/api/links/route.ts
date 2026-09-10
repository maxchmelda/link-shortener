import generateCode from "@/lib/generateCode";
import isUrlValid, { normalizeUrl } from "@/lib/isUrlValid";
import { supabase } from "@/lib/supabase";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const reqData = await request.json();
    const url = reqData.url;

    if (!isUrlValid(url)) return NextResponse.json({ error: "URL is not valid" }, { status: 400 });

    const { data, error: selectError } = await supabase
    .from('links')
    .select('code');

    if (selectError) {
        console.log(selectError);
        return NextResponse.json({ error: "Couldn't reach db" }, { status: 500 });
    }    

    let code = generateCode(6);

    let tries = 1;
    while (data.some((existing) => existing.code === code)) {
        let codeLen = 6 + Math.floor(tries / 3);
        code = generateCode(codeLen);
        tries++;
    }

    const { error: insertError } = await supabase
    .from('links')
    .insert({
        original_url: normalizeUrl(url),
        code
    })

    if (insertError) {
        console.error(insertError);
        return NextResponse.json({ error: "Couldn't add record" }, { status: 500 });
    }
    let shortened = `https://${process.env.PROJECT_DOMAIN}/${code}`;

    return NextResponse.json({ shortened })
}