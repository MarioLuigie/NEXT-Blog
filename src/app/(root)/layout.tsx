// import Header from "@/components/layout/Header"
// import Main from "@/components/layout/Main"
// import Footer from "@/components/layout/Footer"
import { Header, Main, Footer } from '@/components/layout'

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div>
			<Header />
			<Main>{children}</Main>
			<Footer />
		</div>
	)
}