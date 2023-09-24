import Image from "next/image";
import ServiceDesignImage from "@/images/services/Design.jpg";
import Link from "next/link";

const ServiceDesignSection = () => {
  return (
    <section className="py-28 bg-dark-purple">
      <div className="container mx-auto px-8 md:px-0 pb-28">
        <div className="flex flex-col md:flex-row md:items-center gap-28">
          <div className="flex-1">
            <Image src={ServiceDesignImage} alt="Hire Design Team" className="w-full" />
          </div>
          <div className="flex-1">
            <h4 className="text-white text-5xl font-bold mb-12">With well thought-out design for perfect performance</h4>
            <p className="text-white text-lg leading-relaxed mb-8">
              UI/UX design refers to the design of user interfaces for web and mobile apps. It involves planning, prototyping and implementing visual elements, interactions and experiences to improve usability and user satisfaction.
            </p>
            <p className="text-white text-lg leading-relaxed mb-8">
              The benefits of good UI/UX design are many. For one thing, it can help an app be intuitive and easy to use, making it more enjoyable for users. On the other hand, it can ensure that an app appears visually appealing and attractive, which can help more users download and use it.
            </p>
            <p className="text-white text-lg leading-relaxed mb-8">
              Good UI/UX design can also help an app run faster and smoother by ensuring that the features and information you need are accessible in an efficient and intuitive way. In the long run, this can help users stay loyal to the app and use it regularly.
            </p>
            <p className="text-white text-lg leading-relaxed mb-8">
              We would be happy to advise you on your requirements.
            </p>
            <Link href="/design" className="btn bg-secondary px-20 py-4 font-bold text-white rounded uppercase mt-12">
              Learn More
            </Link>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-8 md:px-0 mt-28">
        <h2 className="text-white text-5xl md:text-7xl lg:text-9xl font-bold">Digitizing processes - for your employees</h2>
        <div className="flex justify-end mt-12">
          <div className="md:w-2/3">
            <p className="text-white relative leading-relaxed md:mr-12 service-category-text">
              If internal processes are digitized, the focus is on the way your employees work. So that the new software leads to more productivity, we base the application on the existing company process. The more intuitive and simple the user journey is designed, the more likely both your employees and your company will benefit from simplified and shortened work steps, optimized resources and low training effort.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceDesignSection;
