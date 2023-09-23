import Image from "next/image";
import PowerScalabilityImage from "@/images/power-up/scalability.jpg";
import {useTranslation} from "next-i18next";

const ArchitectureDesignSoftwareSection = () => {
  const { t } = useTranslation('common');

  return (
    <section className="py-28">
      <div className="container mx-auto px-8 md:px-0">
        <div className="flex flex-col md:flex-row md:items-center gap-28">
          <div className="flex-1">
            <Image src={PowerScalabilityImage} alt="Hire Design Team" className="w-full" />
          </div>
          <div className="flex-1">
            <div className="lg:w-5/6">
              <h4 className="text-4xl font-bold mb-8">{t('architecture_design.software_development')}</h4>
              <p className="leading-relaxed">
                {t('architecture_design.software_development_description')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ArchitectureDesignSoftwareSection;
