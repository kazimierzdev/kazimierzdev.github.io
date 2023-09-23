import Image, { StaticImageData } from "next/image";
import {useTranslation} from "next-i18next";

type MobileAppCardProps = {
  image: StaticImageData;
  title: string;
  description: string;
  technologies: string[];
}

const MobileAppCard = ({ image, title, description, technologies }: MobileAppCardProps) => {
  const { t } = useTranslation('common');

  return (
    <div className="mobile-app-card flex flex-col shadow-2xl">
      <div>
        <Image src={image} alt="mobile app card image" />
      </div>
      <div className="flex flex-col p-12">
        <p className="text-3xl mb-4">{title}</p>
        <p className="text-light-grey text-lg mb-12">{description}</p>
        <p className="text-light-grey text-xl mb-12 uppercase">Technologies</p>
        <p className="text-light-grey text-lg font-bold mb-12">{technologies.join(', ')}</p>
        <button className="btn bg-secondary w-full text-white uppercase font-bold py-3">{t('inquire_for_free')}</button>
      </div>
    </div>
  )
}

export default MobileAppCard
