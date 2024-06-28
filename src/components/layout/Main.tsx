export default function Main({ children }: { children: React.ReactNode }) {
	return (
    <main className="grow flex flex-col bg-zinc-100 p-5">
      {children}
    </main>
  )
}
