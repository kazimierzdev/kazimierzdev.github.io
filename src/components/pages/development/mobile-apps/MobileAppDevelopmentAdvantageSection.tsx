import AdvantageCard from "@/components/cards/advantage-card";

const MobileAppDevelopmentAdvantageSection = () => {
  const advantages = [
    {
      title: 'Joy-creating apps',
      description: 'One thing you should know. We don&apos;t just create software, we create enthusiastic users. These are people who enjoy using your app etc. - with a big grin on their face.'
    },
    {
      title: 'European engineering art',
      description: 'We are engineers and digital craftsmen who see software development as an art form. Because, just like with art, every digital product should be special and unique.'
    },
    {
      title: 'Advantage through design',
      description: 'Good design creates desirability, simplicity, trust, usability and genuine user satisfaction. After all, what good is it if the app works perfectly but people don&apos;t like using it?'
    },
    {
      title: 'Everything within budget',
      description: 'We ensure that your budget is used correctly to achieve or exceed your goals - with maximum planning security and no budget overruns.'
    },
    {
      title: 'Digital competitive advantages',
      description: 'Many customers come to us because they want digital products that stand out from the competition and create clear competitive advantages.'
    },
    {
      title: 'Future-proof technology mix',
      description: 'We select the right technology mix for your product. Combining the tried and tested with the innovative. Future-proof technologies that are stable and long-lasting.'
    },
  ];

  return (
    <section className="bg-dark-purple py-28">
      <div className="container mx-auto px-8 md:px-0">
        <h2 className="text-white text-7xl xl:text-9xl font-bold lg:text-center mb-8">
          Your Advantages
        </h2>
      </div>
      <div className="container mx-auto px-8 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
          {advantages.map((advantage, index) => (
            <AdvantageCard title={advantage.title} description={advantage.description} key={`advantage-card-${index}`} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default MobileAppDevelopmentAdvantageSection;
