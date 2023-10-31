type Block = {
  _key: string;
  _type: 'block';
  children: { _key: string; _type: 'span'; text: string; marks: string[] }[];
  markDefs: any[];
  style: string;
};

export type PagesTypes = 
{
    _id: string,
    _updatedAt: string,
    title: string,
    menutitle: string,
    slug: string,
    body: Block[],
    image: string
}