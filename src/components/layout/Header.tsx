//modules
import Link from 'next/link'
//components
import Logo from '@/components/content/Logo'
//lib
import { paths } from '@/lib/constants/paths'

export default function Header() {
	return (
		<header className="bg-zinc-100 shadow-lg p-10 z-40 flex-start h-[180px]">
			<Link href={paths.HOME}>
				<Logo />
			</Link>
		</header>
	)
}
