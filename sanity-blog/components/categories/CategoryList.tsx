import CategoryItem from "./Category";
import { PostTypes } from "@/types/postTypes"


export const CategoryList = ({ categories }: { categories: PostTypes}) => {

    return (     
        <ul className="p-0 flex">
            {categories && categories.map(category => (
                <li key={category.title}><CategoryItem title={category.title} /></li>
            ))}
        </ul>     
    )
}

export default CategoryList;