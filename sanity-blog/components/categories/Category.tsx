import { CategoryProps } from "@/types/postTypes"

export const CategoryItem = ({ title }: { title: CategoryProps}) => {
    return (
        <div className="bg-white inline-block m-3">
            {title}
        </div>
    )
}

export default CategoryItem