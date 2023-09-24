import Image from "next/image";
import LogBookImage from "@/images/design/logbook.jpg";

const AppStoreAccountSection = () => {
  return (
    <section className="py-28 bg-dark-purple">
      <div className="container mx-auto px-8 md:px-0">
        <div className="flex flex-col md:flex-row md:items-center gap-28">
          <div className="flex-1">
            <h4 className="text-white text-4xl font-bold mb-8">Creating the accounts</h4>
            <p className="text-lg mt-4 mb-12 text-white">To submit to the Apple App Store or Google Play Store, you will need your own accounts, which we will create and set up for you quickly and easily. If necessary, we will provide you with assets for an attractive presentation of the app.</p>
            <button className="btn bg-secondary px-20 py-4 font-bold text-white rounded uppercase">
              Inquire for free
            </button>
          </div>
          <div className="flex-1">
            <Image src={LogBookImage} alt="Hire Design Team" className="w-full" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AppStoreAccountSection;
