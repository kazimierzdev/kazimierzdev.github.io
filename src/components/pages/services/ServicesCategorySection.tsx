import ServiceCard from "@/components/cards/service-card";
import DesignServiceImage from "@/images/services/Design.jpg";
import DevelopmentServiceImage from "@/images/services/Development.jpg";
import PowerUpServiceImage from "@/images/services/Power_up.jpg";

const ServicesCategorySection = () => {
  const services = [
    {
      image: DesignServiceImage,
      title: 'Design',
      description: 'Design and technology. Unbeatable in combination.',
      flows: ['UI Design', 'UX Design', 'Architecture Design']
    },
    {
      image: DevelopmentServiceImage,
      title: 'Development',
      description: 'Software is the code that makes people happy.',
      flows: ['Web Apps', 'Backend', 'Mobile Apps']
    },
    {
      image: PowerUpServiceImage,
      title: 'Power up',
      description: 'Operate your apps with plenty of power and maximum performance.',
      flows: ['Apps', 'DevOps', 'Infrastructure']
    }
  ]
  return (
    <section className="py-28 bg-dark-purple">
      <div className="container mx-auto px-8 md:px-0">
        <h2 className="text-white text-5xl md:text-7xl lg:text-9xl font-bold">Services from the web and app manufacturer TechVoyageSolution</h2>
        <div className="flex justify-end mt-12">
          <div className="md:w-2/3">
            <p className="text-white relative leading-relaxed md:mr-12 service-category-text">
              You have to understand the interplay of concept, design, development and operation of the software and see each area as equally valuable. But the most important thing is the passion for high-quality software solutions. Only when everyone involved works with dedication and team spirit can solutions be created that people like to use. Choose quality and be surprised at how easy it is to develop your vision with the right team.
            </p>
          </div>
        </div>
      </div>
      <div className="pt-28 container mx-auto px-8 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard image={service.image} title={service.title} description={service.description} flows={service.flows} key={`service-card-${index}`} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesCategorySection;
