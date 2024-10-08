'use client'

//modules
import { useState } from 'react'
import { useRouter } from 'next/navigation'
// import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
//lib
import { handleDeletePost } from '@/lib/handlers/post.handlers'
import { IPost } from '@/lib/models/post.model'
import { useUser } from '@/lib/context'
//components
import DropDownMenu from '@/components/shared/DropDownMenu'
import PostDeleteDialog from '@/components/dialogs/PostDeleteDialog'
import PostUpdateDialog from '@/components/dialogs/PostUpdateDialog'
import SVGImage from '../shared/SVGImage'

export default function PostDropDownMenu({
	data,
	isPostPage,
}: {
	data: IPost
	isPostPage?: boolean
}) {
	const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState<boolean>(false)
	const [isReportDialogOpen, setIsReportDialogOpen] = useState<boolean>(false)
	// const [isUpdateDialogOpen, setIsUpdateDialogOpen] = useState<boolean>(false)
	const { user } = useUser()
	const router = useRouter()

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

	const handleConfirmDelete = async () => {
		await handleDeletePost(data)
		router.push('/posts')
		console.log('handleConfirmDelete', data)
	}

	// Edit
	const handleEditClick = () => {
		if (isPostPage) {
			router.push(`/update-post?id=${data._id}&isPostPage=true`)
		} else {
			router.push(`/update-post?id=${data._id}`)
		}
		console.log('handleEditClick')
	}

	// const handleClosePostUpdateDialog = () => {
	// 	setIsUpdateDialogOpen(false)
	// 	console.log('handleClosePostUpdateDialog')
	// }

	// const handleConfirmUpdate = () => {
	// 	console.log('handleConfirmUpdate', data)
	// }

	// Report
	const handleReportClick = () => {
		setIsReportDialogOpen(true)
		console.log('handleReportClick')
	}

	return (
		<>
			{user?.id === data?.creator?.kindeId ? (
				<DropDownMenu
					items={[
						{ label: 'Edit Post', onClick: handleEditClick },
						{ label: 'Delete Post', onClick: handleDeleteClick },
					]}
					trigger={<SVGImage path="/assets/icons/more-horizontal.svg" />}
				/>
			) : (
				<DropDownMenu
					items={[{ label: 'Report Post', onClick: handleReportClick }]}
					trigger={<SVGImage path="/assets/icons/more-horizontal.svg" />}
				/>
			)}
			{isDeleteDialogOpen && (
				<PostDeleteDialog
					isOpen={isDeleteDialogOpen}
					onConfirm={handleConfirmDelete}
					onClose={handleClosePostDeleteDialog}
				/>
			)}
			{/* {isUpdateDialogOpen && (
				<PostUpdateDialog
					isOpen={isUpdateDialogOpen}
					onConfirm={handleConfirmUpdate}
					onClose={handleClosePostUpdateDialog}
				/>
			)} */}
		</>
	)
}
