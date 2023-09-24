import MankidoImage from "@/images/mankido.jpg";
import LogBookImage from "@/images/logbook.jpg";
import BuyingImage from "@/images/buying.jpg";
import CaseCard from "@/components/cards/case-card";

const CaseSection = () => {
  const caseItems = [
    {
      image: MankidoImage,
      title: 'Mankido app',
      type: 'MANKIDO'
    },
    {
      image: LogBookImage,
      title: 'logbook',
      type: 'Salzburg University of Education'
    },
    {
      image: BuyingImage,
      title: 'NEEDIT GmbH',
      type: 'NEEDIT - Rent instead of buying'
    }
  ];

  return (
    <section className="bg-dark-purple py-28">
      <div className="container mx-auto px-8 md:px-0">
        <h2 className="text-white text-center lg:text-left text-7xl xl:text-9xl font-bold mb-8">
          <span className="block">Case</span>
          <span className="block">studies</span>
        </h2>
      </div>
      <div className="container mx-auto px-8 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {caseItems.map((item, index) => (
            <CaseCard image={item.image} title={item.title} type={item.type} key={`case-card-${index}`} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default CaseSection;
