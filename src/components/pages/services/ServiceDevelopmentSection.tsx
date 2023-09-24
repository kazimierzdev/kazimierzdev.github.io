import Image from "next/image";
import ServiceDevelopmentImage from "@/images/services/Development.jpg";
import Link from "next/link";

const ServiceDevelopmentSection = () => {
  return (
    <section className="py-28">
      <div className="container mx-auto px-8 md:px-0">
        <div className="flex flex-col md:flex-row md:items-center gap-28">
          <div className="flex-1">
            <h4 className="text-5xl font-bold mb-12">Development of next generation web and mobile apps</h4>
            <p className="text-lg leading-relaxed mb-8">
              The development of web and mobile apps has increased enormously in recent years. More and more companies and organizations are realizing the benefits of apps that allow them to offer their services and products in a simple and user-friendly way. The technologies used to develop web and mobile apps have also developed rapidly. There are many different languages ​​and frameworks used by developers to create powerful and user-friendly apps. An important trend in web and mobile app development is the focus on usability and the integration of artificial intelligence to improve and personalize the interaction with the apps.
            </p>
            <Link href="/development" className="btn bg-secondary px-20 py-4 font-bold text-white rounded uppercase mt-12">
              Learn More
            </Link>
          </div>
          <div className="flex-1">
            <Image src={ServiceDevelopmentImage} alt="Hire Design Team" className="w-full" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceDevelopmentSection;
