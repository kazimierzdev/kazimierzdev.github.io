import Image from "next/image";
import IphoneAppImage from "@/images/design/iphone_app.png";

const UIDesignPreparationSection = () => {
  return (
    <section className="py-28">
      <div className="container mx-auto px-8 md:px-0">
        <div className="flex flex-col md:flex-row md:items-center gap-28">
          <div className="flex-1">
            <Image src={IphoneAppImage} alt="Hire Design Team" className="w-full" />
          </div>
          <div className="flex-1">
            <h4 className="text-black text-4xl font-bold mb-8">Preparation for development</h4>
            <p className="text-lg mt-4 mb-12">The collected knowledge about the market, benefits and user habits is valuable for UX design on the one hand, but also for the development phase as preparation for a component library, which can significantly reduce development effort. The more detailed the knowledge about the future users and the potential market, the more user-oriented the digital solution can be designed.</p>
            <button className="btn bg-secondary px-20 py-4 font-bold text-white rounded uppercase">
              Inquire Design Now
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UIDesignPreparationSection;
