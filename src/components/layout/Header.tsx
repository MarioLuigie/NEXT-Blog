//modules
import Link from 'next/link'
//components
import Logo from '@/components/content/Logo'
import Nav from '@/components/layout/Nav'
//lib
import { paths } from '@/lib/constants/paths'
import {
	RegisterLink,
	LoginLink,
	LogoutLink,
} from '@kinde-oss/kinde-auth-nextjs/components'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'

export default async function Header() {
	const { isAuthenticated } = getKindeServerSession()
	return (
		<header className="bg-zinc-100 shadow-lg p-8 z-40 flex-between h-[140px] sticky top-0 left-0 w-full">
			<Link href={paths.HOME}>
				<Logo />
			</Link>
			<Nav />
			{!(await isAuthenticated()) ? (
				<LoginLink>Sign in</LoginLink>
			) : (
				<LogoutLink>Log out</LogoutLink>
			)}
				<LogoutLink>Log out</LogoutLink>

		</header>
	)
}

// import Link from 'next/link';
// import Logo from '@/components/content/Logo';
// import Nav from '@/components/layout/Nav';
// import { paths } from '@/lib/constants/paths';
// import { RegisterLink, LoginLink, LogoutLink, useKindeAuth } from '@kinde-oss/kinde-auth-nextjs/components';
// import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
// import { toastSuccess } from '@/lib/utils/toasts';


// export default async function Header() {
//   const { isAuthenticated, logout } = useKindeAuth();
  
//   const handleLogout = async () => {
//     await logout();
//     toastSuccess({ message: 'Logged out successfully' });
//   };

//   return (
//     <header className="bg-zinc-100 shadow-lg p-8 z-40 flex-between h-[140px] sticky top-0 left-0 w-full">
//       <Link href={paths.HOME}>
//         <Logo />
//       </Link>
//       <Nav />
//       {!(await isAuthenticated()) ? (
//         <LoginLink>Sign in</LoginLink>
//       ) : (
//         <button onClick={handleLogout}>Log out</button>
//       )}
//     </header>
//   );
// }

