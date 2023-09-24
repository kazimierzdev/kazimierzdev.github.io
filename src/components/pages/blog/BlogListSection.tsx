import BlogCard from "@/components/cards/blog-card";
import Blog1Image from "@/images/blogs/blog-1.jpg";
import Blog2Image from "@/images/blogs/blog-2.jpg";
import Blog3Image from "@/images/blogs/blog-3.jpg";
import Blog4Image from "@/images/blogs/blog-4.jpg";
import Blog5Image from "@/images/blogs/blog-5.jpg";
import Blog6Image from "@/images/blogs/blog-6.jpg";
import Blog7Image from "@/images/blogs/blog-7.jpg";
import Blog8Image from "@/images/blogs/blog-8.jpg";
import Blog9Image from "@/images/blogs/blog-9.jpg";
import Blog10Image from "@/images/blogs/blog-10.jpg";
import Blog11Image from "@/images/blogs/blog-11.jpg";
import Blog12Image from "@/images/blogs/blog-12.jpg";
import Blog13Image from "@/images/blogs/blog-13.jpg";
import Blog14Image from "@/images/blogs/blog-14.jpg";
import Blog15Image from "@/images/blogs/blog-15.jpg";
import Blog16Image from "@/images/blogs/blog-16.jpg";
import Blog17Image from "@/images/blogs/blog-17.jpg";
import Blog18Image from "@/images/blogs/blog-18.jpg";
import Blog19Image from "@/images/blogs/blog-19.jpg";
import Blog20Image from "@/images/blogs/blog-20.jpg";
import Blog21Image from "@/images/blogs/blog-21.jpg";
import Blog22Image from "@/images/blogs/blog-22.jpg";
import Blog23Image from "@/images/blogs/blog-23.jpg";
import Blog24Image from "@/images/blogs/blog-24.jpg";
import Blog25Image from "@/images/blogs/blog-25.jpg";
import Blog26Image from "@/images/blogs/blog-26.jpg";
import Blog27Image from "@/images/blogs/blog-27.jpg";
import Blog28Image from "@/images/blogs/blog-28.png";
import Blog29Image from "@/images/blogs/blog-29.png";
import Blog30Image from "@/images/blogs/blog-30.png";

const BlogListSection = () => {
  const blogs = [
    {
      image: Blog1Image,
      title: '2023 - The year of the AI chatbot: customer communication through chatbot'
    },
    {
      image: Blog2Image,
      title: 'Cross Platform Development: Pros and Cons for Modern App Development'
    },
    {
      image: Blog3Image,
      title: 'Productivity boost with individual software solutions'
    },
    {
      image: Blog4Image,
      title: 'Responsive Design: Optimization of B2B applications on end devices'
    },
    {
      image: Blog5Image,
      title: 'Have your own app developed'
    },
    {
      image: Blog6Image,
      title: 'Success factor B2B applications'
    },
    {
      image: Blog7Image,
      title: 'UX and UI Design: The formula for success for B2B applications'
    },
    {
      image: Blog8Image,
      title: 'The Internet of Things (IoT): Definition and examples for B2B applications'
    },
    {
      image: Blog9Image,
      title: 'The big question mark in software development: standard software vs. individual development?'
    },
    {
      image: Blog10Image,
      title: 'The future of B2B app development'
    },
    {
      image: Blog11Image,
      title: 'Artificial intelligence and machine learning in B2B app development'
    },
    {
      image: Blog12Image,
      title: 'Cloud Computing in B2B App Development: Benefits and Applications'
    },
    {
      image: Blog13Image,
      title: 'The future of software development: Discover the benefits of ChatGPT'
    },
    {
      image: Blog14Image,
      title: "Master ChatGPT and unleash your creativity with TechVoyageSolution's revolutionary prompt generator"
    },
    {
      image: Blog15Image,
      title: 'Maximize your DevOps efficiency with a robust infrastructure'
    },
    {
      image: Blog16Image,
      title: '10 tips for successful component development in agile teams'
    },
    {
      image: Blog17Image,
      title: '3 tips for optimizing usability in frontend development'
    },
    {
      image: Blog18Image,
      title: '5 steps to a successful requirements check'
    },
    {
      image: Blog19Image,
      title: 'How much does it cost to have an app programmed?'
    },
    {
      image: Blog20Image,
      title: 'Standardized individualization in the development of web and mobile apps'
    },
    {
      image: Blog21Image,
      title: 'Progressive Web Apps (PWAs). What are they and what can they do?'
    },
    {
      image: Blog22Image,
      title: 'Angular and its advantages when used in enterprise apps'
    },
    {
      image: Blog23Image,
      title: 'The difference between hybrid apps, native apps and cross-platform apps'
    },
    {
      image: Blog24Image,
      title: 'Advantages and disadvantages of outsourcing software projects'
    },
    {
      image: Blog25Image,
      title: 'Why companies should rely on mobile apps'
    },
    {
      image: Blog26Image,
      title: '7 good reasons for individual software development'
    },
    {
      image: Blog27Image,
      title: 'How to implement a successful app idea'
    },
    {
      image: Blog28Image,
      title: 'Agile software development - what it is and why we work with it'
    },
    {
      image: Blog29Image,
      title: 'Three ways to find the right software solution'
    },
    {
      image: Blog30Image,
      title: 'Digital transformation and its effects on companies'
    },
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
        </div>
      </div>
    </section>
  )
}

export default BlogListSection;
