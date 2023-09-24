import Image from "next/image";
import IonicAppImage from "@/images/design/ionic_program.png";

const UIDesignExperienceSection = () => {
  return (
    <section className="py-28 bg-dark-purple">
      <div className="container mx-auto px-8 md:px-0">
        <div className="flex flex-col md:flex-row md:items-center gap-28">
          <div className="flex-1">
            <h4 className="text-white text-4xl font-bold mb-8">Experienced UI designers for customized solutions</h4>
            <p className="text-white text-lg mt-4 mb-12">Our team of experienced UI designers has years of experience creating user-friendly and engaging UI designs that delight your target audience and ensure your brand is remembered positively. We work closely with you to ensure the final design meets your needs and provides an optimal user experience.</p>
            <button className="btn bg-secondary px-20 py-4 font-bold text-white rounded uppercase">
              Ask for free
            </button>
          </div>
          <div className="flex-1">
            <Image src={IonicAppImage} alt="Hire Design Team" className="w-full" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default UIDesignExperienceSection;
