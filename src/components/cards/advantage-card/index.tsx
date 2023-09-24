type AdvantageCardProps = {
  title: string;
  description: string;
}

const AdvantageCard = ({ title, description }: AdvantageCardProps) => {
  return (
    <div className="advantage-card bg-primary px-12 py-6 cursor-pointer">
      <h3 className="text-white text-3xl mb-4">{title}</h3>
      <p className="text-white">{description}</p>
      <div className="text-secondary font-bold uppercase text-sm mt-4">
        <span className="border-b-2 border-secondary">More Info</span>
      </div>
    </div>
  )
}

export default AdvantageCard;
