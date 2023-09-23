import NativeAppImage from "@/images/mobile/native.jpg";
import PlatformAppImage from "@/images/mobile/platform.jpg";
import HybridAppImage from "@/images/mobile/hybrid.jpg";
import MobileAppCard from "@/components/cards/mobile-app-card";
import {useTranslation} from "next-i18next";

const MobileAppDevelopmentSolutionSection = () => {
  const { t } = useTranslation('common');

  const mobileApps = [
    {
      image: NativeAppImage,
      title: t('mobile_apps.native_apps'),
      description: t('mobile_apps.native_apps_description'),
      technologies: ['Swift', 'Java', 'Kotlin']
    },
    {
      image: HybridAppImage,
      title: t('mobile_apps.hybrid_apps'),
      description: t('mobile_apps.hybrid_apps_description'),
      technologies: ['Ionic', 'JavaScript', 'TypeScript', 'CSS', 'HTML', 'Angular', 'VueJS', 'React']
    },
    {
      image: PlatformAppImage,
      title: t('mobile_apps.cross_platform_apps'),
      description: t('mobile_apps.cross_platform_apps_description'),
      technologies: ['Flutter', 'React Native', 'Native Script']
    },
  ]
  return (
    <section className="py-28">
      <div className="container mx-auto px-8 md:px-0">
        <h6 className="text-normal text-center font-bold uppercase tracking-widest mb-16">{t('mobile_apps.ideal_mobile_app')}</h6>
        <h5 className="text-5xl text-center tracking-widest mb-28">{t('mobile_apps.variants_mobile_app')}</h5>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mobileApps.map((app, index) => (
            <MobileAppCard image={app.image} title={app.title} description={app.description} technologies={app.technologies} key={`mobile-app-card-${index}`} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default MobileAppDevelopmentSolutionSection;
