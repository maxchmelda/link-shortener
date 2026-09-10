import { normalizeUrl } from "@/lib/isUrlValid";
import { supabase } from "@/lib/supabase";
import { after, NextRequest, NextResponse } from "next/server";



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

    after(async () => {
        await supabase
        .from('links')
        .update({ last_clicked_at: new Date().toISOString() })
        .eq('code', code);
    });

    return NextResponse.redirect(normalizeUrl(data.original_url));
}