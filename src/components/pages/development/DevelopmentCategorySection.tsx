import ServiceCard from "@/components/cards/service-card";
import WebAppServiceImage from "@/images/services/Web_app.jpg";
import BackendServiceImage from "@/images/services/Backend.jpg";
import MobileAppServiceImage from "@/images/services/Mobile_app.jpg";

const DevelopmentCategorySection = () => {
  const services = [
    {
      image: WebAppServiceImage,
      title: 'Web Apps',
      description: 'Productivity at the most modern level.'
    },
    {
      image: BackendServiceImage,
      title: 'Backend',
      description: 'Magic in the background with added value in the foreground.'
    },
    {
      image: MobileAppServiceImage,
      title: 'Mobile Apps',
      description: 'We create mobile apps for you that touch people emotionally and move them more.'
    }
  ]
  return (
    <section className="py-28 bg-dark-purple">
      <div className="container mx-auto px-8 md:px-0">
        <h2 className="text-white text-5xl md:text-7xl lg:text-9xl font-bold">Development</h2>
        <div className="flex justify-end mt-12">
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

export default DevelopmentCategorySection;
