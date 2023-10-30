"use client"
import React, { useEffect, useState } from 'react'
import { getPosts } from "@/sanity/data/postsData"
import { PostTypes } from '@/types/postTypes';
import PostItem from "./PostItem";

const PostsList = () => { 
    const [allPosts, setAllPosts] = useState<PostTypes[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const data =  await getPosts();
            setAllPosts(data);
        };

        fetchData();
    }, []);

    const filterByCategory = (category: string) => {
        setSelectedCategory(category);
    };

    const filteredPosts = selectedCategory 
    ? allPosts.filter(post => post.categories?.some(cat => cat.title === selectedCategory))
    : allPosts;

    return (
        <section>
            <ul>
            {filteredPosts.map((post) => (
                <li key={post._id}>
                    <PostItem post={post} onCategoryClick={filterByCategory}  />
                </li>
            ))}
            </ul>
        </section>
    )
}

export default PostsList;
