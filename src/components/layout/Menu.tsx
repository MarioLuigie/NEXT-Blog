import Nav from '@/components/layout/Nav'
import Sheet from '@/components/layout/Sheet'

export default function Menu() {
	return (
		<div className="flex-start lg:flex-center">
			<div className="max-lg:hidden">
				<Nav />
			</div>
			<div className="lg:hidden">
				<Sheet left />
			</div>
		</div>
	)
}
