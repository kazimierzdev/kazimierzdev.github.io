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
import {useTranslation} from "next-i18next";

const AboutUsTeamSection = () => {
  const { t } = useTranslation('common');

  const members = [
    {
      image: Avatar1,
      name: 'Vernes',
      role: t('our_team.managing_director')
    },
    {
      image: Avatar2,
      name: 'Philip',
      role: t('our_team.prompt_engineer')
    },
    {
      image: Avatar3,
      name: 'Enis',
      role: t('our_team.full_stack_developer')
    },
    {
      image: Avatar4,
      name: 'Dinosaur',
      role: t('our_team.art_director')
    },
    {
      image: Avatar5,
      name: 'Haris',
      role: t('our_team.frontend_developer')
    },
    {
      image: Avatar6,
      name: 'Djulsa',
      role: t('our_team.frontend_developer')
    },
    {
      image: Avatar7,
      name: 'Berina',
      role: t('our_team.frontend_developer')
    },{
      image: Avatar8,
      name: 'Amil',
      role: t('our_team.frontend_developer')
    },
    {
      image: Avatar9,
      name: 'Armin',
      role: t('our_team.frontend_developer')
    },
    {
      image: Avatar10,
      name: 'Umihana (maternity leave)',
      role: t('our_team.marketing')
    },
    {
      image: Avatar11,
      name: 'Elvedin',
      role: t('our_team.devOps')
    },
  ];


  return (
    <section className="py-28">
      <div className="container mx-auto px-8 md:px-0">
        <h6 className="text-normal text-center font-bold uppercase tracking-widest mb-24">{t('our_team.title')}</h6>
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
