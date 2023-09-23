import Image, { StaticImageData } from "next/image";


type UserCardProps = {
  image: StaticImageData;
  name: string;
  role: string;
}
const UserCard = ({ image, name, role }: UserCardProps) => {
  return (
    <div className="user-card">
      <Image src={image} alt={name} className="mb-4" />
      <p className="text-4xl mb-6">{name}</p>
      <p className="text-lg uppercase font-bold text-secondary mb-6">{role}</p>
    </div>
  )
}

export default UserCard;
