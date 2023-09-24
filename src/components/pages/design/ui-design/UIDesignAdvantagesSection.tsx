import AdvantageCard from "@/components/cards/advantage-card";

const UIDesignAdvantagesSection = () => {
  const advantages = [
    {
      title: 'Joy-creating apps',
      description: 'One thing you should know. We don&apos;t just create software, we create enthusiastic users. These are people who enjoy using your app etc. - with a big grin on their face.'
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
      title: 'User-centered software',
      description: 'We develop for your target group and with your target group: software that integrates seamlessly into the digital lifestyle of your users.'
    },
    {
      title: 'European engineering art',
      description: 'We are engineers and digital craftsmen who see software development as an art form. Because, just like with art, every digital product should be special and unique.'
    },
    {
      title: 'Good investment',
      description: 'Software is an investment for us and our customers. A long-term investment – in the company’s digital future with real added value'
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

export default UIDesignAdvantagesSection;
