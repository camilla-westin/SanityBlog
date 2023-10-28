export interface AuthorProps {
  name: string,
  picture: any
}

export interface CategoryProps {
    title: string,
    category: string
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
    categories: CategoryProps[]
}