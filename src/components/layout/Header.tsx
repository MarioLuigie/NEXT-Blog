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
import Sheet from '@/components/layout/Sheet'

export default async function Header() {
	const { isAuthenticated, getUser } = getKindeServerSession()

	const user = await getUser()

	return (
		<header className="bg-zinc-50 border-b-2 p-6 max-sm:p-2 z-40 min-h-[140px] sticky top-0 left-0 w-full grid grid-cols-3 items-center">
			{/* Left-aligned Logo */}
			<div className="flex-start">
				<Link href={paths.HOME}>
					<Logo />
				</Link>
			</div>

			{/* Center-aligned Nav or Sheet (depending on screen size) */}
			<div className="flex-center">
				<div className="max-lg:hidden">
					<Nav />
				</div>
				<div className="lg:hidden">
					<Sheet />
				</div>
			</div>

			{/* Right-aligned Auth Links or Profile Dropdown */}
			<div className="flex-end">
				{!(await isAuthenticated()) ? (
					<div className="flex items-center gap-3">
						<LoginLink>Sign in</LoginLink>
						<div className="flex items-center bg-black px-3 py-2 text-white rounded-md">
							<RegisterLink>Sign up</RegisterLink>
						</div>
					</div>
				) : (
					<ProfileDropDownMenu user={user} />
				)}
			</div>
		</header>
	)
}

// //modules
// import Link from 'next/link'
// //lib
// import { paths } from '@/lib/constants/paths'
// import {
// 	RegisterLink,
// 	LoginLink,
// } from '@kinde-oss/kinde-auth-nextjs/components'
// import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
// //components
// import Logo from '@/components/content/Logo'
// import Nav from '@/components/layout/Nav'
// import ProfileDropDownMenu from '@/components/content/ProfileDropDownMenu'
// import Sheet from '@/components/layout/Sheet'

// export default async function Header() {
// 	const { isAuthenticated, getUser } = getKindeServerSession()

// 	const user = await getUser()

// 	console.log('***USER:', user)

// 	return (
// 		<header className="bg-zinc-50 border-b-2 p-8 z-40 h-[140px] sticky top-0 left-0 w-full flex items-center justify-between">
// 			<Link href={paths.HOME}>
// 				<Logo />
// 			</Link>
// 			<div className="max-lg:hidden absolute z-40 left-1/2 transform -translate-x-1/2">
// 				<Nav />
// 			</div>
// 			<div className="lg:hidden absolute inset-0 z-40 flex items-center justify-center bg-red-400">
// 				<Sheet />
// 			</div>
// 			{!(await isAuthenticated()) ? (
// 				<div className="flex flex-center gap-3">
// 					<LoginLink>Sign in</LoginLink>
// 					<div className="flex items-center bg-black px-3 py-2 text-white rounded-md">
// 						<RegisterLink>Sign up</RegisterLink>
// 					</div>
// 				</div>
// 			) : (
// 				<div className="">
// 					<ProfileDropDownMenu user={user} />
// 				</div>
// 			)}
// 		</header>
// 	)
// }

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
