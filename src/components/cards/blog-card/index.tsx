import Image, { StaticImageData } from "next/image";

type BlogCardProps = {
  image: string | StaticImageData;
  title: string;
  description?: string;
}
const BlogCard = ({ image, title, description }: BlogCardProps) => {
  return (
    <div className="blog-card bg-white cursor-pointer relative overflow-hidden shadow-xl flex flex-col">
      <div className="overflow-hidden relative">
        <Image src={image} alt="Blog" className="duration-300 w-full aspect-video object-center object-cover overflow-hidden" />
      </div>
      <div className="p-12 flex flex-col flex-1">
        <h5 className="text-2xl	font-bold mb-8">{title}</h5>
        {description && <h5 className="text-lg mb-4 -mt-4">{description}</h5>}
        <div className="text-secondary font-bold uppercase text-sm mt-auto">
          <span className="">More Info</span>
        </div>
      </div>
    </div>
  )
}

export default BlogCard;
