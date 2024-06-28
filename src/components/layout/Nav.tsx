import { navItems } from '@/lib/constants'
import Link from 'next/link'

export type NavItem = {
	label: string
	href: string
}

function NavItem({ data: { label, href } }: { data: NavItem }) {
	return (
		<li>
			<Link href={href}>
				<p className="text-lg">{label}</p>
			</Link>
		</li>
	)
}

export default function Nav() {
	return (
		<nav>
			<ul className="flex gap-4">
				{navItems.map((navItem) => (
					<NavItem data={navItem} key={navItem.label} />
				))}
			</ul>
		</nav>
	)
}
