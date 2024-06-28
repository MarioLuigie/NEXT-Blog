//components
import SVGImage from '@/components/shared/SVGImage'

export default function Logo() {
	return (
		<div className="flex flex-center relative ml-[100px]">
			<p className="text-black text-5xl font-extrabold absolute right-[130px]">
				cinem
			</p>
			<SVGImage path="/assets/Logo.svg" />
			<p className="text-black text-2xl font-extrabold">plore</p>
		</div>
	)
}
