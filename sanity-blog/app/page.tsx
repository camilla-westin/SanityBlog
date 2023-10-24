import PostList from "@/components/posts/PostList"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Sanity blog</h1>
      <div>
        <PostList />
      </div>
    </main>
  )
}
