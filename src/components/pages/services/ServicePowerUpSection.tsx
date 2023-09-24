import Image from "next/image";
import ServicePowerUpImage from "@/images/services/Power_up.jpg";
import Link from "next/link";

const ServicePowerUpSection = () => {
  return (
    <section className="py-28 bg-dark-purple">
      <div className="container mx-auto px-8 md:px-0">
        <div className="flex flex-col md:flex-row md:items-center gap-28">
          <div className="flex-1">
            <Image src={ServicePowerUpImage} alt="Hire Design Team" className="w-full" />
          </div>
          <div className="flex-1">
            <h4 className="text-white text-5xl font-bold mb-12">Power Up - operation and maintenance of web and mobile apps</h4>
            <p className="text-white text-lg leading-relaxed mb-8">
              The operation and maintenance of web and mobile apps are important aspects that must be taken into account when developing apps. An app needs to be regularly updated and maintained to ensure that it functions properly and meets users&apos; needs. This includes monitoring app performance and availability, fixing bugs, and integrating new features and improvements. It is also important to carefully monitor the security of the app and the data it uses and take measures to protect it if necessary. Operating and maintaining web and mobile apps requires specialized skills and tools provided by experienced developers and IT experts.
            </p>
            <Link href="/power-up" className="btn bg-secondary px-20 py-4 font-bold text-white rounded uppercase mt-12">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicePowerUpSection;
