import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import {useTranslation} from "next-i18next";

const Footer = () => {
  const { t } = useTranslation('common');

  return (
    <footer className="bg-darker py-12">
      <div className="container mx-auto  px-8 md:px-0">
        <div className="flex flex-col lg:flex-row justify-end">
          <div className="flex items-center gap-5 mr-8 mb-16 lg:mb-0">
            {/*<p className="text-white px-4 py-1">{t('footer.connect_with_us')}</p>*/}
            <FaFacebookF className="text-white text-2xl" />
            <FaLinkedin className="text-white text-2xl" />
            <FaInstagram className="text-white text-2xl" />
          </div>

          <div className="flex flex-col md:flex-row">
            <Link href="/" className="text-white px-4 py-1">{t('footer.data_protection')}</Link>
            <Link href="/" className="text-white px-4 py-1">{t('footer.terms_conditions')}</Link>
            <Link href="/" className="text-white px-4 py-1">{t('footer.imprint')}</Link>
            <p className="text-white px-4 py-1">{t('footer.copyright')}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
