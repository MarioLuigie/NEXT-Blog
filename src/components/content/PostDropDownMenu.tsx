'use client'

import DropDownMenu from '@/components/shared/DropDownMenu'
import { handleDeletePost, handleEditPost } from '@/lib/handlers/post.handlers'
import { IPost } from '@/lib/types'
import { useState } from 'react'
import PostDeleteDialog from '@/components/dialogs/PostDeleteDialog'

interface PostDropDownMenuProps {
	data: IPost
}

export default function PostDropDownMenu({ data }: PostDropDownMenuProps) {
	const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState<boolean>(false)
	const [isEditDialogOpen, setIsEditDialogOpen] = useState<boolean>(false)

	const handleDeleteClick = () => {
		setIsDeleteDialogOpen(true)
		console.log('handleDeleteClick')
	}

	const handleClosePostDeleteDialog = () => {
		setIsDeleteDialogOpen(false)
		console.log('handleClosePostDeleteDialog')
	}

	const handleConfirmDelete = () => {
		handleDeletePost(data)
		console.log('handleConfirmDelete', data)
	}

	return (
		<>
			<DropDownMenu
				items={[
					{ label: 'Edit', onClick: handleEditPost(data) },
					{ label: 'Delete', onClick: handleDeleteClick },
				]}
			/>
			{isDeleteDialogOpen && (
				<PostDeleteDialog
					isOpen={isDeleteDialogOpen}
					onConfirm={handleConfirmDelete}
					onClose={handleClosePostDeleteDialog}
				/>
			)}
		</>
	)
}

{
	/* <DropDownMenu
items={[
	{ label: 'Edit', onClick: handleEditPost(data) },
	{ label: 'Delete', onClick: handleDeletePost(data) },
]}
/> */
}
