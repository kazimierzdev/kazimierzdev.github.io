import BlogOneImage from "@/images/blogs/blog-18.jpg";
import BlogTwoImage from "@/images/blogs/blog-23.jpg";
import BlogThreeImage from "@/images/blogs/blog-27.jpg";
import BlogCard from "@/components/cards/blog-card";
import Link from "next/link";
import {useTranslation} from "next-i18next";

const UIDesignBlogSection = () => {
  const { t } = useTranslation('common');

  const blogs = [
    {
      image: BlogOneImage,
      title: t('blog.successful_requirements'),
      description: t('blog.successful_requirements_description')
    },
    {
      image: BlogTwoImage,
      title: t('blog.optimizing_usability'),
      description: t('blog.optimizing_usability_description')
    },
    {
      image: BlogThreeImage,
      title: t('blog.successful_app')
    }
  ];

  return (
    <section className="py-28">
      <div className="container mx-auto px-8 md:px-0">
        <h6 className="text-normal text-center font-bold uppercase tracking-widest mb-12">{t('blog.relevant_blog')}</h6>
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-7">
          {blogs.map((blog, index) => (
            <BlogCard image={blog.image} title={blog.title} description={blog.description} key={`blog-${index}`} />
          ))}
        </div>
        <div className="flex justify-center">
          <Link href="/blog" className="btn bg-secondary px-20 py-4 font-bold text-white rounded uppercase mt-12">
            {t('all_articles')}
          </Link>
        </div>
      </div>
    </section>
  )
}

export default UIDesignBlogSection;
