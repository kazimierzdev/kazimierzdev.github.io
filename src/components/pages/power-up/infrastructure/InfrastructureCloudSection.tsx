import Image from "next/image";
import WebBackendImage from "@/images/infrastructure/Web_and_backend.jpg";

const InfrastructureCloudSection = () => {
  return (
    <section className="py-28">
      <div className="container mx-auto px-8 md:px-0">
        <div className="flex flex-col md:flex-row md:items-center gap-28">
          <div className="flex-1">
            <Image src={WebBackendImage} alt="Hire Design Team" className="w-full" />
          </div>
          <div className="flex-1">
            <h4 className="text-black text-5xl font-semibold mb-8">Cloud Infrastructure</h4>
            <p className="text-lg mt-4 mb-12">With a well-thought-out, stable and scalable cloud infrastructure, you enjoy maximum flexibility and security. Users have access to relevant business applications at all times and can use them at full capacity and with strong performance. Thanks to the modular structure of your infrastructure, your system can be easily expanded as your project or the requirements of your application grow.</p>
            <h4 className="text-black text-lg font-bold mb-12">Your advantages :</h4>
            <ul className="hire-advantages">
              <li className="relative flex items-center pl-[50px] min-h-[48px] text-2xl leading-snug mb-6">Modern and fast infrastructure</li>
              <li className="relative flex items-center pl-[50px] min-h-[48px] text-2xl leading-snug mb-6">High security standards</li>
              <li className="relative flex items-center pl-[50px] min-h-[48px] text-2xl leading-snug mb-6">Easily scalable as your project grows</li>
              <li className="relative flex items-center pl-[50px] min-h-[48px] text-2xl leading-snug mb-6">High availability</li>
            </ul>
            <button className="btn bg-secondary px-20 py-4 font-bold text-white rounded uppercase">
              Inquire Now
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InfrastructureCloudSection;
