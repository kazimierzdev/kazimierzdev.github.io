import Image from "next/image";
import FlutterAppImage from "@/images/design/flutter_app.png";

const UIDesignAttractiveSection = () => {
  return (
    <section className="py-28">
      <div className="container mx-auto px-8 md:px-0">
        <div className="flex flex-col md:flex-row md:items-center gap-28">
          <div className="flex-1">
            <Image src={FlutterAppImage} alt="Hire Design Team" className="w-full" />
          </div>
          <div className="flex-1">
            <h4 className="text-black text-4xl font-bold mb-8">An attractive UI design for the success of your app</h4>
            <p className="text-lg mt-4 mb-12">We understand that an attractive and user-friendly UI design is crucial to the success of your app. As an innovative provider of UI design solutions for web and mobile apps, we have a deep understanding of our customers&apos; needs and offer a variety of solutions tailored to your specific requirements.</p>
            <button className="btn bg-secondary px-20 py-4 font-bold text-white rounded uppercase">
              Inquire Design Now
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UIDesignAttractiveSection;
