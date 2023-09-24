import Image from "next/image";
import PowerScalabilityImage from "@/images/power-up/scalability.jpg";

const PowerUpScalabilitySection = () => {
  return (
    <section className="py-28">
      <div className="container mx-auto px-8 md:px-0">
        <div className="flex flex-col md:flex-row md:items-center gap-28">
          <div className="flex-1">
            <h4 className="text-4xl font-bold mb-8">Scalability</h4>
            <p className="leading-relaxed">
              A web or mobile app should be able to keep up with the growing number of users. To do this, the infrastructure must be scalable, meaning it should be able to adapt to increasing demands without affecting the app&apos;s performance.
            </p>
          </div>
          <div className="flex-1">
            <Image src={PowerScalabilityImage} alt="Hire Design Team" className="w-full" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default PowerUpScalabilitySection;
