import DefaultUser from "@/images/default.jpg";
import Image from "next/image";

const Contactus = () => {
  return (
    <section className="py-28">
      <div className="container mx-auto px-8 md:px-0">
        <h4 className="xl:w-1/2 text-center xl:text-left text-4xl xl:text-5xl font-bold leading-snug mb-40">
          Contact us now for a <span className="text-secondary">free</span> initial consultation!
        </h4>
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
          <div className="flex flex-col justify-center items-center">
            <Image src={DefaultUser} alt="Avatar" className="w-1/2 rounded-full" />
            <p className="font-bold mt-6">Muhammad Abyan Fadillah</p>
            <p className="mb-12">Managing Director</p>
          </div>
          <div className="col-span-2">
            <div className="grid grid-cols-3 gap-2 md:gap-5 mb-6">
              <div className="flex flex-col flex-1 hs-form-field">
                <label className="mb-2">Salutation *</label>
                <select className="hs-input">
                  <option disabled>Please Select</option>
                  <option>Mister</option>
                  <option>Woman</option>
                </select>
              </div>
              <div className="flex flex-col flex-1 hs-form-field">
                <label className="mb-2">First name *</label>
                <input className="hs-input" type="text" />
              </div>
              <div className="flex flex-col flex-1 hs-form-field">
                <label className="mb-2">Last name *</label>
                <input className="hs-input" type="text" />
              </div>
            </div>
            <div className="flex flex-col hs-form-field mb-6">
              <label className="mb-2">Email *</label>
              <input className="hs-input w-full" type="text" />
            </div>
            <div className="flex flex-col hs-form-field mb-6">
              <label className="mb-2">Message *</label>
              <textarea rows={3} className="hs-input w-full" />
            </div>
            <p className="text-sm text-light-black mb-10">
              TechVoyageSolution needs the contact information you provide to us to contact you about our products and services. You can unsubscribe from these notifications at any time. For information on how to unsubscribe, as well as our privacy practices and our commitment to protecting your privacy, please see our Privacy Policy.
            </p>
            <button className="btn bg-secondary text-white font-bold text-2xl">
              Ask for free
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contactus;
