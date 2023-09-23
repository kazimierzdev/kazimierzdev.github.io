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
import {useTranslation} from "next-i18next";

const BlogListSection = () => {
  const { t } = useTranslation('common');

  const blogs = [
    {
      image: Blog1Image,
      title: t('blog.ai_chatbot')
    },
    {
      image: Blog2Image,
      title: t('blog.cross_platform')
    },
    {
      image: Blog3Image,
      title: t('blog.productivity_boost')
    },
    {
      image: Blog4Image,
      title: t('blog.responsive_design')
    },
    {
      image: Blog5Image,
      title: t('blog.app_developed')
    },
    {
      image: Blog6Image,
      title: t('blog.success_factor')
    },
    {
      image: Blog7Image,
      title: t('blog.formula_application')
    },
    {
      image: Blog8Image,
      title: t('blog.internet_definition')
    },
    {
      image: Blog9Image,
      title: t('blog.big_question')
    },
    {
      image: Blog10Image,
      title: t('blog.future_development')
    },
    {
      image: Blog11Image,
      title: t('blog.artificial_intelligence')
    },
    {
      image: Blog12Image,
      title: t('blog.cloud_computing')
    },
    {
      image: Blog13Image,
      title: t('blog.future_software')
    },
    {
      image: Blog14Image,
      title: t('blog.master_chatgpt')
    },
    {
      image: Blog15Image,
      title: t('blog.maximize_devops')
    },
    {
      image: Blog16Image,
      title: t('blog.component_development')
    },
    {
      image: Blog17Image,
      title: t('blog.optimizing_usability')
    },
    {
      image: Blog18Image,
      title: t('blog.successful_requirements')
    },
    {
      image: Blog19Image,
      title: t('blog.app_programmed')
    },
    {
      image: Blog20Image,
      title: t('blog.standardized_individualization')
    },
    {
      image: Blog21Image,
      title: t('blog.progressive_web_app')
    },
    {
      image: Blog22Image,
      title: t('blog.angular_advantages')
    },
    {
      image: Blog23Image,
      title: t('blog.difference_between')
    },
    {
      image: Blog24Image,
      title: t('blog.outsourcing_software')
    },
    {
      image: Blog25Image,
      title: t('blog.why_companies')
    },
    {
      image: Blog26Image,
      title: t('blog.individual_software')
    },
    {
      image: Blog27Image,
      title: t('blog.successful_app')
    },
    {
      image: Blog28Image,
      title: t('blog.agile_software_development')
    },
    {
      image: Blog29Image,
      title: t('blog.right_software_solution')
    },
    {
      image: Blog30Image,
      title: t('blog.digital_transformation')
    },
  ];

  return (
    <section className="py-28">
      <div className="container mx-auto px-8 md:px-0">
        <div className="flex flex-col items-center">
          <h2 className="text-center uppercase text-sm font-bold mb-12">{t('blog.title')}</h2>
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
