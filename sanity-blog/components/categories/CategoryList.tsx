import CategoryItem from "./Category";
import { CategoryListProps } from "@/types/postTypes"

export const CategoryList: React.FC<CategoryListProps> = ({ categories, onCategoryClick }) => {  
    return (     
        <ul className="p-0 flex mt-6">
            {categories && categories.map(category => (
                <li key={category.title}><CategoryItem category={category} onCategoryClick={onCategoryClick} /></li>
            ))}
        </ul>     
    )
}

export default CategoryList;