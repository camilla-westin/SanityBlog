import CategoryItem from "./Category";
import { PostTypes } from "@/types/postTypes"


export const CategoryList = ({ categories }: { categories: PostTypes}) => {

    return (     
        <ul>
            {categories && categories.map(category => (
                <li key={category.title}><CategoryItem title={category.title} /></li>
            ))}
        </ul>     
    )
}

export default CategoryList;