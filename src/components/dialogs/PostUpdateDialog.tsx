'use client'

//modules
import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'

interface PostUpdateDialogProps {
	isOpen: boolean
	onClose: () => void
	onConfirm: () => void
}

export default function PostUpdateDialog({
	isOpen,
	onClose,
	onConfirm,
}: PostUpdateDialogProps) {
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'unset'
		}

		return () => {
			document.body.style.overflow = 'unset'
		}
	}, [isOpen])

	if (!isOpen) return null

	return ReactDOM.createPortal(
		<div
			className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
			onClick={onClose}
		>
			<div
				className="bg-white p-4 rounded shadow-lg w-96"
				onClick={(e) => e.stopPropagation()}
			>
				<h2 className="text-xl font-bold mb-4">Confirm Changes</h2>
				<p className="mb-4">Are you sure you want to update this post?</p>
				<div className="flex justify-end">
					<button
						className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
						onClick={onClose}
					>
						Cancel
					</button>
					<button
						className="bg-emerald-600 text-white px-4 py-2 rounded"
						onClick={() => {
							onConfirm()
							onClose()
						}}
					>
						Update
					</button>
				</div>
			</div>
		</div>,
		document.body
	)
}
