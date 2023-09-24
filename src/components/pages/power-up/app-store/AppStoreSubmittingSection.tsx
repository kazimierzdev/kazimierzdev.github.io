import Image from "next/image";
import FlutterAppImage from "@/images/design/flutter_app.png";

const AppStoreSubmittingSection = () => {
  return (
    <section className="py-28">
      <div className="container mx-auto px-8 md:px-0">
        <div className="flex flex-col md:flex-row md:items-center gap-28">
          <div className="flex-1">
            <Image src={FlutterAppImage} alt="Hire Design Team" className="w-full" />
          </div>
          <div className="flex-1">
            <h4 className="text-black text-4xl font-bold mb-8">What to look for when submitting to the App Store</h4>
            <p className="text-lg mt-4 mb-12">Both Apple and Google insist on adhering to very specific review guidelines when submitting an app. Before the submission process, we prepare all relevant information and steps for successful publication. This ensures that the process is completed successfully on the first attempt.</p>
            <button className="btn bg-secondary px-20 py-4 font-bold text-white rounded uppercase">
              Inquire Now
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AppStoreSubmittingSection;
