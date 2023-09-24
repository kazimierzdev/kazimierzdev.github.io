import NativeAppImage from "@/images/mobile/native.jpg";
import PlatformAppImage from "@/images/mobile/platform.jpg";
import HybridAppImage from "@/images/mobile/hybrid.jpg";
import MobileAppCard from "@/components/cards/mobile-app-card";

const MobileAppDevelopmentSolutionSection = () => {
  const mobileApps = [
    {
      image: NativeAppImage,
      title: 'Native apps',
      description: 'Native apps are developed for a specific operating system (iOS or Android). They are high-performance and can directly access all functions of the smartphone. Native apps are primarily used for complex applications that require a lot of computing power or require special operating system functions.',
      technologies: ['Swift', 'Java', 'Kotlin']
    },
    {
      image: HybridAppImage,
      title: 'Hybrid apps',
      description: 'Hybrid apps run on all operating systems (iOS, Android, Web). They are developed only once and have a common code base. Hybrid apps usually use technologies such as Ionic and Angular. With these applications, the smartphone\'s functions are accessed via software libraries.',
      technologies: ['Ionic', 'JavaScript', 'TypeScript', 'CSS', 'HTML', 'Angular', 'VueJS', 'React']
    },
    {
      image: PlatformAppImage,
      title: 'Cross-platform apps',
      description: 'Cross-platform apps try to bridge the gap between native and hybrid apps. Two native apps are developed from one code base - for iOS and Android. This results in an app that is available on multiple operating systems with little development effort, but feels like a native app.',
      technologies: ['Flutter', 'React Native', 'Native Script']
    },
  ]
  return (
    <section className="py-28">
      <div className="container mx-auto px-8 md:px-0">
        <h6 className="text-normal text-center font-bold uppercase tracking-widest mb-16">ALWAYS THE IDEAL MOBILE APP SOLUTION.</h6>
        <h5 className="text-5xl text-center tracking-widest mb-28">Variants of mobile apps.</h5>
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
