import { PostItemProps } from "@/types/postTypes"
import CategoryList from "@/components/categories/CategoryList"
import Link from 'next/link'
import Image from "next/image";

const PostItem: React.FC<PostItemProps> = ({ post, onCategoryClick }) => {
    const date = new Date(post._updatedAt);
    const formattedDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
    return (
        <div className="bg-white p-6 mb-4 rounded flex">
            <div>
                {post.image && (
                    <div className="aspect-square pr-4">
                        <Image
                        src={post.image}
                        alt={post.title}
                        width={100}
                        height={100}
                        className="object-cover w-full h-full" />
                    </div>
                    )}
            </div>
            <div>
                <span className="block">{formattedDate}</span>
                <Link href={`/blog/${post.slug}`}><h2 className="text-2xl">{post.title}</h2></Link>
                {post.author && post.author.name && <span>{post.author.name}</span>}
                <CategoryList categories={post.categories} onCategoryClick={onCategoryClick} />
            </div>
        </div>
    )
}

export default PostItem