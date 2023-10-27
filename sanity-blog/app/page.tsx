import PostsList from "@/components/posts/PostsList"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-16">
      <h1 className="text-3xl">Sanity blog</h1>
      <div className="mt-8">
        <PostsList />
      </div>
    </main>
  )
}
