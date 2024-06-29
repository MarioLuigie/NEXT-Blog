export default function Page({ params }: { params: any}) {

  return (
    <div>
      {params.slug}
    </div>
  )
}