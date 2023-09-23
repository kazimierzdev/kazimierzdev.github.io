import Slider from "react-slick";
import Link from "next/link";
import {useTranslation} from "next-i18next";

const ProcessSection = () => {
  const { t } = useTranslation('common');

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
      name: t('process.requirement'),
      services: [t('process.free_initial'), t('process.ideas_requirement'), t('process.mvp_definition')]
    },
    {
      name: t('process.concept'),
      services: [t('process.wireframe'), t('process.moodboard'), t('process.technical_conception'), t('process.user_stories')]
    },
    {
      name: t('process.design'),
      services: [t('process.ui_interface'), t('process.ux_interface'), t('process.software')]
    },
    {
      name: t('process.development'),
      services: [t('process.mobile_apps'), t('process.web_apps'), t('process.backend_apps')]
    },
    {
      name: t('process.operation'),
      services: [t('process.apps'), t('process.infrastructure'), t('process.devOps')]
    },
  ]

  return (
    <section className="py-36">
      <div className="container mx-auto px-8 md:px-0">
        <h2 className="uppercase font-bold">{t('process.title')}</h2>
        <p className="xl:w-1/2 mt-4">
          {t('process.description')}
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
            <h6 className="text-center text-primary uppercase mt-10 mb-4">{t('process.service')}</h6>
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
