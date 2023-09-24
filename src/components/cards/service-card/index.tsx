import Image, { StaticImageData } from "next/image";

type ServiceCardProps = {
  image: string | StaticImageData;
  title: string;
  description: string;
  flows?: string[]
}
const ServiceCard = ({ image, title, description, flows }: ServiceCardProps) => {
  return (
    <div className="service-card cursor-pointer relative overflow-hidden flex flex-col">
      <div className="overflow-hidden relative image-wrapper">
        <Image src={image} alt="Service Card Image" className="relative h-[470px] duration-300 w-full aspect-video object-center object-cover overflow-hidden" />
      </div>
      <div className="flex flex-col flex-1 mt-6">
        <h5 className="text-2xl	font-bold mb-6 text-white pt-8 border-t-2 border-light-grey">{title}</h5>
        {(flows && flows.length > 0) && (
          <div className="text-white flex items-center mb-4">
            {flows.map((flow, index) => (
              <div key={`flow-${title}-${index}`} className="flex items-center flow-wrapper">
                <span>{flow}</span>
                <span className="line" />
              </div>
            ))}
          </div>
        )}
        <h5 className={`mb-4 text-white ${(flows && flows.length > 0) ? 'opacity-0 learn-more' : ''}`}>{description}</h5>
        <div className="text-secondary font-bold uppercase text-sm mt-auto">
          <span className="opacity-0 learn-more border-b-2 border-secondary">More Info</span>
        </div>
      </div>
    </div>
  )
}

export default ServiceCard;
