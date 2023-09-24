import Image from "next/image";
import DomenicaImage from "@/images/infrastructure/domenico.jpg";

const InfrastructurePublishingSection = () => {
  return (
    <section className="py-28 bg-dark-purple">
      <div className="container mx-auto px-8 md:px-0">
        <div className="flex flex-col md:flex-row md:items-center gap-28">
          <div className="flex-1">
            <h4 className="text-black text-5xl font-semibold mb-12 text-white">Publishing your web app</h4>
            <p className="text-lg mt-4 mb-12 text-white">Before your web app is ready for publication, we set up the appropriate infrastructure for productive operation. This includes databases, virtual servers and process monitoring so that your web application always has access to relevant information.</p>
            <p className="text-lg mt-4 mb-12 text-white">A web application also needs to be tested extensively. That&apos;s why we set up a suitable test environment and enable internal and external testers to check your software solution for errors. These can therefore be eliminated in good time before the release.</p>
            <p className="text-lg mt-4 mb-12 text-white">We then configure the domains and SSL certificates and automate the update process for new app versions. This leads to fewer errors and faster release of updates.</p>
            <button className="btn bg-secondary px-20 py-4 font-bold text-white rounded uppercase">
              Inquire for free
            </button>
          </div>
          <div className="flex-1">
            <Image src={DomenicaImage} alt="Hire Design Team" className="w-full" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default InfrastructurePublishingSection;
