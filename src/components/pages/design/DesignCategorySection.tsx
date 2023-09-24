import ServiceCard from "@/components/cards/service-card";
import UIDesignServiceImage from "@/images/services/UI_Design.jpg";
import UXDesignServiceImage from "@/images/services/UX_Design.jpg";
import ArchitectureServiceImage from "@/images/services/Architecture.jpg";

const DesignCategorySection = () => {
  const services = [
    {
      image: UIDesignServiceImage,
      title: 'UI Design',
      description: 'For us, every single pixel that creates digital joy and uniqueness counts'
    },
    {
      image: UXDesignServiceImage,
      title: 'UX Design',
      description: "We connect users with experience. It's simple."
    },
    {
      image: ArchitectureServiceImage,
      title: 'Architecture Design',
      description: 'A complex digital world requires simple solutions.'
    }
  ]
  return (
    <section className="py-28 bg-dark-purple">
      <div className="container mx-auto px-8 md:px-0">
        <h2 className="text-white text-center md:text-left text-9xl font-bold">Design</h2>
        <div className="flex justify-end mt-12">
          <div className="md:w-2/3">
            <p className="text-white relative leading-relaxed md:mr-12 service-category-text">
              For the first impression there is no second chance. That’s why the design of your software is particularly important. It must be modern and functional, in line with your corporate design and at the same time lead to an efficient way of working. The ideal design therefore includes the user interface, the user experience and the architectural design. We know from experience that only when all three areas are appealing and functional will the right target group be addressed and the product be used happily.
            </p>
          </div>
        </div>
      </div>
      <div className="pt-28 container mx-auto px-8 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard image={service.image} title={service.title} description={service.description} key={`service-card-${index}`} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default DesignCategorySection;
