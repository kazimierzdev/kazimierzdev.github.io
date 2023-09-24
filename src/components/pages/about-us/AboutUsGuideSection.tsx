import PrincipleCard from "@/components/cards/principle-card";

const AboutUsGuideSection = () => {
  const advantages = [
    {
      title: "We live digital technologies",
      description: "It's no surprise that so much of our everyday lives take place digitally. Technologies make our lives much easier and offer endless possibilities. This is probably where our strong understanding of great user experiences and ideal solutions comes from."
    },
    {
      title: "Strong collaboration",
      description: "We know how challenging (digital) business can be. That's why we focus not only on bringing new ideas to life, but also on building great relationships with our customers."
    },
    {
      title: "State-of-the-art technologies",
      description: "We are only satisfied with the best solution. In our industry, this usually means using the most modern technologies and innovative approaches. Combined with a lot of experience and unique ideas, various projects can be implemented."
    },
    {
      title: "Simplicity comes first",
      description: "We could talk for hours about the beauty of our unique codes, but in simple and easy-to-understand language. The simpler the language, the nicer the results."
    },
    {
      title: "Full speed ahead",
      description: "Only those who are self-confident enough to make the right decisions quickly will be successful in the long term. Experience and confidence in your own abilities are essential. Talent and trust are therefore the basis for our fast pace."
    },
    {
      title: "Our customers come first",
      description: "A good relationship with our partners is the most important thing for us. We want to make sure that there are no unanswered questions and that everyone involved knows what is happening at all times. That’s why open and regular communication is essential."
    },
  ];

  return (
    <section className="bg-dark-purple py-28">
      <div className="container mx-auto px-8 md:px-0">
        <h2 className="text-white text-7xl xl:text-9xl font-bold text-center md:text-left lg:text-center mb-12">
          Our guiding principles
        </h2>
      </div>
      <div className="container mx-auto px-8 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
          {advantages.map((advantage, index) => (
            <PrincipleCard title={advantage.title} description={advantage.description} key={`advantage-card-${index}`} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutUsGuideSection;
