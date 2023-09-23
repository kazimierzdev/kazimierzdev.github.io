import Image from "next/image";
import ServicePowerUpImage from "@/images/services/Power_up.jpg";
import Link from "next/link";
import {useTranslation} from "next-i18next";

const ServicePowerUpSection = () => {
  const { t } = useTranslation('common');

  return (
    <section className="py-28 bg-dark-purple">
      <div className="container mx-auto px-8 md:px-0">
        <div className="flex flex-col md:flex-row md:items-center gap-28">
          <div className="flex-1">
            <Image src={ServicePowerUpImage} alt="Hire Design Team" className="w-full" />
          </div>
          <div className="flex-1">
            <h4 className="text-white text-5xl font-bold mb-12">{t('services.power_up_operation')}</h4>
            <p className="text-white text-lg leading-relaxed mb-8">
              {t('services.power_up_operation_description')}
            </p>
            <Link href="/power-up" className="btn bg-secondary px-20 py-4 font-bold text-white rounded uppercase mt-12">
              {t('learn_more')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicePowerUpSection;
