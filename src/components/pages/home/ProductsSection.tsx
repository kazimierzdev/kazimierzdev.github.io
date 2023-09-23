import Image from "next/image";
import MobileAppImage from "@/images/triple-hexta.svg";
import WebAppImage from "@/images/double-hexta.svg";
import {useTranslation} from "next-i18next";

const ProductsSection = () => {
  const { t } = useTranslation('common');

  return (
    <section className="bg-dark-purple py-28">
      <div className="container mx-auto px-8 md:px-0">
        <h6 className="text-normal text-center font-bold uppercase text-white tracking-widest mb-24">
          {t('home.product.title')}
        </h6>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative py-20 px-12 bg-primary hover:bg-light-primary duration-300">
            <div className="flex justify-between mb-4">
              <p className="text-white text-4xl font-semibold w-2/5">{t('home.product.mobile')}</p>
              <Image src={MobileAppImage} alt="Mobile Apps" className="relative -top-[50px] -right-[25px]" />
            </div>
            <p className="text-white">{t('home.product.mobile_lead')}</p>
            <div className="text-secondary font-bold uppercase text-sm mt-4">
              <span className="border-b-2 border-secondary">{t('more_info')}</span>
            </div>
          </div>
          <div className="relative py-20 px-12 bg-primary hover:bg-light-primary duration-300">
            <div className="flex justify-between mb-4">
              <p className="text-white text-4xl font-semibold w-2/5">{t('home.product.web')}</p>
              <Image src={WebAppImage} alt="Web Apps" className="relative -top-[50px] -right-[25px]" />
            </div>
            <p className="text-white">{t('home.product.web_lead')}</p>
            <div className="text-secondary font-bold uppercase text-sm mt-4">
              <span className="border-b-2 border-secondary">{t('more_info')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductsSection;
