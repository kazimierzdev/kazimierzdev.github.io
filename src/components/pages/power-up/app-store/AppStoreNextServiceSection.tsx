import Link from "next/link";

const AppStoreNextServiceSection = () => {
  return (
    <section className="py-28 bg-primary">
      <div className="container mx-auto px-8 md:px-0 flex flex-col items-center">
        <h6 className="text-normal text-center font-bold uppercase text-secondary tracking-widest mb-12">Next Service</h6>
        <Link href="/power-up/devops" className="text-5xl md:text-6xl lg:text-8xl text-center font-bold text-white">DevOps</Link>
      </div>
    </section>
  )
}

export default AppStoreNextServiceSection;
