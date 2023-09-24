import BlogOneImage from "@/images/blogs/blog-19.jpg";
import BlogTwoImage from "@/images/blogs/blog-23.jpg";
import BlogThreeImage from "@/images/blogs/blog-27.jpg";
import BlogCard from "@/components/cards/blog-card";
import Link from "next/link";

const UXDesignBlogSection = () => {
  const blogs = [
    {
      image: BlogTwoImage,
      title: '3 tips for optimizing usability in frontend development',
      description: "User-friendliness plays an important role in front-end development. Learn how to improve user experience and make your website or application more intuitive."
    },
    {
      image: BlogThreeImage,
      title: 'Progressive Web Apps (PWAs). What are they and what can they do?'
    },
    {
      image: BlogOneImage,
      title: 'Why companies should rely on mobile apps'
    }
  ];

  return (
    <section className="py-28 bg-dark-purple">
      <div className="container mx-auto px-8 md:px-0">
        <h6 className="text-normal text-center font-bold uppercase tracking-widest mb-12 text-white">RELEVANT BLOG ARTICLES</h6>
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-7">
          {blogs.map((blog, index) => (
            <BlogCard image={blog.image} title={blog.title} description={blog.description} key={`blog-${index}`} />
          ))}
        </div>
        <div className="flex justify-center">
          <Link href="/blog" className="btn bg-secondary px-20 py-4 font-bold text-white rounded uppercase mt-12">
            All Articles
          </Link>
        </div>
      </div>
    </section>
  )
}

export default UXDesignBlogSection;
