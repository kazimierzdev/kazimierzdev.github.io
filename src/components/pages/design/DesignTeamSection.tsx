import Image from "next/image";
import DesignTeamImage from "@/images/design/design-team.jpg";

const DesignTeamSection = () => {
  return (
    <section className="py-28">
      <div className="container mx-auto px-8 md:px-0">
        <div className="flex flex-col md:flex-row md:items-center gap-28">
          <div className="flex-1">
            <Image src={DesignTeamImage} alt="Hire Design Team" className="w-full" />
          </div>
          <div className="flex-1">
            <h4 className="text-black text-4xl font-bold mb-8">When you hire our design team, you benefit from the following advantages</h4>
            <ul className="hire-advantages">
              <li className="relative flex items-center pl-[50px] min-h-[48px] text-2xl leading-snug mb-6">High-quality designs: Our designers have many years of experience and specialist know-how in the area of software design.</li>
              <li className="relative flex items-center pl-[50px] min-h-[48px] text-2xl leading-snug mb-6">Happy users: We design your software so that it is easy and intuitive to use and offers your users an excellent user experience.</li>
              <li className="relative flex items-center pl-[50px] min-h-[48px] text-2xl leading-snug mb-6">Scalable and maintainable software: Our architecture designers ensure that your software is robust, scalable and easy to maintain.</li>
              <li className="relative flex items-center pl-[50px] min-h-[48px] text-2xl leading-snug mb-6">Fast and uncomplicated cooperation: We offer you a professional and reliable service and support you in every step of the design process.</li>
            </ul>
            <p className="text-lg mt-4 mb-12">Do not hesitate to contact us for more information and to receive a quote from us.</p>
            <button className="btn bg-secondary px-20 py-4 font-bold text-white rounded uppercase">
              Inquire Now
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DesignTeamSection;
