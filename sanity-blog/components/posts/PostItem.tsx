import { PostTypes } from "@/types/postTypes"

export const PostItem = ({ post }: { post: PostTypes}) => {
    return (
        <div>
            <h2>{post.title}</h2>
        </div>
    )
}

export default PostItem