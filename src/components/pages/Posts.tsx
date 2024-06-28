import Post from "@/components/content/Post"

export default function Posts() {

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-10">
      <Post />
      <Post />
      <Post />
    </div>
  )
}