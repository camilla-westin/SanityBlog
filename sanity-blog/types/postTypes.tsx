export interface AuthorProps {
  name: string,
  picture: any
}

export interface CategoryProps {
    title: string,
    category: string
}

export type PostTypes = {
    _id: string,
    _updatedAt: string,
    title: string,
    slug: string,
    author: AuthorProps,
    categories: CategoryProps[]
}