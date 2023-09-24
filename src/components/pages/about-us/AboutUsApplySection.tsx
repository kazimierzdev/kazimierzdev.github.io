import Link from "next/link";

const AboutUsApplySection = () => {
  return (
    <section className="py-28">
      <div className="container mx-auto px-8 md:px-0">
        <div className="flex flex-col lg:flex-row gap-8">
          <h2 className="text-6xl md:text-7xl lg:text-8xl leading-tight font-bold lg:w-1/3 lg:pr-20">Apply now</h2>
          <div className="lg:w-2/3">
            <h4 className="text-black text-4xl mb-8 leading-normal lg:pl-8">We are always looking for talent to strengthen our international team headquartered in Salzburg. Send us a few lines about yourself and we will be happy to invite you to an (online) coffee to get to know you better and find out about the possibilities of working with us.</h4>
            <Link href="/career" className="text-secondary font-bold uppercase text-lg mt-4 lg:pl-8">
              <span className="border-b-2 border-secondary">MORE INFO</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUsApplySection;
