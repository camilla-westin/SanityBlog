import { createClient, groq } from "next-sanity"
import { HomepageTypes } from "@/types/homepageTypes";

export async function getHomepage(): Promise<HomepageTypes[]> {
	const client = createClient({
        projectId: 'js2nhuqq',
        dataset: "production",
        apiVersion: "2023-09-11",
        useCdn: true
	});

	return client.fetch(
        groq`*[_type == "homepage"][0] {
                _id,
                title
        }`,
	)
}
        