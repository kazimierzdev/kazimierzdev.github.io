import CedevitaImage from "@/images/design/cedevita.jpg";
import LogBookImage from "@/images/design/logbook.jpg";
import VendingImage from "@/images/design/vending.png";
import CaseCard from "@/components/cards/case-card";

const DesignCaseStudiesSection = () => {
  const caseItems = [
    {
      image: LogBookImage,
      title: 'logbook',
      type: 'Salzburg University of Education'
    },
    {
      image: CedevitaImage,
      title: 'Cedevita Point',
      type: 'Cedevita'
    },
    {
      image: VendingImage,
      title: 'Vending Social',
      type: 'BABOS'
    }
  ];

  return (
    <section className="py-28">
      <div className="container mx-auto px-8 md:px-0">
        <h2 className="text-center lg:text-left text-7xl xl:text-9xl font-bold mb-8">
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

export default DesignCaseStudiesSection;
