import Image from "next/image";
import IphoneAppImage from "@/images/design/iphone_app.png";

const UXDesignResultSection = () => {
  return (
    <section className="py-28">
      <div className="container mx-auto px-8 md:px-0">
        <div className="flex flex-col md:flex-row md:items-center gap-28">
          <div className="flex-1">
            <Image src={IphoneAppImage} alt="Hire Design Team" className="w-full" />
          </div>
          <div className="flex-1">
            <h4 className="text-black text-4xl font-bold mb-8">The result</h4>
            <p className="text-lg mt-4 mb-12">Ultimately, we bring together all the essential aspects and the designers’ creative ideas to create a unique customer journey. This information provides the perfect basis for technical and strategic decisions.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UXDesignResultSection;
