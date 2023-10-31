"use client"
import React, { useEffect, useState } from 'react'
import { getPosts } from "@/sanity/data/postsData"
import { PostTypes } from '@/types/postTypes';
import PostItem from "./PostItem";
import Pagination from '../pagination/Pagination';

const PostsList = () => { 
    const [allPosts, setAllPosts] = useState<PostTypes[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const postsPerPage = 4; 

    const filteredPosts = selectedCategory 
        ? allPosts.filter(post => post.categories?.some(cat => cat.title === selectedCategory))
        : allPosts;

    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    const currentPosts = filteredPosts.slice(startIndex, endIndex);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getPosts();
            setAllPosts(data);
        };

        fetchData();
    }, []);

    const filterByCategory = (category: string) => {
        setSelectedCategory(category);
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <section>
            <ul>
                {currentPosts.map((post) => (  // use currentPosts here
                    <li key={post._id}>
                        <PostItem post={post} onCategoryClick={filterByCategory}  />
                    </li>
                ))}
            </ul>
            <Pagination 
                totalCount={filteredPosts.length} 
                limit={postsPerPage} 
                currentPage={currentPage} 
                basePath="/posts" 
                onPageChange={handlePageChange} 
            />
        </section>
    )
}

export default PostsList;

