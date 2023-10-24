import { getPosts } from "@/sanity/data/postsData"

const PostList = async() => {
    
    const posts = await getPosts();

    return (
        <section>
        {posts.length === 0 ? (
            <p>No shoes available</p>
        ) : (
        <ul className="grid md:grid-cols-2 gap-6 mt-4 lg:mt-12">
            {posts.map((post) => (
                <li key={post._id}>{post.title}</li>
            ))}
        </ul>
      )}   
        </section>
    );
}

export default PostList;




