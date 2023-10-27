import { PostTypes } from "@/types/postTypes"
import CategoryList from "@/components/categories/CategoryList"

export const PostItem = ({ post }: { post: PostTypes}) => {
    return (
        <div>
            <h2 className="text-2xl">{post.title}</h2>
            {post.author && post.author.name && <span>{post.author.name}</span>}
            <CategoryList categories={post.categories} />
        </div>
    )
}

export default PostItem