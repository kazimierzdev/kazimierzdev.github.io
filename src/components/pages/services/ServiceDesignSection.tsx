import Image from "next/image";
import ServiceDesignImage from "@/images/services/Design.jpg";
import Link from "next/link";
import {useTranslation} from "next-i18next";

const ServiceDesignSection = () => {
  const { t } = useTranslation('common');

  return (
    <section className="py-28 bg-dark-purple">
      <div className="container mx-auto px-8 md:px-0 pb-28">
        <div className="flex flex-col md:flex-row md:items-center gap-28">
          <div className="flex-1">
            <Image src={ServiceDesignImage} alt="Hire Design Team" className="w-full" />
          </div>
          <div className="flex-1">
            <h4 className="text-white text-5xl font-bold mb-12">{t('services.perfect_performance')}</h4>
            <p className="text-white text-lg leading-relaxed mb-8">
              {t('services.perfect_performance_description_1')}
            </p>
            <p className="text-white text-lg leading-relaxed mb-8">
              {t('services.perfect_performance_description_2')}
            </p>
            <p className="text-white text-lg leading-relaxed mb-8">
              {t('services.perfect_performance_description_3')}
            </p>
            <p className="text-white text-lg leading-relaxed mb-8">
              {t('services.perfect_performance_description_4')}
            </p>
            <Link href="/design" className="btn bg-secondary px-20 py-4 font-bold text-white rounded uppercase mt-12">
              {t('learn_more')}
            </Link>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-8 md:px-0 mt-28">
        <h2 className="text-white text-5xl md:text-7xl lg:text-9xl font-bold">{t('services.digitizing_processes')}</h2>
        <div className="flex justify-end mt-12">
          <div className="md:w-2/3">
            <p className="text-white relative leading-relaxed md:mr-12 service-category-text">
              {t('services.digitizing_processes_description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceDesignSection;
