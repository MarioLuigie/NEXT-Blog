import SVGImage from '@/components/shared/SVGImage'

export default function Logo() {
	return (
		<div className="flex-center">
			{/* <p className="text-zinc-900 text-4xl font-bold pb-2">cine</p> */}
			<SVGImage path={'/assets/Logo3a.svg'} />
			{/* <p className="text-zinc-900 text-4xl font-bold pb-2 pl-2">plore</p> */}
		</div>
	)
}

// export default function Logo() {
// 	return (
// 		<div className="flex-center">
// 			<p className="text-zinc-900 text-4xl font-extrabold pr-4">
// 				cine
// 			</p>
// 			<p className="text-black text-7xl font-medium scale-x-200">X</p>
// 			<p className="text-black text-4xl font-extrabold pl-5">plore</p>
// 		</div>
// 	)
// }
