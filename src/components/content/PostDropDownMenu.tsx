'use client'

import DropDownMenu from '@/components/shared/DropDownMenu'
import { handleDeletePost, handleEditPost } from '@/lib/handlers/post.handlers'
import { IPost } from '@/lib/types'

interface PostDropDownMenuProps {
	data: IPost
}

export default function PostDropDownMenu({ data }: PostDropDownMenuProps) {
	return (
		<DropDownMenu
			items={[
				{ label: 'Edit', onClick: handleEditPost(data) },
				{ label: 'Delete', onClick: handleDeletePost(data) },
			]}
		/>
	)
}
