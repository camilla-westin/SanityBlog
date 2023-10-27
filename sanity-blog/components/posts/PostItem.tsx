import { PostTypes } from "@/types/postTypes"
import CategoryList from "@/components/categories/CategoryList"

export const PostItem = ({ post }: { post: PostTypes}) => {
    const date = new Date(post._updatedAt);
    const formattedDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
    
    return (
        <div className="bg-white p-6 mb-4 rounded">
            <span className="block">{formattedDate}</span>
            <h2 className="text-2xl">{post.title}</h2>
            {post.author && post.author.name && <span>{post.author.name}</span>}
            <CategoryList categories={post.categories} />
        </div>
    )
}

export default PostItem