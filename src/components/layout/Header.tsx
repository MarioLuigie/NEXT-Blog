//modules
import {
	RegisterLink,
	LoginLink,
} from '@kinde-oss/kinde-auth-nextjs/components'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
//components
import Logo from '@/components/content/Logo'
import ProfileDropDownMenu from '@/components/content/ProfileDropDownMenu'
import Menu from '@/components/layout/Menu'

export default async function Header() {
	const { isAuthenticated, getUser } = getKindeServerSession()

	const user = await getUser()

	return (
		<header className="bg-zinc-50 border-b-2 p-6 max-sm:p-4 z-40 min-h-[120px] sticky top-0 left-0 w-full grid grid-cols-3 items-center">
			{/* Logo and Menu for desktop */}
			<div className="hidden lg:block">
				<Logo imagePath="/assets/Logo01.svg" redirectPath="/" />
			</div>
			<div className="hidden lg:block">
				<Menu />
			</div>

			{/* Logo and Menu for mobile */}
			<div className="lg:hidden">
				<Menu />
			</div>
			<div className="lg:hidden">
				<Logo imagePath="/assets/Logo01.svg" redirectPath="/" />
			</div>

			{/* Right-aligned Auth Links or Profile DropdownMenu */}
			<div className="flex-end">
				{!(await isAuthenticated()) ? (
					<>
						<div className="flex items-center gap-3 max-sm:hidden">
							<LoginLink>Sign in</LoginLink>
							<div className="flex items-center bg-black px-3 py-2 text-white rounded-md">
								<RegisterLink>Sign up</RegisterLink>
							</div>
						</div>
						<div className="flex items-center bg-black px-3 py-2 text-white rounded-md sm:hidden">
							<LoginLink>Login</LoginLink>
						</div>
					</>
				) : (
					<ProfileDropDownMenu user={user} />
				)}
			</div>
		</header>
	)
}
