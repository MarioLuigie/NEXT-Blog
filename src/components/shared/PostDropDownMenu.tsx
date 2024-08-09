'use client'

import DropDownMenu from '@/components/shared/DropDownMenu'
import { handleDeletePost, handleEditPost } from '@/lib/handlers/post.handlers'

export default function PostDropDownMenu({ data }: { data: any }) {
	return (
		<DropDownMenu
			items={[
				{ label: 'Edit', onClick: handleEditPost(data._id) },
				{ label: 'Delete', onClick: handleDeletePost(data._id) },
			]}
		/>
	)
}
