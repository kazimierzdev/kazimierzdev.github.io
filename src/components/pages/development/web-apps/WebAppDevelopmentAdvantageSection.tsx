import Image from "next/image";
import DevelopmentDevOpsImage from "@/images/development/Dev_Ops.jpg";

const WebAppDevelopmentAdvantageSection = () => {
  return (
    <section className="py-28">
      <div className="container mx-auto px-8 md:px-0">
        <div className="flex flex-col md:flex-row md:items-center gap-28">
          <div className="flex-1">
            <h4 className="text-black text-4xl font-bold mb-8">Unique advantages through your web app</h4>
            <ul className="hire-advantages">
              <li className="relative flex items-center pl-[50px] min-h-[48px] text-2xl leading-snug mb-6">Processes are simplified and digitalized</li>
              <li className="relative flex items-center pl-[50px] min-h-[48px] text-2xl leading-snug mb-6">Low training requirement thanks to great UX/UI design</li>
              <li className="relative flex items-center pl-[50px] min-h-[48px] text-2xl leading-snug mb-6">Increasing productivity and motivation among employees</li>
              <li className="relative flex items-center pl-[50px] min-h-[48px] text-2xl leading-snug mb-6">Unique selling point</li>
              <li className="relative flex items-center pl-[50px] min-h-[48px] text-2xl leading-snug mb-6">Independent of operating system and device</li>
            </ul>
            <button className="btn bg-secondary px-20 py-4 font-bold text-white rounded uppercase mt-8">
              Inquire for free
            </button>
          </div>
          <div className="flex-1">
            <Image src={DevelopmentDevOpsImage} alt="Hire Design Team" className="w-full" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default WebAppDevelopmentAdvantageSection;
