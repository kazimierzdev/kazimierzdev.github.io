import Image from "next/image";
import ContactBanner from "@/images/contact-banner.jpg";
import { FaLinkedin } from "react-icons/fa";
import {useTranslation} from "next-i18next";

const ContactBannerSection = () => {
  const { t } = useTranslation('common');

  return (
    <section className="section-hero relative min-h-[540px] pt-[160px] md:pt-[120px] overflow-hidden">
      <div className="absolute h-full w-full left-0 top-0 overflow-hidden">
        <Image
          className="absolute left-0 -top-1/4 w-full h-[150%] object-cover object-center z-0 scale-110"
          src={ContactBanner}
          alt="section-hero-image"
        />
      </div>
      <div className="relative flex w-full h-full items-center justify-center">
        <div className="container mx-auto flex flex-col md:flex-row md:items-center xl:pt-[100px] px-12 md:px-0">
          <div className="lg:w-7/12">
            <h1 className="relative text-4xl md:text-7xl lg:text-9xl text-white font-bold md:w-1/2 lg:w-7/12 leading-tight md:pl-12 pb-12 md:pb-0">
              <span className="block">Tech Voyage Solution</span>
            </h1>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="400" height="400" preserveAspectRatio="xMidYMid meet" className="w-full h-full overflow-hidden mx-auto my-0">
              <defs>
                <clipPath id="__lottie_element_2">
                  <rect width="400" height="400" x="0" y="0"></rect>
                </clipPath>
              </defs>
              <g clipPath="url(#__lottie_element_2)"><g transform="matrix(0,1.207509994506836,-1.207509994506836,0,167.187744140625,199.65811157226562)" opacity="1">
                <g opacity="1" transform="matrix(1,0,0,1,-63,25)">
                  <path strokeLinecap="butt" strokeLinejoin="miter" fillOpacity="0" strokeMiterlimit="4" stroke="rgb(45,193,164)" strokeOpacity="1" strokeWidth="4" d=" M4.721258309975905e-15,-77.10399627685547 C4.721258309975905e-15,-77.10399627685547 66.7740249633789,-38.551998138427734 66.7740249633789,-38.551998138427734 C66.7740249633789,-38.551998138427734 66.7740249633789,38.551998138427734 66.7740249633789,38.551998138427734 C66.7740249633789,38.551998138427734 2.1841786395477257e-14,77.10399627685547 2.1841786395477257e-14,77.10399627685547 C2.1841786395477257e-14,77.10399627685547 -66.7740249633789,38.551998138427734 -66.7740249633789,38.551998138427734 C-66.7740249633789,38.551998138427734 -66.7740249633789,-38.551998138427734 -66.7740249633789,-38.551998138427734 C-66.7740249633789,-38.551998138427734 4.721258309975905e-15,-77.10399627685547 4.721258309975905e-15,-77.10399627685547z"></path>
                </g>
              </g>
              <g transform="matrix(-1.0437794923782349,-0.607128381729126,0.607128381729126,-1.0437794923782349,195.6512451171875,192.55966186523438)" opacity="1">
                <g opacity="1" transform="matrix(1,0,0,1,-63,25)">
                  <path strokeLinecap="butt" strokeLinejoin="miter" fillOpacity="0" strokeMiterlimit="4" stroke="rgb(45,193,164)" strokeOpacity="1" strokeWidth="4" d=" M4.721258309975905e-15,-77.10399627685547 C4.721258309975905e-15,-77.10399627685547 66.7740249633789,-38.551998138427734 66.7740249633789,-38.551998138427734 C66.7740249633789,-38.551998138427734 66.7740249633789,38.551998138427734 66.7740249633789,38.551998138427734 C66.7740249633789,38.551998138427734 2.1841786395477257e-14,77.10399627685547 2.1841786395477257e-14,77.10399627685547 C2.1841786395477257e-14,77.10399627685547 -66.7740249633789,38.551998138427734 -66.7740249633789,38.551998138427734 C-66.7740249633789,38.551998138427734 -66.7740249633789,-38.551998138427734 -66.7740249633789,-38.551998138427734 C-66.7740249633789,-38.551998138427734 4.721258309975905e-15,-77.10399627685547 4.721258309975905e-15,-77.10399627685547z"></path>
                </g>
              </g>
              <g transform="matrix(-1.0429519414901733,0.6085487604141235,-0.6085487604141235,-1.0429519414901733,86.59364318847656,349.9452819824219)" opacity="1">
                <g opacity="1" transform="matrix(1,0,0,1,-63,25)">
                  <path strokeLinecap="butt" strokeLinejoin="miter" fillOpacity="0" strokeMiterlimit="4" stroke="rgb(45,193,164)" strokeOpacity="1" strokeWidth="4" d=" M4.721258309975905e-15,-77.10399627685547 C4.721258309975905e-15,-77.10399627685547 66.7740249633789,-38.551998138427734 66.7740249633789,-38.551998138427734 C66.7740249633789,-38.551998138427734 66.7740249633789,38.551998138427734 66.7740249633789,38.551998138427734 C66.7740249633789,38.551998138427734 2.1841786395477257e-14,77.10399627685547 2.1841786395477257e-14,77.10399627685547 C2.1841786395477257e-14,77.10399627685547 -66.7740249633789,38.551998138427734 -66.7740249633789,38.551998138427734 C-66.7740249633789,38.551998138427734 -66.7740249633789,-38.551998138427734 -66.7740249633789,-38.551998138427734 C-66.7740249633789,-38.551998138427734 4.721258309975905e-15,-77.10399627685547 4.721258309975905e-15,-77.10399627685547z"></path>
                </g>
              </g>
              </g>
            </svg>
          </div>
          <div className="pb-12 md:pb-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-6">
            <div>
              <h6 className="text-secondary uppercase text-sm font-extrabold tracking-wider mb-2">{t('contact_us.send_us_email')}</h6>
              <h5 className="text-white text-2xl font-semibold mb-6">hello@techvoyagesolution.com</h5>
            </div>
            <div>
              <h6 className="text-secondary uppercase text-sm font-extrabold tracking-wider mb-2">{t('contact_us.contact_us')}</h6>
              <h5 className="text-white text-2xl font-semibold mb-6">Phone number</h5>
            </div>
            <div>
              <h6 className="text-secondary uppercase text-sm font-extrabold tracking-wider mb-2">{t('contact_us.connect_with_us')}</h6>
              <FaLinkedin className="text-white text-2xl font-semibold mb-6" />
            </div>
            <div>
              <h6 className="text-secondary uppercase text-sm font-extrabold tracking-wider mb-2">{t('contact_us.office')}</h6>
              <h5 className="text-white text-2xl font-semibold mb-6">Office Address</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactBannerSection;
