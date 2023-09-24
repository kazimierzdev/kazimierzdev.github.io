import Image from "next/image";
import DomenicoImage from "@/images/development/domenico.jpg";

const WebAppDevelopmentSoftwareSection = () => {
  return (
    <section className="py-28">
      <div className="container mx-auto px-8 md:px-0">
        <div className="flex flex-col md:flex-row md:items-center gap-28">
          <div className="flex-1">
            <Image src={DomenicoImage} alt="Hire Design Team" className="w-full" />
          </div>
          <div className="flex-1">
            <div className="lg:w-5/6">
              <h4 className="text-4xl font-bold mb-8">The future of software</h4>
              <p className="leading-relaxed">
                A web app runs in any common web browser, regardless of the operating system and device. Neither installations nor manual updates are necessary. No matter what service you provide to your target group, with a web app, users receive a comprehensive range of functions and services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WebAppDevelopmentSoftwareSection;
