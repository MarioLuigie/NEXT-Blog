import SVGImage from '@/components/shared/SVGImage'

export default function Header() {
	return (
		<header className="bg-zinc-100 shadow-lg p-10 z-40 flex-start">
			<div className="flex flex-center relative ml-[100px]">
				<p className="text-black text-5xl font-extrabold absolute right-[130px]">
					cinem
				</p>
					<SVGImage path="/assets/Logo.svg" />
				<p className="text-black text-2xl font-extrabold">plore</p>
			</div>
		</header>
	)
}
