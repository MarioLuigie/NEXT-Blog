'use client'

//modules
import { useState } from 'react'
// import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
//lib
import { handleDeletePost, handleEditPost } from '@/lib/handlers/post.handlers'
import { IPost } from '@/lib/types'
import { useUser } from '@/lib/context'
//components
import DropDownMenu from '@/components/shared/DropDownMenu'
import PostDeleteDialog from '@/components/dialogs/PostDeleteDialog'
import PostUpdateDialog from '@/components/dialogs/PostUpdateDialog'

export default function PostDropDownMenu({ data }: { data: IPost }) {
	const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState<boolean>(false)
	const [isUpdateDialogOpen, setIsUpdateDialogOpen] = useState<boolean>(false)
	const [isReportDialogOpen, setIsReportDialogOpen] = useState<boolean>(false)
	const { user } = useUser()

	//Rezygnuje z useKindeBrowserClient w kazdej instancji PostDropDownMenu w celu zoptymalizowania aplikacji i tworze user context przez co tylko raz uzywam useKindeBrowserClient a wiec tylko raz wysyłam żadanie GET api/auth/setup zamiast tyle razy ile instancji PostDropDownMenu
	// const { user } = useKindeBrowserClient()

	// Delete
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

	// Edit
	const handleEditClick = () => {
		setIsUpdateDialogOpen(true)
		console.log('handleEditClick')
	}

	const handleClosePostUpdateDialog = () => {
		setIsUpdateDialogOpen(false)
		console.log('handleClosePostUpdateDialog')
	}

	const handleConfirmUpdate = () => {
		handleEditPost(data)
		console.log('handleConfirmUpdate', data)
	}

	// Report
	const handleReportClick = () => {
		setIsReportDialogOpen(true)
		console.log('handleReportClick')
	}

	return (
		<>
			{user?.id === data.creator.kindeId ? (
				<DropDownMenu
					items={[
						{ label: 'Edit Post', onClick: handleEditClick },
						{ label: 'Delete Post', onClick: handleDeleteClick },
					]}
				/>
			) : (
				<DropDownMenu
					items={[{ label: 'Report Post', onClick: handleReportClick }]}
				/>
			)}
			{isDeleteDialogOpen && (
				<PostDeleteDialog
					isOpen={isDeleteDialogOpen}
					onConfirm={handleConfirmDelete}
					onClose={handleClosePostDeleteDialog}
				/>
			)}
			{isUpdateDialogOpen && (
				<PostUpdateDialog
					isOpen={isUpdateDialogOpen}
					onConfirm={handleConfirmUpdate}
					onClose={handleClosePostUpdateDialog}
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
