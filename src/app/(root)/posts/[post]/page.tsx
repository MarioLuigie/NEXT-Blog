import PostPage from '@/components/pages/PostPage'

export default function Page({ params }: { params: { post: string } }) {
	return <PostPage params={params}/>
}
