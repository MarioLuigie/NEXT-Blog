'use client'

import SVGImage from '@/components/shared/SVGImage'
import { useState, useEffect, useRef } from 'react'

export default function DropDownMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  const toggleMenu = () => {
    setIsOpen(prevState => !prevState)
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
  }, [])

  const handleMenuItemClick = () => {
    setIsOpen(false)
  }

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={toggleMenu}
        className="text-zinc-700 cursor-pointer"
      >
        <SVGImage path="/assets/icons/more-horizontal.svg" />
      </button>
      {isOpen && (
        <div className="absolute right-0 top-3 mt-2 bg-white border border-gray-300 shadow-lg flex flex-col min-w-[140px] rounded-md">
          <div
            className="px-4 py-2 cursor-pointer hover:bg-gray-100 text-zinc-500"
            onClick={handleMenuItemClick}
          >
            Edit
          </div>
          <div
            className="px-4 py-2 cursor-pointer hover:bg-gray-100 text-zinc-500"
            onClick={handleMenuItemClick}
          >
            Hide
          </div>
          <div
            className="px-4 py-2 cursor-pointer hover:bg-gray-100 text-zinc-500"
            onClick={handleMenuItemClick}
          >
            Delete
          </div>
        </div>
      )}
    </div>
  )
}
