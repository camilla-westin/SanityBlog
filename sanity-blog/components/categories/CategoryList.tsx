import CategoryItem from "./Category";
import { CategoryProps } from "@/types/postTypes"


export const CategoryList = ({ categories }: { categories: CategoryProps[]}) => {

    return (     
        <ul className="p-0 flex mt-6">
            {categories && categories.map(category => (
                <li key={category.title}><CategoryItem title={category.title} /></li>
            ))}
        </ul>     
    )
}

export default CategoryList;