import Link from "next/link";

const DesignNextServiceSection = () => {
  return (
    <section className="py-28 bg-primary">
      <div className="container mx-auto px-8 md:px-0 flex flex-col items-center">
        <h6 className="text-normal text-center font-bold uppercase text-secondary tracking-widest mb-12">Next Service</h6>
        <Link href="/development" className="text-7xl md:text-8xl text-center font-bold text-white">Development</Link>
      </div>
    </section>
  )
}

export default DesignNextServiceSection;
