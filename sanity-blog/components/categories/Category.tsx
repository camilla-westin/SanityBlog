import { CategoryItemProps } from "@/types/postTypes"

const CategoryItem: React.FC<CategoryItemProps> = ({ category, onCategoryClick }) => {
    return (
        <div onClick={() => onCategoryClick(category.title)} className="bg-red-300 text-white rounded py-2 px-4 inline-block my-2 mr-2 cursor-pointer">
            {category.title}
        </div>
    )
}

export default CategoryItem