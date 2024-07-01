import Post from '@/components/pages/Post'

export default function Page({ params }: { params: { post: string } }) {
	return <Post params={params}/>
}
