import Image from "next/image";
import PowerScalabilityImage from "@/images/power-up/scalability.jpg";

const ArchitectureDesignSoftwareSection = () => {
  return (
    <section className="py-28">
      <div className="container mx-auto px-8 md:px-0">
        <div className="flex flex-col md:flex-row md:items-center gap-28">
          <div className="flex-1">
            <Image src={PowerScalabilityImage} alt="Hire Design Team" className="w-full" />
          </div>
          <div className="flex-1">
            <div className="lg:w-5/6">
              <h4 className="text-4xl font-bold mb-8">Various aspects of software development</h4>
              <p className="leading-relaxed">
                The architecture of your software includes several aspects that need to be organized and serve as the cornerstone of a sustainable software solution. That&apos;s why, as a technology partner for software development, we pay great attention to flexibility and expandability in the architectural concept. This is the only way to ensure the stability and trouble-free use of your application for a long time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ArchitectureDesignSoftwareSection;
