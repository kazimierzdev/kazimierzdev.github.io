import Image from "next/image";
import GrowTikaImage from "@/images/devops/growtika.jpg";

const DevOpsInteractionSection = () => {
  return (
    <section className="py-28">
      <div className="container mx-auto px-8 md:px-0">
        <div className="flex flex-col md:flex-row md:items-center gap-28">
          <div className="flex-1">
            <Image src={GrowTikaImage} alt="Hire Design Team" className="w-full" />
          </div>
          <div className="flex-1">
            <h4 className="text-black text-5xl font-semibold mb-8">Interaction with agile development</h4>
            <p className="text-lg mt-4 mb-12">For the agile approach to work, the team involved must understand and want to implement the DevOps culture and benefits. It adopts new ways of working that increase collaboration, communication and customer focus. In this case, the customer is you. By applying DevOps, you benefit from faster releases, higher quality feedback, and regular troubleshooting.</p>
            <button className="btn bg-secondary px-20 py-4 font-bold text-white rounded uppercase">
              Inquire Now
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DevOpsInteractionSection;
