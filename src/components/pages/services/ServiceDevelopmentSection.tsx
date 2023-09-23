import Image from "next/image";
import ServiceDevelopmentImage from "@/images/services/Development.jpg";
import Link from "next/link";
import {useTranslation} from "next-i18next";

const ServiceDevelopmentSection = () => {
  const { t } = useTranslation('common');

  return (
    <section className="py-28">
      <div className="container mx-auto px-8 md:px-0">
        <div className="flex flex-col md:flex-row md:items-center gap-28">
          <div className="flex-1">
            <h4 className="text-5xl font-bold mb-12">{t('services.development_generation')}</h4>
            <p className="text-lg leading-relaxed mb-8">
              {t('services.development_generation_description')}
            </p>
            <Link href="/development" className="btn bg-secondary px-20 py-4 font-bold text-white rounded uppercase mt-12">
              {t('learn_more')}
            </Link>
          </div>
          <div className="flex-1">
            <Image src={ServiceDevelopmentImage} alt="Hire Design Team" className="w-full" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceDevelopmentSection;
