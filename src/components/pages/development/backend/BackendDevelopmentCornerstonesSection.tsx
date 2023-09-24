import Image from "next/image";
import DevelopmentBackendImage from "@/images/development/Backend.jpg";
const BackendDevelopmentCornerstonesSection = () => {
  return (
    <section className="py-28 bg-dark-purple">
      <div className="container mx-auto px-8 md:px-0">
        <div className="flex flex-col md:flex-row md:items-center gap-28">
          <div className="flex-1">
            <Image src={DevelopmentBackendImage} alt="Hire Design Team" className="w-full" />
          </div>
          <div className="flex-1">
            <h4 className="text-white text-4xl font-bold mb-8">The cornerstones of a good backend</h4>
            <ul className="hire-advantages">
              <li className="text-white relative flex items-center pl-[50px] min-h-[48px] text-2xl leading-snug mb-6">The game changer when developing a backend for web and mobile apps is performance. A backend must be able to quickly process data and respond to application requests in order to provide a good user experience.</li>
              <li className="text-white relative flex items-center pl-[50px] min-h-[48px] text-2xl leading-snug mb-6">Another important factor is scalability. A backend must be able to adapt to changing loads and respond to increasing user numbers in order to provide consistent performance.</li>
              <li className="text-white relative flex items-center pl-[50px] min-h-[48px] text-2xl leading-snug mb-6">Security is also an important issue when developing backend for web and mobile apps. The backend must be protected against external attacks and ensure that sensitive data remains protected.</li>
            </ul>
            <button className="btn bg-secondary px-20 py-4 font-bold text-white rounded uppercase mt-8">
              Inquire for free
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BackendDevelopmentCornerstonesSection;
