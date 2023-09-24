import BlogOneImage from "@/images/blogs/blog-29.png";
import BlogTwoImage from "@/images/blogs/blog-18.jpg";
import BlogThreeImage from "@/images/blogs/blog-27.jpg";
import BlogCard from "@/components/cards/blog-card";
import Link from "next/link";

const DesignBlogSection = () => {
  const blogs = [
    {
      image: BlogOneImage,
      title: 'Three ways to find the right software solution'
    },
    {
      image: BlogTwoImage,
      title: '5 steps to a successful requirements check',
      description: "Meet your customers' expectations by ensuring your project requirements are complete, clear and realistic with our requirements checker."
    },
    {
      image: BlogThreeImage,
      title: 'How to implement a successful app idea'
    }
  ];

  return (
    <section className="py-28 bg-dark-purple">
      <div className="container mx-auto px-8 md:px-0">
        <h6 className="text-normal text-center font-bold uppercase text-white tracking-widest mb-24">RELEVANT BLOG ARTICLES</h6>
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-7">
          {blogs.map((blog, index) => (
            <BlogCard image={blog.image} title={blog.title} description={blog.description} key={`blog-${index}`} />
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

export default DesignBlogSection;
