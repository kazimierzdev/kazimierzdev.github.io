import Image from "next/image";
import PowerSecurityImage from "@/images/power-up/security.jpg";

const PowerUpSecuritySection = () => {
  return (
    <section className="py-28 bg-dark-purple">
      <div className="container mx-auto px-8 md:px-0">
        <div className="flex flex-col md:flex-row md:items-center gap-28">
          <div className="flex-1">
            <Image src={PowerSecurityImage} alt="Hire Design Team" className="w-full" />
          </div>
          <div className="flex-1">
            <h4 className="text-white text-4xl font-bold mb-8">Security</h4>
            <p className="text-white leading-relaxed">
              One of the most important requirements for web and mobile app infrastructure is that it is secure. This means that sensitive data, such as passwords or personal information, is stored and transmitted in encrypted form. It is also important that the app is protected against external attacks, such as hack attempts.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PowerUpSecuritySection;
