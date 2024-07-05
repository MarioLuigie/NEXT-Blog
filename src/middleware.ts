import { withAuth } from '@kinde-oss/kinde-auth-nextjs/middleware'
import { redirect } from 'next/navigation';
import { NextRequest } from 'next/server'

export default function middleware(req: NextRequest) {
	return withAuth(req)
}
export const config = {
	matcher: ['/create-post'],//dopasowywacz, wzorzec ścieżki
}

// import { withAuth } from '@kinde-oss/kinde-auth-nextjs/middleware';
// import { RedirectType, redirect } from 'next/navigation';
// import { NextRequest, NextResponse } from 'next/server';

// export default function middleware(req: NextRequest) {
//     return withAuth(req, {
//         async onAuthRequired({ res, url }: { res: any, url: any}) {
//             // Przekierowanie użytkownika na stronę logowania z parametrem przekierowania po zalogowaniu
//             redirect(res as string, `http://localhost:3000/api/auth/login?redirect=${encodeURIComponent(url.pathname)}` as RedirectType);
//         },
//     });
// }

