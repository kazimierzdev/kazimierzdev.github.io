import Avatar1 from "@/images/avatars/vernes.jpg";
import Avatar2 from "@/images/avatars/philipp.jpg";
import Avatar3 from "@/images/avatars/enis.jpg";
import Avatar4 from "@/images/avatars/dino.jpg";
import Avatar5 from "@/images/avatars/haris.jpg";
import Avatar6 from "@/images/avatars/djulsa.jpg";
import Avatar7 from "@/images/avatars/berina.jpg";
import Avatar8 from "@/images/avatars/amil.jpg";
import Avatar9 from "@/images/avatars/armin.jpg";
import Avatar10 from "@/images/avatars/umihana.jpg";
import Avatar11 from "@/images/avatars/elvedin.jpg";
import UserCard from "@/components/cards/user-card";

const AboutUsTeamSection = () => {
  const members = [
    {
      image: Avatar1,
      name: 'Vernes',
      role: 'MANAGING DIRECTOR'
    },
    {
      image: Avatar2,
      name: 'Philip',
      role: 'PM & PROMPT ENGINEER'
    },
    {
      image: Avatar3,
      name: 'Enis',
      role: 'FULL STACK DEVELOPER'
    },
    {
      image: Avatar4,
      name: 'Dinosaur',
      role: 'ART DIRECTOR'
    },
    {
      image: Avatar5,
      name: 'Haris',
      role: 'FRONTEND DEVELOPER'
    },
    {
      image: Avatar6,
      name: 'Djulsa',
      role: 'FRONTEND DEVELOPER'
    },
    {
      image: Avatar7,
      name: 'Berina',
      role: 'FRONTEND DEVELOPER'
    },{
      image: Avatar8,
      name: 'Amil',
      role: 'FRONTEND DEVELOPER'
    },
    {
      image: Avatar9,
      name: 'Armin',
      role: 'FRONTEND DEVELOPER'
    },
    {
      image: Avatar10,
      name: 'Umihana (maternity leave)',
      role: 'MARKETING'
    },
    {
      image: Avatar11,
      name: 'Elvedin',
      role: 'DEVOPS'
    },
  ];


  return (
    <section className="py-28">
      <div className="container mx-auto px-8 md:px-0">
        <h6 className="text-normal text-center font-bold uppercase tracking-widest mb-24">Our Team</h6>
        <div className="grid grid-cold-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <UserCard name={member.name} image={member.image} role={member.role} key={`user-card-${index}`} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutUsTeamSection;
