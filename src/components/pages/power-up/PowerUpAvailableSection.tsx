import Image from "next/image";
import PowerAvailabilityImage from "@/images/power-up/availability.jpg";
import {useTranslation} from "next-i18next";

const PowerUpAvailabilitySection = () => {
  const { t } = useTranslation('common');

  return (
    <section className="py-28 bg-dark-purple">
      <div className="container mx-auto px-8 md:px-0">
        <div className="flex flex-col md:flex-row md:items-center gap-28">
          <div className="flex-1">
            <Image src={PowerAvailabilityImage} alt="Hire Design Team" className="w-full" />
          </div>
          <div className="flex-1">
            <h4 className="text-white text-4xl font-bold mb-8">{t('power_up.availability')}</h4>
            <p className="text-white leading-relaxed">
              {t('power_up.availability_description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PowerUpAvailabilitySection;
