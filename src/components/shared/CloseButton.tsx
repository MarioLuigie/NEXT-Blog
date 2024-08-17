'use client'

//modules
import { useRouter } from 'next/navigation'
//components
import SVGImage from '@/components/shared/SVGImage'

export default function CloseButton({
	redirectPath,
}: {
	redirectPath: string
}) {
	const router = useRouter()

	return (
		<div
			onClick={() => router.push(redirectPath)}
			className="text-zinc-700 flex flex-center rounded-full p-2 bg-zinc-200 hover:bg-zinc-300 cursor-pointer absolute top-5 left-5 z-10"
		>
			<SVGImage path="/assets/icons/close.svg" />
		</div>
	)
}
