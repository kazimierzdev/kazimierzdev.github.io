import Image from "next/image";
import ArchitectureImage from "@/images/devops/Architecture_design.jpg";

const DevOpsAdvantageSection = () => {
  return (
    <section className="py-28 bg-dark-purple">
      <div className="container mx-auto px-8 md:px-0">
        <div className="flex flex-col md:flex-row md:items-center gap-28">
          <div className="flex-1">
            <Image src={ArchitectureImage} alt="Hire Design Team" className="w-full" />
          </div>
          <div className="flex-1">
            <h4 className="text-black text-4xl font-bold mb-8 text-white">Advantages of a good DevOps process</h4>
            <ul className="hire-advantages">
              <li className="relative flex items-center pl-[50px] min-h-[48px] text-2xl leading-snug mb-6 text-white">Improved communication and collaboration between developers and operations teams</li>
              <li className="relative flex items-center pl-[50px] min-h-[48px] text-2xl leading-snug mb-6 text-white">Deliver new features and updates faster</li>
              <li className="relative flex items-center pl-[50px] min-h-[48px] text-2xl leading-snug mb-6 text-white">Reduced error rate and improved stability</li>
              <li className="relative flex items-center pl-[50px] min-h-[48px] text-2xl leading-snug mb-6 text-white">A continuous integration and delivery</li>
              <li className="relative flex items-center pl-[50px] min-h-[48px] text-2xl leading-snug mb-6 text-white">A more flexible and adaptable IT infrastructure</li>
              <li className="relative flex items-center pl-[50px] min-h-[48px] text-2xl leading-snug mb-6 text-white">Increasing the efficiency and productivity of development teams</li>
              <li className="relative flex items-center pl-[50px] min-h-[48px] text-2xl leading-snug mb-6 text-white">Improved monitoring and troubleshooting</li>
              <li className="relative flex items-center pl-[50px] min-h-[48px] text-2xl leading-snug mb-6 text-white">Increasing customer satisfaction through faster response times and better product quality.</li>
              <li className="relative flex items-center pl-[50px] min-h-[48px] text-2xl leading-snug mb-6 text-white">Ensuring optimal operation of your software</li>
            </ul>
            <p className="text-lg mt-4 mb-12 text-white">Through our special process, we optimize the development and operation of your web and mobile app.</p>
            <button className="btn bg-secondary px-20 py-4 font-bold text-white rounded uppercase">
              Inquire for free
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DevOpsAdvantageSection;
