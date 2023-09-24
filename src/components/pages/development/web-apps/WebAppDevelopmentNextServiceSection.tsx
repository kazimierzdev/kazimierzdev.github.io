import Link from "next/link";

const WebAppDevelopmentNextServiceSection = () => {
  return (
    <section className="py-28 bg-primary">
      <div className="container mx-auto flex flex-col items-center">
        <h6 className="text-normal text-center font-bold uppercase text-secondary tracking-widest mb-12">Next Service</h6>
        <Link href="/development/backend" className="text-5xl md:text-6xl lg:text-8xl text-center font-bold text-white">Backend</Link>
      </div>
    </section>
  )
}

export default WebAppDevelopmentNextServiceSection;
