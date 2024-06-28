import Logo from '@/components/content/Logo'
import Link from 'next/link'
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
