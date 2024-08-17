'use client'

import { useState } from 'react'
import Link from 'next/link'
import { navItems } from '@/lib/constants'

function SheetItem({
	data,
	closeMenu,
}: {
	data: { label: string, href: string }
	closeMenu: () => void
}) {
	return (
		<li>
			<Link href={data.href}>
				<div onClick={closeMenu} className="p-2 text-lg hover:bg-gray-100">
					{data.label}
				</div>
			</Link>
		</li>
	)
}

export default function Sheet({
	left = false,
	right = false,
}: {
	left?: boolean
	right?: boolean
}) {
	const [isOpen, setIsOpen] = useState(false)

	const toggleMenu = () => setIsOpen(!isOpen)
	const closeMenu = () => setIsOpen(false)

	const positionClass = left ? 'left-0' : 'right-0'
	const transformClass = isOpen
		? 'translate-x-0'
		: left
		? '-translate-x-full'
		: 'translate-x-full'

	return (
		<>
			{/* Sheet Icon */}
			<div className={`relative z-50 ${left ? 'ml-auto' : ''}`}>
				<button
					className="text-3xl p-2 focus:outline-none"
					onClick={toggleMenu}
				>
					&#9776;
				</button>
			</div>

			{/* Overlay */}
			{isOpen && (
				<div
					className="fixed inset-0 z-40 bg-black opacity-50"
					onClick={closeMenu}
				/>
			)}

			{/* Menu */}
			<div
				className={`fixed top-0 ${positionClass} h-full w-[320px] bg-white z-50 transform ${transformClass} transition-transform duration-300 ease-in-out shadow-lg`}
			>
				<div className="flex items-center justify-between p-4 border-b">
					<h2 className="text-xl font-bold">Menu</h2>
					<button
						onClick={closeMenu}
						className="text-2xl focus:outline-none"
					>
						&times;
					</button>
				</div>
				{/* Sheet Navigation */}
				<nav className="flex flex-col p-4">
					<ul>
						{navItems.map((navItem) => (
							<SheetItem
								data={navItem}
								closeMenu={closeMenu}
								key={navItem.label}
							/>
						))}
					</ul>
				</nav>
			</div>
		</>
	)
}

// 'use client'

// import { useState } from 'react'
// import Link from 'next/link'

// export default function Sheet() {
// 	const [isOpen, setIsOpen] = useState(false)

// 	const toggleMenu = () => setIsOpen(!isOpen)
// 	const closeMenu = () => setIsOpen(false)

// 	return (
// 		<>
// 			{/* Hamburger Icon */}
// 			<div className="relative z-50">
// 				<button
// 					className="text-3xl p-2 focus:outline-none"
// 					onClick={toggleMenu}
// 				>
// 					&#9776;
// 				</button>
// 			</div>

// 			{/* Overlay */}
// 			{isOpen && (
// 				<div
// 					className="fixed inset-0 z-40 bg-black opacity-50"
// 					onClick={closeMenu}
// 				/>
// 			)}

// 			{/* Menu */}
// 			<div
// 				className={`fixed top-0 right-0 h-full w-[320px] bg-white z-50 transform ${
// 					isOpen ? 'translate-x-0' : 'translate-x-full'
// 				} transition-transform duration-300 ease-in-out shadow-lg`}
// 			>
// 				<div className="flex items-center justify-between p-4 border-b">
// 					<h2 className="text-xl font-bold">Menu</h2>
// 					<button
// 						onClick={closeMenu}
// 						className="text-2xl focus:outline-none"
// 					>
// 						&times;
// 					</button>
// 				</div>
// 				<nav className="flex flex-col p-4">
// 					<Link href="/">
// 						<div
// 							onClick={closeMenu}
// 							className="p-2 text-lg hover:bg-gray-100"
// 						>
// 							Home
// 						</div>
// 					</Link>
// 					<Link href="/posts">
// 						<div
// 							onClick={closeMenu}
// 							className="p-2 text-lg hover:bg-gray-100"
// 						>
// 							All Articles
// 						</div>
// 					</Link>
// 					<Link href="/create-post">
// 						<div
// 							onClick={closeMenu}
// 							className="p-2 text-lg hover:bg-gray-100"
// 						>
// 							Create Article
// 						</div>
// 					</Link>
// 				</nav>
// 			</div>
// 		</>
// 	)
// }
