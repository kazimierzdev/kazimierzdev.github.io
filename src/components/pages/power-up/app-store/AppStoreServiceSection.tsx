import Image from "next/image";
import SoftwareImage from "@/images/mobile/software_agentur.jpg";

const AppStoreServiceSection = () => {
  return (
    <section className="py-28 bg-dark-purple">
      <div className="container mx-auto px-8 md:px-0">
        <div className="flex flex-col md:flex-row md:items-center gap-28">
          <div className="flex-1">
            <h4 className="text-white text-4xl font-bold mb-8">Analytics and service</h4>
            <p className="text-lg mt-4 mb-12 text-white">We also integrate analytics tools and enable push notifications. We also provide ongoing maintenance of the mobile app during updates to the iOS and Android operating systems. This gives you enough time to focus on more important things and save unnecessary frustration and repeated runs.</p>
            <button className="btn bg-secondary px-20 py-4 font-bold text-white rounded uppercase">
              Inquire for free
            </button>
          </div>
          <div className="flex-1">
            <Image src={SoftwareImage} alt="Hire Design Team" className="w-full" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AppStoreServiceSection;
