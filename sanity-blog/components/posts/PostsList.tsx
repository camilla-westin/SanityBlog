import { getPosts } from "@/sanity/data/postsData"
import PostItem from "./PostItem";

export const PostsList = async() => {
    
    const posts = await getPosts();

    return (
        <section>
            <ul>
            {posts.map((post) => (
                <li key={post._id}>
                    <PostItem post={post}  />
                </li>
            ))}
            </ul>
        </section>
    )
}

export default PostsList;