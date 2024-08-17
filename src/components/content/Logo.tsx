import Image from 'next/image'
import Link from 'next/link'

export default function Logo({ imagePath, redirectPath }: { imagePath: string, redirectPath: string}) {
	return (
		<div className="flex-center lg:flex-start">
			<Link href={redirectPath}>
				<div className="flex-start">
					<Image
						src={imagePath}
						alt="Logo"
						width={170}
						height={72}
					/>
				</div>
			</Link>
		</div>
	)
}
