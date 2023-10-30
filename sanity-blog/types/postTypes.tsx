export interface AuthorProps {
  name: string,
  picture: any
}

export interface CategoryProps {
    title: string
}

export type CategoryItemProps = {
  category: CategoryProps;
  onCategoryClick: (categoryTitle: string) => void;
}

export type CategoryListProps = {
  categories: CategoryProps[];
  onCategoryClick: (categoryTitle: string) => void;
}

type Block = {
  _key: string;
  _type: 'block';
  children: { _key: string; _type: 'span'; text: string; marks: string[] }[];
  markDefs: any[];
  style: string;
};

export type PostTypes = {
    _id: string,
    _updatedAt: string,
    title: string,
    slug: string,
    author: AuthorProps,
    body: Block[],
    categories: CategoryProps[],
    image: string
}

export type PostItemProps = {
    post: PostTypes;
    onCategoryClick: (category: string) => void;
}