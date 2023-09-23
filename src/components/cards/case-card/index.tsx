import Image, { StaticImageData } from "next/image";

type CaseCardProps = {
  image: string | StaticImageData;
  title: string;
  type: string;
}

const CaseCard = ({ image, title, type }: CaseCardProps) => {
  return (
    <div className="case-card relative overflow-hidden cursor-pointer">
      <Image src={image} alt="case card image" className="duration-300 w-full object-cover object-center" />
      <div className="absolute bottom-0 pl-12 pb-12 z-10">
        <h6 className="text-secondary uppercase font-bold">{type}</h6>
        <h4 className="text-white text-3xl font-semibold w-3/4">{title}</h4>
      </div>
    </div>
  )
}

export default CaseCard;
