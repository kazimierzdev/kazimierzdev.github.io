import Image from "next/image";
import BrickLogo from "@/images/champions/brick.png";
import CopadataLogo from "@/images/champions/copadata.png";
import DpaLogo from "@/images/champions/dpa.png";
import EnBwLogo from "@/images/champions/en_bw.png";
import HaushaLogo from "@/images/champions/haushana.png";
import KtmLogo from "@/images/champions/ktm.png";
import MankidoLogo from "@/images/champions/mankido.png";
import PdsLogo from "@/images/champions/pds.png";
import SommerauserLogo from "@/images/champions/sommerauer.png";
import WuestenrotLogo from "@/images/champions/wuestenrot.png";

const ChampionsSection = () => {
  const logos = [
    {
      src: EnBwLogo,
      alt: 'EnBw Logo'
    },
    {
      src: WuestenrotLogo,
      alt: 'Wuestenrot Logo'
    },
    {
      src: PdsLogo,
      alt: 'Pds Logo'
    },
    {
      src: MankidoLogo,
      alt: 'Mankido Logo'
    },
    {
      src: CopadataLogo,
      alt: 'Copadata Logo'
    },
    {
      src: HaushaLogo,
      alt: 'Hausha Logo'
    },
    {
      src: SommerauserLogo,
      alt: 'Sommerauser Logo'
    },
    {
      src: BrickLogo,
      alt: 'Brick Logo'
    },
    {
      src: DpaLogo,
      alt: 'Dpa Logo'
    },
    {
      src: KtmLogo,
      alt: 'Ktm Logo'
    }
  ]

  return (
    <section className="py-28">
      <div className="container mx-auto px-8 md:px-0">
        <div className="flex flex-col items-center">
          <h2 className="text-center uppercase text-sm font-bold">A SELECTION OF OUR CUSTOMERS IN THE FIELD OF MOBILE AND WEB APP DEVELOPMENT: START-UPS, MARKET LEADERS AND HIDDEN CHAMPIONS.</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-7">
            {logos.map((logo, index) => (
              <div className="logo-card my-4" key={`logo-${index}`}>
                <Image src={logo.src} alt={logo.alt} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ChampionsSection;
