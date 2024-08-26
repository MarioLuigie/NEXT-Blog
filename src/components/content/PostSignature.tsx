import { IUser } from '@/lib/models/user.model'
import Image from 'next/image'

// Użycie type zamiast interface jest w pełni poprawne i jest często używane do definiowania kształtu obiektów, zwłaszcza gdy nie potrzebujesz zalet dziedziczenia, które oferują interface. Oba podejścia są poprawne i można je używać zamiennie w zależności od potrzeb.
// type Creator = {
// 	picture: string
// 	firstName: string
// 	lastName: string
// }

export default function PostSignature({ creator }: { creator: IUser | null }) {
	return (
		<div className="flex flex-start gap-2">
			<Image
				className="rounded-full w-[33px] aspect-square"
				width={33}
				height={33}
				src={creator?.picture || ""}
				alt="Avatar"
			/>
			<p className="text-xs text-zinc-400">
				{creator?.firstName} {creator?.lastName}
			</p>
		</div>
	)
}
