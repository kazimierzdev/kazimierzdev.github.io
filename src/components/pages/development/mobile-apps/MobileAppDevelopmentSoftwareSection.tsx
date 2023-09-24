import Image from "next/image";
import MobileAppsImage from "@/images/development/Apps_2.jpg";

const MobileAppDevelopmentSoftwareSection = () => {
  return (
    <section className="py-28">
      <div className="container mx-auto px-8 md:px-0">
        <div className="flex flex-col md:flex-row md:items-center gap-28">
          <div className="flex-1">
            <div className="lg:w-5/6">
              <h4 className="text-4xl font-bold mb-8">Seamlessly integrated. In people&apos;s lives.</h4>
              <p className="leading-relaxed">
                Apps are everywhere. They connect and accompany us. And we as Tech Voyage Solution support companies – with app development. So that apps are created that integrate seamlessly into people‘s lives. And create real added value – for people and companies. Our work is done when your target groups are enthusiastic. Can‘t get enough of your app. Enjoy using these every day. And, if your app goals are not met but exceeded.
              </p>
              <button className="btn bg-secondary px-20 py-4 font-bold text-white rounded uppercase mt-8">
                Inquire for free
              </button>
            </div>
          </div>
          <div className="flex-1">
            <Image src={MobileAppsImage} alt="Hire Design Team" className="w-full" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default MobileAppDevelopmentSoftwareSection;
