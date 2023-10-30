"use client"
import React, { useEffect, useState } from 'react'
import { getSinglePost } from "@/sanity/data/postsData"
import { PostTypes } from "@/types/postTypes"
import CategoryList from '@/components/categories/CategoryList'
import {PortableText} from '@portabletext/react'
import Image from "next/image";


type Props = {
    params: {
        singlepage: string;
    };
}

export default function BlogSinglePage({ params }: Props) {
    const [blogSingle, setBlogSingle] = useState<PostTypes | null>(null);
    const [postDate, setPostDate] = useState<string | null>(null);
    useEffect(() => {
        const fetchData = async () => {
            const data = await getSinglePost(params.singlepage);
            setBlogSingle(data);

            const date = new Date(data._updatedAt);
            const formattedDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
            setPostDate(formattedDate)
        };

        fetchData();
    }, [params.singlepage]);

    if (!blogSingle) {
        return <div>Loading...</div>;
    }

    return (
        <article className="container mx-auto my-4 px-4 xl:px-12">
            <div className="bg-white p-6 rounded">
                <h1 className="text-black py-3 lg:opacity-90 text-7xl xl:text-maya-big">{blogSingle.title}</h1>
                {blogSingle.image && (
                <div className="aspect-rectangle my-6 block">
                    <Image
                    src={blogSingle.image}
                    alt={blogSingle.title}
                    width={1000}
                    height={1000}
                    className="object-cover w-full h-full" />
                </div>
                )}
                <span>{postDate}</span>
                <div className="mt-4">
                    <PortableText
                        value={blogSingle.body}
                    />
                </div>
                <CategoryList categories={blogSingle.categories} onCategoryClick={() => {}} />
            </div>
        </article>
    )
}
