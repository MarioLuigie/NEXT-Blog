export default async function Page({ params }: { params: { post: string } }) {
	const res = await fetch(`https://dummyjson.com/posts/${params.post}`)

	if (!res.ok) {
		console.error('Problem with fetching post')
		return
	}

	const { title, body } = await res.json()
	return (
		<div className="flex flex-wrap shadow-2xl">
			<div className="min-w-[300px] min-h-[300px] w-[100%] sm:w-1/2 lg:w-2/3 bg-zinc-200 grow"></div>
			<div className="flex flex-col w-[100%] sm:w-1/2 lg:w-1/3 grow p-10">
				<h2 className="text-4xl text-zinc-900 font-bold">{title}</h2>
				<p className="pt-10 text-justify">{body}</p>
			</div>
		</div>
	)
}
