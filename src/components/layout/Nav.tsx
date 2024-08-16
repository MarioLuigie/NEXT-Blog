'use client'

import { navItems } from '@/lib/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type NavItemProps = {
	label: string
	href: string
}

function NavItem({ data: { label, href } }: { data: NavItemProps }) {
	const pathname = usePathname()
	return (
		<li>
			<Link
				href={href}
				className={`text-lg ${
					pathname === href ? 'text-zinc-900 font-bold' : 'text-zinc-500'
				}`}
			>
				{label}
			</Link>
		</li>
	)
}

export default function Nav() {
	return (
		<nav>
			<ul className="flex gap-8">
				{navItems.map((navItem) => (
					<NavItem data={navItem} key={navItem.label} />
				))}
			</ul>
		</nav>
	)
}
