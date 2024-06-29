export default function Page({ params, searchParams }: { params: any, searchParams: any}) {

  const { id } = searchParams

  return (
    <div>
      searchParams: {id}
      params: {params.post}
    </div>
  )
}