import BlogCard from "@/components/cards/blog-card";
import Link from "next/link";
import BlogOneImage from "@/images/blogs/blog-27.jpg";
import BlogTwoImage from "@/images/blogs/blog-23.jpg";
import BlogThreeImage from "@/images/blogs/blog-27.jpg";

const MobileAppDevelopmentBlogSection = () => {
  const blogs = [
    {
      image: BlogOneImage,
      title: 'Advantages of mobile apps for companies'
    },
    {
      image: BlogTwoImage,
      title: 'The difference between hybrid apps, native apps and cross-platform apps'
    },
    {
      image: BlogThreeImage,
      title: 'Progressive Web Apps (PWAs). What are they and what can they do?'
    }
  ];

  return (
    <section className="py-28 bg-dark-purple">
      <div className="container mx-auto px-8 md:px-0">
        <h6 className="text-normal text-center font-bold uppercase text-white tracking-widest mb-16">RELEVANT BLOG ARTICLES</h6>
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-7">
          {blogs.map((blog, index) => (
            <BlogCard image={blog.image} title={blog.title} key={`blog-${index}`} />
          ))}
        </div>
        <div className="flex justify-center">
          <Link href="/blog" className="btn bg-secondary px-20 py-4 font-bold text-white rounded uppercase mt-12">
            Show All Articles
          </Link>
        </div>
      </div>
    </section>
  )
}

export default MobileAppDevelopmentBlogSection;
