import Image from "next/image";
import FlutterAppImage from "@/images/design/flutter_app.png";

const UXDesignCostSection = () => {
  return (
    <section className="py-28">
      <div className="container mx-auto px-8 md:px-0">
        <div className="flex flex-col md:flex-row items-center gap-28">
          <div className="flex-1">
            <Image src={FlutterAppImage} alt="Hire Design Team" className="w-full" />
          </div>
          <div className="flex-1">
            <h4 className="text-black text-4xl font-bold mb-8">Cost savings through practical UX design</h4>
            <p className="text-lg mt-4 mb-12">A well-thought-out UX design can lead to cost reductions because the more corrections made in this phase of development, the less effort is required in later stages of the process. That&apos;s why it&apos;s particularly important not only to consider the visual design and the interfaces to other relevant systems - but also to strongly integrate the users into the UX development.</p>
            <button className="btn bg-secondary px-20 py-4 font-bold text-white rounded uppercase">
              Inquire Design Now
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UXDesignCostSection;
