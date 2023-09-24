import Image from "next/image";
import DomenicoImage from "@/images/development/domenico.jpg";

const AppStoreFinalSection = () => {
  return (
    <section className="py-28">
      <div className="container mx-auto px-8 md:px-0">
        <div className="flex flex-col md:flex-row md:items-center gap-28">
          <div className="flex-1">
            <Image src={DomenicoImage} alt="Hire Design Team" className="w-full" />
          </div>
          <div className="flex-1">
            <h4 className="text-black text-4xl font-bold mb-8">Testing the final version</h4>
            <p className="text-lg mt-4 mb-12">Before the final submission takes place, we provide a beta test version with which your mobile app can be checked by internal and external testers. It can then be submitted to Apple and Google for review. To avoid human and manual errors, we automate publishing for you while saving time.</p>
            <button className="btn bg-secondary px-20 py-4 font-bold text-white rounded uppercase">
              Ask for free
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AppStoreFinalSection;
