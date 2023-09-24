import Image from "next/image";
import PowerAvailabilityImage from "@/images/power-up/availability.jpg";

const PowerUpAvailabilitySection = () => {
  return (
    <section className="py-28 bg-dark-purple">
      <div className="container mx-auto px-8 md:px-0">
        <div className="flex flex-col md:flex-row md:items-center gap-28">
          <div className="flex-1">
            <Image src={PowerAvailabilityImage} alt="Hire Design Team" className="w-full" />
          </div>
          <div className="flex-1">
            <h4 className="text-white text-4xl font-bold mb-8">Availability</h4>
            <p className="text-white leading-relaxed">
              A web or mobile app should always be available so that users can access it at any time. To achieve this, the infrastructure must include redundant systems and troubleshooting and correction mechanisms to avoid failures
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PowerUpAvailabilitySection;
