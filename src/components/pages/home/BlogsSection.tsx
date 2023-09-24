import Link from "next/link";
import BlogOneImage from "@/images/blogs/blog-1.jpg";
import BlogTwoImage from "@/images/blogs/blog-2.jpg";
import BlogThreeImage from "@/images/blogs/blog-3.jpg";
import BlogCard from "@/components/cards/blog-card";

const BlogsSection = () => {
  const blogs = [
    {
      image: BlogOneImage,
      title: '2023 - The year of the AI chatbot: customer communication through chatbot'
    },
    {
      image: BlogTwoImage,
      title: 'Cross Platform Development: Pros and Cons for Modern App Development'
    },
    {
      image: BlogThreeImage,
      title: 'Productivity boost with individual software solutions'
    }
  ];

  return (
    <section className="py-28">
      <div className="container mx-auto px-8 md:px-0">
        <div className="flex flex-col items-center">
          <h2 className="text-center uppercase text-sm font-bold mb-12">Blog</h2>
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-7">
            {blogs.map((blog, index) => (
              <BlogCard image={blog.image} title={blog.title} key={`blog-${index}`} />
            ))}
          </div>
          <Link href="/blog" className="btn bg-secondary px-20 py-4 font-bold text-white rounded uppercase mt-12">
            All Articles
          </Link>
        </div>
      </div>
    </section>
  )
}

export default BlogsSection;
