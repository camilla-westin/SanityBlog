import { createClient, groq } from "next-sanity"
import { PagesTypes } from "@/types/pagesTypes"

export async function getPages(): Promise<PagesTypes[]> {
	const client = createClient({
        projectId: 'js2nhuqq',
        dataset: "production",
        apiVersion: "2023-09-11",
        useCdn: true
	});

	return client.fetch(
        groq`*[_type == "page"][] {
                _id,
                _updatedAt,
                title,
                menutitle,
                "slug": slug.current,
                body,
                "image": mainImage.asset->url,

        }`,
	)
}

export async function getSinglePage(slug: string): Promise<PagesTypes> {
        const currentSlug: string = slug;

	const client = createClient({
        projectId: 'js2nhuqq',
        dataset: "production",
        apiVersion: "2023-09-11",
        useCdn: true
	});

	return client.fetch(
        groq`*[_type == "page" && slug.current == $currentSlug][0] {
                _id,
                _updatedAt,
                title,
                "slug": slug.current,
                body,
                "image": mainImage.asset->url,

        }`,
        { currentSlug }
	)
}