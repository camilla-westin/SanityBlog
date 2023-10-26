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
                _createdAt,
                title,
        }`
	) 
}