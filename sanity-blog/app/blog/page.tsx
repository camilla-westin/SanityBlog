import PostsList from "@/components/posts/PostsList"

export default function BlogPage() {
  return (
    <main className="flex min-h-screen flex-col p-16">   
      <h1 className="text-3xl">Blog archive</h1>
      <div className="mt-8">
        <PostsList />
      </div>
    </main>
  )
}