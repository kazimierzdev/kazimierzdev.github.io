import Image from "next/image";
import PowerSecurityImage from "@/images/power-up/security.jpg";
import {useTranslation} from "next-i18next";

const PowerUpSecuritySection = () => {
  const { t } = useTranslation('common');

  return (
    <section className="py-28 bg-dark-purple">
      <div className="container mx-auto px-8 md:px-0">
        <div className="flex flex-col md:flex-row md:items-center gap-28">
          <div className="flex-1">
            <Image src={PowerSecurityImage} alt="Hire Design Team" className="w-full" />
          </div>
          <div className="flex-1">
            <h4 className="text-white text-4xl font-bold mb-8">{t('power_up.security')}</h4>
            <p className="text-white leading-relaxed">
              {t('power_up.security_description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PowerUpSecuritySection;
