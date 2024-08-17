export default function HomePage() {
	return (
		<div className="flex-center overflow-hidden">
			{/* Text Content*/}
			<div className="w-full sm:w-1/2 flex flex-col items-center absolute z-20">
				<div className="max-w-[480px]">
					<h1 className="text-center text-5xl font-extrabold text-zinc-200 leading-tight mb-4">
						Voyage through the World of Cinema
					</h1>
				</div>
				<div>
					<p className="text-center text-xl text-zinc-300 mb-6">
						Welcome to the world of filmmaking, where every frame tells a
						story and every edit builds emotions.
					</p>
				</div>
			</div>
			{/* Video background Content */}
			<div className="flex justify-center min-h-[780px]">
				<video autoPlay loop muted className="object-cover">
					<source src='/assets/video/space1_2k.mp4' type="video/mp4" />
				</video>
			</div>
		</div>
	)
}
