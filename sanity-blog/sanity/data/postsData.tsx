import { createClient, groq } from "next-sanity";
import { PostTypes } from "@/types/postTypes"

export async function getPosts(): Promise<PostTypes[]> {
	const client = createClient({
        projectId: 'js2nhuqq',
        dataset: "production",
        apiVersion: "2023-09-11",
        useCdn: true
	});

	return client.fetch(
        groq`*[_type == "post"][] {
                _id,
                _updatedAt,
                title,
                "author": author->{name},
                categories[]->{title},
                "slug": slug.current,
                "image": mainImage.asset->url
        }`
	) 
}

export async function getSinglePost(slug: string): Promise<PostTypes> {
        const currentSlug: string = slug;

	const client = createClient({
        projectId: 'js2nhuqq',
        dataset: "production",
        apiVersion: "2023-09-11",
        useCdn: true
	});

	return client.fetch(
        groq`*[_type == "post" && slug.current == $currentSlug][0] {
                _id,
                _updatedAt,
                title,
                "slug": slug.current,
                "author": author->{name},
                categories[]->{title},
                body,
                "image": mainImage.asset->url,

        }`,
        { currentSlug }
	)
}