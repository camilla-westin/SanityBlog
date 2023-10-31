"use client"
import { useState, useEffect } from "react"
import { getHomepage } from "@/sanity/data/homepageData"
import PostsList from "@/components/posts/PostsList"
import { HomepageTypes } from "@/types/homepageTypes"

export default function Home() {
  const [homepage, setHomepage] = useState<HomepageTypes>();

   useEffect(() => {
        const fetchData = async () => {
            const data = await getHomepage();
            setHomepage(data[0]);
        };

        fetchData();
    }, []);

  return (
    <main className="flex min-h-screen flex-col p-16">
      <h1 className="text-3xl">{homepage?.title}</h1>
      <div className="mt-8">
        <PostsList />
      </div>
    </main>
  )
}
