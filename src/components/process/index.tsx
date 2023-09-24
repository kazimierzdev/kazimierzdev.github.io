import Slider from "react-slick";
import Link from "next/link";

const ProcessSection = () => {
  const sliderSettings = {
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false
        }
      },
    ]
  }

  const processCards = [
    {
      name: 'Requirements check',
      services: ['Free initial consultation', 'Ideas & requirements check', 'MVP definition']
    },
    {
      name: 'concept',
      services: ['Wireframing & Prototyping', 'Moodboard development', 'Technical conception', 'User stories & requirements']
    },
    {
      name: 'design',
      services: ['UI | User interface design', 'UX | User experience design', 'Software architecture design']
    },
    {
      name: 'Development',
      services: ['Mobile apps', 'Web apps', 'Backend apps']
    },
    {
      name: 'Operation',
      services: ['Apps', 'infrastructure', 'DevOps']
    },
  ]

  return (
    <section className="py-36">
      <div className="container mx-auto px-8 md:px-0">
        <h2 className="uppercase font-bold">OUR PROCESS</h2>
        <p className="xl:w-1/2 mt-4">
          The services we offer are seamlessly linked to our development process. This means that everything fits together perfectly – from the requirements check to ongoing operations. The entire app development process is designed so that you can get started flexibly at every stage.
        </p>
      </div>
      <Slider {...sliderSettings} className="xl:w-4/5 xl:mx-auto xl:block flex justify-center mt-20">
        {processCards.map((process, index) => (
          <div className="process-card" key={`process-card-${index}`}>
            <Link href="/contact" className="relative hive-link duration-300">
              <svg viewBox="0 0 308 268" fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 134.454L77.2899 2H228.908L306 133.574L229.45 266.436H77.29L2 134.454Z" stroke="#2DC1A4" strokeWidth="3"></path>
              </svg>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                <h4 className="text-dark-purple text-5xl font-bold mb-4">{`0${index + 1}`}</h4>
                <h5 className="text-black text-3xl font-semibold">{process.name}</h5>
              </div>
            </Link>
            <h6 className="text-center text-primary uppercase mt-10 mb-4">Service Content</h6>
            {process.services.map((service, sIndex) => (
              <p className="service-process text-center mb-12" key={`process-service-${index}-${sIndex}`}>
                <Link href="/contact">
                  {service}
                </Link>
              </p>
            ))}
          </div>
        ))}
      </Slider>
    </section>
  )
}

export default ProcessSection;
