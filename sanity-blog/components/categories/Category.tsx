export const CategoryItem = ({ title }: { title: string }) => {
    return (
        <div className="bg-red-300 text-white rounded py-2 px-4 inline-block my-2 mr-2">
            {title}
        </div>
    )
}

export default CategoryItem