import { navigation } from '@/lib/constants'
import Link from 'next/link'

export type NavigationItem = {
  label: string
  href: string
}

function NavigationItem({ data: { label, href } }: { data: NavigationItem }) {
	return (
		<li>
			<Link href={href}><p className='text-lg'>{label}</p></Link>
		</li>
	)
}

export default function Navigation() {
	return (
		<nav>
			<ul className="flex gap-4">
				{navigation.map((item) => (
					<NavigationItem data={item} key={item.label}/>
				))}
			</ul>
		</nav>
	)
}
