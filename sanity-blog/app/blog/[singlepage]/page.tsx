"use client"
import React, { useEffect, useState } from 'react'
import { getSinglePost } from "@/sanity/data/postsData"
import { PostTypes } from "@/types/postTypes"
import CategoryList from '@/components/categories/CategoryList'

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
        <article className="container mx-auto px-4 xl:px-12">
            <div>
                <h1 className="uppercase text-black py-3 lg:opacity-90 text-7xl xl:text-maya-big">{blogSingle.title}</h1>
                <span>{postDate}</span>
                <CategoryList categories={blogSingle.categories} />
            </div>
        </article>
    )
}
