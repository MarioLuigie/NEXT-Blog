//lib
import { getPost } from '@/lib/actions/post.actions'
//components
import PostDropDownMenu from '@/components/content/PostDropDownMenu'
import PostSignature from '@/components/content/PostSignature'

export default async function Post({ params }: { params: { post: string } }) {
	const { data } = await getPost(params.post)

	return (
		<div className="flex flex-wrap shadow-2xl grow">
			<div className="min-w-[300px] min-h-[300px] w-[100%] sm:w-1/2 lg:w-2/3 bg-zinc-200 grow"></div>
			<div className="flex flex-col w-[100%] sm:w-1/2 lg:w-1/3 grow p-10 bg-zinc-50">
				<div className="flex flex-between">
					<PostSignature creator={data.creator} />
					<PostDropDownMenu data={data} />
				</div>
				<h2 className="text-4xl text-zinc-900 font-bold mt-8">
					{data.title}
				</h2>
				<p className="pt-10 text-justify">{data.article}</p>
			</div>
		</div>
	)
}

// export default async function Post({ params }: { params: { post: string } }) {

// 	const res = await fetch(`https://dummyjson.com/posts/${params.post}`)

// 	if (!res.ok) {
// 		console.error('Problem with fetching post')
// 		return
// 	}

// 	const data = await res.json()

// 	return (
// 		<div className="flex flex-wrap shadow-2xl grow">
// 			<div className="min-w-[300px] min-h-[300px] w-[100%] sm:w-1/2 lg:w-2/3 bg-zinc-200 grow"></div>
// 			<div className="flex flex-col w-[100%] sm:w-1/2 lg:w-1/3 grow p-10">
// 				<h2 className="text-4xl text-zinc-900 font-bold">{data.title}</h2>
// 				<p className="pt-10 text-justify">{data.body}</p>
// 			</div>
// 		</div>
// 	)
// }
