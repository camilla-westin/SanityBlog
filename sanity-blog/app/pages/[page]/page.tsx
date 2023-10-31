"use client"
import React, { useEffect, useState } from 'react'
import { getSinglePage } from "@/sanity/data/pagesData"
import { PagesTypes } from "@/types/pagesTypes"
import {PortableText} from '@portabletext/react'
import Image from "next/image";


type Props = {
    params: {
        page: string;
    };
}

export default function SinglePage({ params }: Props) {
    const [pageSingle, setPageSingle] = useState<PagesTypes | null>(null);
    useEffect(() => {
        const fetchData = async () => {
            const data = await getSinglePage(params.page);
            setPageSingle(data);
        };

        fetchData();
    }, [params.page]);

    if (!pageSingle) {
        return <div>Loading...</div>;
    }

    return (
        <article className="container mx-auto my-4 px-4 xl:px-12">
            <div className="bg-white p-6 rounded">
                <h1 className="text-black py-3 lg:opacity-90 text-7xl xl:text-maya-big">{pageSingle.title}</h1>
                {pageSingle.image && (
                <div className="aspect-rectangle my-6 block">
                    <Image
                    src={pageSingle.image}
                    alt={pageSingle.title}
                    width={1000}
                    height={1000}
                    className="object-cover w-full h-full" />
                </div>
                )}
                <div className="mt-4">
                    <PortableText
                        value={pageSingle.body}
                    />
                </div>
            </div>
        </article>
    )
}
