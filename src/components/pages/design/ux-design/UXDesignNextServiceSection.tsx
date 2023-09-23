import Link from "next/link";
import {useTranslation} from "next-i18next";

const UXDesignNextServiceSection = () => {
  const { t } = useTranslation('common');

  return (
    <section className="py-28 bg-primary">
      <div className="container mx-auto flex flex-col items-center">
        <h6 className="text-normal text-center font-bold uppercase text-secondary tracking-widest mb-12">{t('services.next_service')}</h6>
        <Link href="/design/architecture-design" className="text-5xl md:text-6xl lg:text-8xl text-center font-bold text-white">{t('header.architecture_design')}</Link>
      </div>
    </section>
  )
}

export default UXDesignNextServiceSection;
