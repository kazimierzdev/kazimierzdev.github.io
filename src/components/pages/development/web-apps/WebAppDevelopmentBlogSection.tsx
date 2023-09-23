import BlogCard from "@/components/cards/blog-card";
import Link from "next/link";
import BlogOneImage from "@/images/blogs/blog-22.jpg";
import BlogTwoImage from "@/images/blogs/blog-24.jpg";
import BlogThreeImage from "@/images/blogs/blog-27.jpg";
import {useTranslation} from "next-i18next";

const WebAppDevelopmentBlogSection = () => {
  const { t } = useTranslation('common');

  const blogs = [
    {
      image: BlogOneImage,
      title: t('blog.angular_advantages')
    },
    {
      image: BlogTwoImage,
      title: t('blog.outsourcing_software')
    },
    {
      image: BlogThreeImage,
      title: t('blog.progressive_web_app')
    }
  ];

  return (
    <section className="py-28 bg-dark-purple">
      <div className="container mx-auto px-8 md:px-0">
        <h6 className="text-normal text-center font-bold uppercase text-white tracking-widest mb-16">{t('blog.relevant_blog')}</h6>
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-7">
          {blogs.map((blog, index) => (
            <BlogCard image={blog.image} title={blog.title} key={`blog-${index}`} />
          ))}
        </div>
        <div className="flex justify-center">
          <Link href="/blog" className="btn bg-secondary px-20 py-4 font-bold text-white rounded uppercase mt-12">
            {t('show_all_articles')}
          </Link>
        </div>
      </div>
    </section>
  )
}

export default WebAppDevelopmentBlogSection;
