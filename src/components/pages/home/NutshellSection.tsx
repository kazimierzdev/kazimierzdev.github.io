import {useTranslation} from "next-i18next";

const NutshellSection = () => {
  const { t } = useTranslation('common');

  return (
    <section className="py-28">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <h2 className="text-center uppercase text-sm font-bold">{t('home.nutshell.title')}</h2>
          <h2 className="text-center mt-12 text-3xl md:text-4xl lg:text-5xl font-normal	leading-snug lg:w-2/3 mb-16">
            {t('home.nutshell.description')}
          </h2>
          <button className="btn bg-secondary px-20 py-4 font-bold text-white rounded uppercase">
            {t('learn_more')}
          </button>
        </div>
      </div>
    </section>
  )
}

export default NutshellSection;
