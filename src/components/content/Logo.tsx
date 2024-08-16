import Image from 'next/image'

export default function Logo() {
	return (
		<div className="flex-start">
			<Image src="/assets/Logo3a.svg" alt="Logo" width={250} height={72} />
		</div>
	)
}
