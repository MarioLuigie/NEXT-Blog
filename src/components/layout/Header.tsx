//modules
import Link from 'next/link'
//lib
import { paths } from '@/lib/constants/paths'
import {
	RegisterLink,
	LoginLink,
} from '@kinde-oss/kinde-auth-nextjs/components'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
//components
import Logo from '@/components/content/Logo'
import Nav from '@/components/layout/Nav'
import ProfileDropDownMenu from '@/components/content/ProfileDropDownMenu'

export default async function Header() {
	const { isAuthenticated, getUser } = getKindeServerSession()

	const user = await getUser()

	console.log('***USER:', user)

	return (
		<header className="bg-zinc-50 border-b-2 p-8 z-40 h-[140px] sticky top-0 left-0 w-full flex items-center justify-between">
			<Link href={paths.HOME}>
				<Logo />
			</Link>
			<div className="absolute left-1/2 transform -translate-x-1/2">
				<Nav />
			</div>
			{!(await isAuthenticated()) ? (
				<div className="flex flex-center gap-3">
					<LoginLink>Sign in</LoginLink>
					<div className="flex items-center bg-black px-3 py-2 text-white rounded-md">
						<RegisterLink>Sign up</RegisterLink>
					</div>
				</div>
			) : (
				<ProfileDropDownMenu user={user} />
			)}
		</header>
	)
}


// export default async function Header() {
// 	const { isAuthenticated, getUser } = getKindeServerSession()

// 	const user = await getUser()

// 	console.log('***USER:', user)

// 	return (
// 		<header className="bg-zinc-50 border-b-2 p-8 z-40 flex-between h-[140px] sticky top-0 left-0 w-full">
// 			<Link href={paths.HOME}>
// 				<Logo />
// 			</Link>
// 			<Nav />
// 			{!(await isAuthenticated()) ? (
// 				<div className="flex-center gap-3">
// 					<LoginLink>Sign in</LoginLink>
// 					<div className="flex-center bg-black px-3 py-2 text-white rounded-md">
// 						<RegisterLink>Sign up</RegisterLink>
// 					</div>
// 				</div>
// 			) : (
// 				<ProfileDropDownMenu user={user} />
// 			)}
// 		</header>
// 	)
// }

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
