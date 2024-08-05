//modules
import Link from 'next/link'
import Image from 'next/image'
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
	const { isAuthenticated, getUser } = getKindeServerSession()

	const user = await getUser()

	console.log('***USER:', user)

	return (
		<header className="bg-zinc-50 border-b-2 p-8 z-40 flex-between h-[140px] sticky top-0 left-0 w-full">
			<Link href={paths.HOME}>
				<Logo />
			</Link>
			<Nav />
			{!(await isAuthenticated()) ? (
				<div className="flex-center gap-3">
					<LoginLink>Sign in</LoginLink>
					<div className="flex-center bg-black px-3 py-2 text-white rounded-md">
						<RegisterLink>Sign up</RegisterLink>
					</div>
				</div>
			) : (
				<div className="flex-center gap-5">
					<div className="flex-center gap-3">
						{user?.picture ? (
							<Image
								src={user?.picture}
								alt="Avatar"
								width={45}
								height={45}
								className="rounded-full"
							/>
						) : (
							<div className="w-[40px] aspect-square flex-center rounded-full bg-zinc-200 text-zinc-800 text-md">
								{user?.given_name?.charAt(0)}
							</div>
						)}
						<div className="flex-center gap-1">
							<p>{user?.given_name}</p>
							<p>{user?.family_name}</p>
						</div>
					</div>
					<LogoutLink className="font-bold">Log out</LogoutLink>
				</div>
			)}
			{/* <LogoutLink className="font-bold">Log out</LogoutLink> */}
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
