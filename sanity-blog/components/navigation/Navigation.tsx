"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { PagesTypes } from '@/types/pagesTypes';
import { getPages } from '@/sanity/data/pagesData';

const Navigation: React.FC = () => {
    const [allPages, setAllPages] = useState<PagesTypes[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const data =  await getPages();
            setAllPages(data);
        };

        fetchData();
    }, []);

    return (
        <nav>
            <ul className="flex justify-end">
            <li><Link href="/">Home</Link></li>
            {allPages.map((page) => (
                <li key={page._id} className="ml-4">
                    <Link href={`/pages/${page.slug}`}>{page.menutitle}</Link>
                </li>
            ))}
            </ul>
        </nav>
    );
};

export default Navigation