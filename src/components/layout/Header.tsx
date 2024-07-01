//modules
import Link from 'next/link'
//components
import Logo from '@/components/content/Logo'
import Nav from '@/components/layout/Nav'
//lib
import { paths } from '@/lib/constants/paths'

export default function Header() {
	return (
		<header className='bg-zinc-100 shadow-lg p-8 z-40 flex-between h-[140px] sticky top-0 left-0 w-full'>
			<Link href={paths.HOME}>
				<Logo />
			</Link>
			<Nav />
		</header>
	)
}
