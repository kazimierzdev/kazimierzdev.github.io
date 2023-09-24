import Image from "next/image";
import HomeBanner from "@/images/home-banner.jpg";

const BannerSection = () => {
  return (
    <section className="section-hero relative h-screen min-h-[600px] max-h-[800px] overflow-hidden">
      <div className="absolute h-full w-full left-0 top-0 overflow-hidden">
        <Image
          className="absolute left-0 -top-1/4 w-full h-[150%] object-cover object-center z-0 scale-110"
          src={HomeBanner}
          alt="section-hero-image"
        />
      </div>
      <div className="absolute top-0 left-0 flex w-full h-full items-center md:justify-center">
        <div className="container mx-auto flex flex-col md:flex-row px-12 md:px-0 md:items-center lg:pl-20">
          <h2 className="font-normal text-4xl lg:text-5xl text-white md:w-1/2 lg:w-1/3 leading-tight mr-12">
            We develop apps that touch people and move them more.
          </h2>
          <h1 className="relative text-4xl md:text-7xl lg:text-9xl text-white font-bold md:w-1/2 lg:w-7/12 leading-tight	md:pl-12 -order-1 md:order-1 pb-12 md:pb-0">
            <span className="block">Web &amp;</span>
            <span className="block">Mobile</span>
            <span className="block text-transparent text-stroke">Apps</span>
          </h1>
        </div>
      </div>
    </section>
  )
}

export default BannerSection;
