import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs"

type LayoutProps = {
  children: React.ReactNode;
};

const BlogLayout: React.FC<LayoutProps> = ({ children }) => {
  return <div>
  <Breadcrumbs
          homeElement={'Home'}
          separator={<span> | </span>}
          activeClasses='underline'
          containerClasses='flex px-16 pt-4' 
          listClasses='hover:underline mx-2'
          capitalizeLinks
        />
    {children}
  </div>
};

export default BlogLayout;