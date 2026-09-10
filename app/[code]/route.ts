import { normalizeUrl } from "@/lib/isUrlValid";
import { supabase } from "@/lib/supabase";
import { NextRequest, NextResponse } from "next/server";



export async function GET(request: NextRequest, { params }: { params: Promise<{ code: string }>}) {
    const { code } = await params;

    const { data, error } = await supabase
    .from('links')
    .select()
    .eq('code', code)
    .single();

    if (error) {
        return NextResponse.redirect(`http://${process.env.PROJECT_DOMAIN}/not-found`);
    }

    return NextResponse.redirect(normalizeUrl(data.original_url));
}