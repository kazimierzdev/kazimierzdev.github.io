import AppsServiceImage from "@/images/services/Apps.jpg";
import DevOpsServiceImage from "@/images/services/Dev_Ops.jpg";
import InfrastructureServiceImage from "@/images/services/Web_and_backend.jpg";
import ServiceCard from "@/components/cards/service-card";

const PowerUpCategorySection = () => {
  const services = [
    {
      image: AppsServiceImage,
      title: 'Apps',
      description: 'We guide you through the app store submission process.'
    },
    {
      image: DevOpsServiceImage,
      title: 'DevOps',
      description: 'The perfect symbiosis between development and operation.'
    },
    {
      image: InfrastructureServiceImage,
      title: 'Infrastructure',
      description: 'A nice home for your software.'
    }
  ]
  return (
    <section className="py-28 bg-dark-purple">
      <div className="container mx-auto px-8 md:px-0">
        <h2 className="text-white text-5xl md:text-7xl lg:text-9xl font-bold">Power up</h2>
        <div className="flex flex-col md:flex-row md:justify-end mt-12">
          <div className="md:w-2/3">
            <p className="text-white relative leading-relaxed md:mr-12 service-category-text">
              Your vision now becomes reality in the development phase. This is where a well-thought-out concept and design become your individual software solution. The better the research and preparation, the higher the chances of success your application will have in the future.
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

export default PowerUpCategorySection;
