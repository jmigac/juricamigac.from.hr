import {NextResponse} from "next/server";
import {revalidatePath} from "next/cache";

export async function POST(request) {
    const requestHeaders = new Headers(request.headers);
    const secret = requestHeaders.get('x-vercel-revalidate-key');
    if (secret !== process.env.REVALIDATION_SECRET_KEY) {
            return NextResponse.json({message: 'Invalid secret'}, {status: 401}
        );
    }
    revalidatePath('/', 'page');
    return NextResponse.json({ revalidated: true, now: Date.now() });
}
