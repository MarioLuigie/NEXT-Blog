import { IPost } from '@/lib/types'

export default function Post({ data }: { data: IPost }) {
	const { title, body } = data
	return (
		<div className="flex flex-wrap shadow-2xl grow">
			<div className="min-w-[300px] min-h-[300px] w-[100%] sm:w-1/2 lg:w-2/3 bg-zinc-200 grow"></div>
			<div className="flex flex-col w-[100%] sm:w-1/2 lg:w-1/3 grow p-10">
				<h2 className="text-4xl text-zinc-900 font-bold">{title}</h2>
				<p className="pt-10 text-justify">{body}</p>
			</div>
		</div>
	)
}
