import { withAuth } from '@kinde-oss/kinde-auth-nextjs/middleware'
interface IKindeRequest {
	kindeAuth?: {
		token: any
		user: any
	}
}

export default withAuth(
	async function middleware(req: IKindeRequest) {
		console.log('***KINDE AUTH REQUEST', req.kindeAuth)
	},
	{
		isReturnToCurrentPage: true,
		loginPage: '/posts',//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1
		isAuthorized: ({ token }: { token: any}) => {
			// The user will be considered authorized if they have the permission 'eat:chips'
			return token.permissions.includes('eat:chips')
		},
	}
)

export const config = {
	matcher: ['/create-post'],
}

//req.kindeAuth zwraca obiekt z polami token i user {token:{}, user: {}}

//SCIEZKA W PRZEGLADARCE PO WPISANIU /POSTS DO loginPAGE
//http://localhost:3000/posts?post_login_redirect_url=%2Fcreate-post
// czyli sciezka na strone kinde umozliwiajaca logowanie czyli /api/auth/[kindeAuth] jest niepoprawnym podejsciem dla właściwości loginPage?
// ChatGPT
// Tak, ścieżka /api/auth/[kindeAuth] nie jest odpowiednią wartością dla właściwości loginPage w kontekście konfiguracji withAuth lub podobnych middleware'ów w Next.js. Dlaczego?

// Dlaczego /api/auth/[kindeAuth] jest niepoprawne dla loginPage?
// Przeznaczenie loginPage:

// Właściwość loginPage służy do określenia absolutnego URL-a do strony logowania w Twojej aplikacji. Jest to URL, na który użytkownik zostanie przekierowany, gdy nie jest zalogowany lub jego sesja wygasła.
// API Endpoint vs Strona Logowania:

// Ścieżka /api/auth/[kindeAuth] sugeruje, że jest to endpoint API, który obsługuje autoryzację, logowanie lub inne działania związane z bezpieczeństwem. Ten endpoint nie jest przeznaczony do bezpośredniego przekierowania użytkownika, ale do przetwarzania żądań związanych z autoryzacją.
// Ścieżka do strony logowania:

// Strona logowania powinna być zwykle bardziej użyteczna dla użytkownika, z przyjaznym interfejsem użytkownika (UI), formularzem logowania i tak dalej. Jest to miejsce, gdzie użytkownik może bezpośrednio wprowadzić dane logowania.
// Poprawne użycie loginPage
// Poprawną wartością dla loginPage powinien być absolutny URL do strony logowania, na przykład:

// typescript
// Skopiuj kod
// loginPage: `${baseUrl}/login`,
// gdzie baseUrl jest zmienną środowiskową lub ustawioną w inny sposób, aby wskazywać na główną domenę Twojej aplikacji, np. http://localhost:3000.

// Co zrobić z /api/auth/[kindeAuth]?
// /api/auth/[kindeAuth] nadal jest użyteczne jako endpoint do obsługi procesu logowania lub autoryzacji po stronie serwera. Możesz użyć tego endpointu do przetwarzania danych logowania, weryfikacji tokenów, aktualizacji sesji użytkownika itp.

// Jednakże, kiedy chodzi o loginPage w kontekście konfiguracji middleware, powinieneś dostarczyć URL do strony logowania, która jest przeznaczona dla użytkownika do bezpośredniego interakcji.

// Podsumowanie
// Aby uniknąć błędów i zapewnić poprawne działanie middleware'ów z autoryzacją, użyj absolutnego URL-a do strony logowania, a nie endpointu API, dla właściwości loginPage. To zapewni, że użytkownicy zostaną przekierowani do odpowiedniego miejsca, aby zalogować się lub odnowić swoją sesję w Twojej aplikacji.







// 1. Prosta funkcja, która zwraca withAuth:

// W tej wersji używasz withAuth bezpośrednio w funkcji middleware, co jest prostszym podejściem i może być wystarczające, jeśli nie potrzebujesz dostępu do dodatkowych informacji w req.kindeAuth.

// import { withAuth } from '@kinde-oss/kinde-auth-nextjs/middleware'
// import { NextRequest } from 'next/server'

// export default function middleware(req: NextRequest) {
// 	return withAuth(req)
// }
// export const config = {
// 	matcher: ['/create-post'],//dopasowywacz, wzorzec ścieżki routy chronione
// }

//2. Funkcja z async i dostępem do req.kindeAuth:

// Używasz withAuth jako wywołania zwrotnego (callback), które pozwala na dostęp do obiektu req.kindeAuth, co może być przydatne, jeśli chcesz wykonać dodatkowe operacje po autoryzacji użytkownika, takie jak logowanie danych tokenu.

// import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";

// export default withAuth(async function middleware(req) {
//   console.log("look at me", req.kindeAuth);
// });

// export const config = {
//   matcher: ["/admin"]
// };

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
