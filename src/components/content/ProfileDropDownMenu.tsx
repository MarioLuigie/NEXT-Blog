'use client'

//modules
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components'
import { useState, useEffect, useRef } from 'react'
//components
import ProfileLabel from '@/components/content/ProfileLabel'

export default function ProfileDropDownMenu({ user }: { user: any }) {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const menuRef = useRef<HTMLDivElement>(null)

	const toggleMenu = () => {
		setIsOpen((prevState) => !prevState)
	}

	const handleClickOutside = (e: MouseEvent) => {
		if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
			setIsOpen(false)
		}
	}

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside)
		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [handleClickOutside])

	return (
		<div className="relative" ref={menuRef}>
			<button onClick={toggleMenu} className="text-zinc-700 cursor-pointer">
				<ProfileLabel user={user} />
			</button>
			{isOpen && (
				<div className="absolute right-0 top-10 bg-white border border-gray-300 shadow-lg flex flex-col min-w-[300px] rounded-md p-4 gap-5">
          <div>Profile</div>
          <div>Account Settings</div>
          <div>Dark Mode</div>
          <div>Help and Support</div>
					<LogoutLink className="font-bold">Log out</LogoutLink>
				</div>
			)}
		</div>
	)
}

// Tak, jeśli chcesz, aby Twój komponent DropdownMenu był bardziej uniwersalny i wielokrotnego użytku, przekazywanie funkcji jako props do komponentu jest świetnym sposobem na osiągnięcie tego celu. Możesz pozwolić użytkownikom komponentu na dostosowanie zachowania menu, np. określenie, co ma się stać po kliknięciu na poszczególne opcje.

// Oto, jak możesz to zrobić:
// 1. Zaktualizowany Komponent DropdownMenu

// Przesyłaj funkcję jako prop do DropdownMenu. Możesz także przekazywać listę opcji menu oraz funkcję wywołania po kliknięciu w daną opcję.

// tsx

// 'use client'

// import SVGImage from '@/components/shared/SVGImage'
// import { useState, useEffect, useRef, ReactNode } from 'react'

// interface MenuItem {
//   label: string;
//   onClick: () => void;
// }

// interface DropdownMenuProps {
//   items: MenuItem[];
//   iconPath: string;
// }

// export default function DropdownMenu({ items, iconPath }: DropdownMenuProps) {
//   const [isOpen, setIsOpen] = useState<boolean>(false)
//   const menuRef = useRef<HTMLDivElement>(null)

//   const toggleMenu = () => {
//     setIsOpen(prevState => !prevState)
//   }

//   const handleClickOutside = useCallback((e: MouseEvent) => {
//     if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
//       setIsOpen(false)
//     }
//   }, [])

//   useEffect(() => {
//     document.addEventListener('mousedown', handleClickOutside)
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside)
//     }
//   }, [handleClickOutside])

//   return (
//     <div className="relative" ref={menuRef}>
//       <button
//         onClick={toggleMenu}
//         className="text-zinc-700 cursor-pointer"
//       >
//         <SVGImage path={iconPath} />
//       </button>
//       {isOpen && (
//         <div className="absolute right-0 mt-2 bg-white border border-gray-300 shadow-lg flex flex-col">
//           {items.map((item, index) => (
//             <div
//               key={index}
//               className="px-4 py-2 cursor-pointer hover:bg-gray-100"
//               onClick={() => {
//                 item.onClick()
//                 setIsOpen(false)
//               }}
//             >
//               {item.label}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   )
// }

// 2. Przykład Użycia Komponentu DropdownMenu

// Oto przykład, jak możesz używać zaktualizowanego komponentu DropdownMenu:

// tsx

// 'use client'

// import DropdownMenu from '@/components/DropdownMenu'

// export default function ExamplePage() {
//   const handleOption1Click = () => {
//     console.log('Opcja 1 kliknięta')
//   }

//   const handleOption2Click = () => {
//     console.log('Opcja 2 kliknięta')
//   }

//   const handleOption3Click = () => {
//     console.log('Opcja 3 kliknięta')
//   }

//   const menuItems = [
//     { label: 'Opcja 1', onClick: handleOption1Click },
//     { label: 'Opcja 2', onClick: handleOption2Click },
//     { label: 'Opcja 3', onClick: handleOption3Click },
//   ]

//   return (
//     <div>
//       <h1>Strona główna</h1>
//       <DropdownMenu items={menuItems} iconPath="/assets/icons/more-horizontal.svg" />
//     </div>
//   )
// }

// Wyjaśnienie:

//     Prop items: items to tablica obiektów, z których każdy reprezentuje jedną opcję w menu. Każdy obiekt ma label (etykietę wyświetlaną w menu) oraz onClick (funkcję, która zostanie wywołana po kliknięciu w tę opcję).

//     Prop iconPath: iconPath to ścieżka do ikony, którą chcesz wyświetlić w przycisku menu.

//     Kliknięcie w opcję menu: Po kliknięciu w jedną z opcji, wywołuje się funkcja przypisana do tej opcji, a menu zostaje zamknięte.

// Dzięki temu rozwiązaniu komponent DropdownMenu staje się bardziej uniwersalny i elastyczny, umożliwiając różne zastosowania w różnych częściach aplikacji.
