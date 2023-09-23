type AdvantageCardProps = {
  title: string;
  description: string;
}

const PrincipleCard = ({ title, description }: AdvantageCardProps) => {
  return (
    <div className="principle-card bg-primary px-12 py-6 cursor-pointer">
      <h3 className="text-white text-4xl mb-4">{title}</h3>
      <p className="text-white text-lg">{description}</p>
    </div>
  )
}

export default PrincipleCard;
