import DefaultUser from "@/images/default.jpg";
import Image from "next/image";
import {useTranslation} from "next-i18next";

const Contactus = () => {
  const { t } = useTranslation('common');

  return (
    <section className="py-28">
      <div className="container mx-auto px-8 md:px-0">
        <h4 className="xl:w-1/2 text-center xl:text-left text-4xl xl:text-5xl font-bold leading-snug mb-40">
          {t('contact_us.contact_now')} <span className="text-secondary">{t('contact_us.free')}</span> {t('contact_us.consultation')}
        </h4>
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
          <div className="flex flex-col justify-center items-center">
            <Image src={DefaultUser} alt="Avatar" className="w-1/2 rounded-full" />
            <p className="font-bold mt-6">{t('contact_us.user_name')}</p>
            <p className="mb-12">{t('contact_us.role')}</p>
          </div>
          <div className="col-span-2">
            <div className="grid grid-cols-3 gap-2 md:gap-5 mb-6">
              <div className="flex flex-col flex-1 hs-form-field">
                <label className="mb-2">{t('contact_us.salutation')} *</label>
                <select className="hs-input">
                  <option disabled>{t('contact_us.please_select')}</option>
                  <option>{t('contact_us.mister')}</option>
                  <option>{t('contact_us.woman')}</option>
                </select>
              </div>
              <div className="flex flex-col flex-1 hs-form-field">
                <label className="mb-2">{t('contact_us.first_name')} *</label>
                <input className="hs-input" type="text" />
              </div>
              <div className="flex flex-col flex-1 hs-form-field">
                <label className="mb-2">{t('contact_us.last_name')} *</label>
                <input className="hs-input" type="text" />
              </div>
            </div>
            <div className="flex flex-col hs-form-field mb-6">
              <label className="mb-2">{t('contact_us.email')} *</label>
              <input className="hs-input w-full" type="text" />
            </div>
            <div className="flex flex-col hs-form-field mb-6">
              <label className="mb-2">{t('contact_us.message')}  *</label>
              <textarea rows={3} className="hs-input w-full" />
            </div>
            <p className="text-sm text-light-black mb-10">
              {t('contact_us.hint')}
            </p>
            <button className="btn bg-secondary text-white font-bold text-2xl">
              {t('ask_free')}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contactus;
