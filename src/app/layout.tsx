import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ToastContainer } from 'react-toastify'
import '@/styles/globals.css'
import 'react-toastify/dist/ReactToastify.css'
import { UserProvider } from '@/lib/context'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'cineXplore',
	description: 'Explore the cine world',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<UserProvider>{children}</UserProvider>
				<ToastContainer />
			</body>
		</html>
	)
}
