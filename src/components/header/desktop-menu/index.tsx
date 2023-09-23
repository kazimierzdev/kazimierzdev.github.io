import Link from "next/link";
import {useTranslation} from "next-i18next";

type DesktopProps = {
  setOver?: (type: boolean) => void
}
const DesktopMenu = ({ setOver }: DesktopProps) => {
  const { t } = useTranslation('common');

  const handleMouseOver = () => {
    setOver && setOver(true);
  }

  const handleMouseLeave = () => {
    setOver && setOver(false);
  }

  return (
    <div className="hidden lg:flex lg:justify-end h-full">
      <nav className="relative flex items-center">
        <ul className="px-12 lg:px-0 nav flex flex-col lg:flex-row items-center">
          <li className="px-6 py-2">
            <Link href="/" className="uppercase text-white font-bold pb-1 hover:border-b-2 border-cyan-300">{t('header.home')}</Link>
          </li>
          <li className="px-6 py-2 dropdown-menu" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
            <Link href="/services" className="uppercase text-white font-bold pb-1 hover:border-b-2 border-cyan-300">{t('header.services')}</Link>
            <div>
              <div className="nav-overlay" />
              <div className="dropdown">
                <div className="flex gap-8" style={{ width: '956px' }}>
                  <div className="flex flex-col">
                    <Link href="/design" className="text-secondary hover:text-hover-secondary text-2xl font-bold mb-10">{t('header.design')}</Link>
                    <Link href="/design/ui-design" className="uppercase text-white font-bold mb-6 w-fit border-b-2 border-transparent hover:border-b-2 hover:border-cyan-300">{t('header.ui_design')}</Link>
                    <Link href="/design/ux-design" className="uppercase text-white font-bold mb-6 w-fit border-b-2 border-transparent hover:border-b-2 hover:border-cyan-300">{t('header.ux_design')}</Link>
                    <Link href="/design/architecture-design" className="uppercase text-white font-bold mb-6 w-fit border-b-2 border-transparent hover:border-b-2 hover:border-cyan-300">{t('header.architecture_design')}</Link>
                  </div>
                  <div className="flex flex-col">
                    <Link href="/development" className="text-secondary hover:text-hover-secondary text-2xl font-bold mb-10">{t('header.development')}</Link>
                    <Link href="/development/web-apps" className="uppercase text-white font-bold mb-6 w-fit border-b-2 border-transparent hover:border-b-2 hover:border-cyan-300">{t('header.web_apps')}</Link>
                    <Link href="/development/backend" className="uppercase text-white font-bold mb-6 w-fit border-b-2 border-transparent hover:border-b-2 hover:border-cyan-300">{t('header.backend')}</Link>
                    <Link href="/development/mobile-apps" className="uppercase text-white font-bold mb-6 w-fit border-b-2 border-transparent hover:border-b-2 hover:border-cyan-300">{t('header.mobile_apps')}</Link>
                  </div>
                  <div className="flex flex-col">
                    <Link href="/power-up" className="text-secondary hover:text-hover-secondary text-2xl font-bold mb-10">{t('header.power_up')}</Link>
                    <Link href="/power-up/app-store" className="uppercase text-white font-bold mb-6 w-fit border-b-2 border-transparent hover:border-b-2 hover:border-cyan-300">{t('header.apps')}</Link>
                    <Link href="/power-up/devops" className="uppercase text-white font-bold mb-6 w-fit border-b-2 border-transparent hover:border-b-2 hover:border-cyan-300">{t('header.devOps')}</Link>
                    <Link href="/power-up/infrastructure" className="uppercase text-white font-bold mb-6 w-fit border-b-2 border-transparent hover:border-b-2 hover:border-cyan-300">{t('header.infrastructure')}</Link>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="px-6 py-2 text-white">
            <Link href="/projects" className="uppercase text-white font-bold pb-1 hover:border-b-2 border-cyan-300">{t('header.projects')}</Link>
          </li>
          <li className="px-6 py-2 dropdown-menu about-dropdown" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
            <Link href="/about-us" className="uppercase text-white font-bold pb-1 hover:border-b-2 border-cyan-300">{t('header.about_us')}</Link>
            <div>
              <div className="nav-overlay" />
              <div className="dropdown">
                <div className="flex gap-8" style={{ width: '956px' }}>
                  <div className="flex flex-col">
                    <Link href="/blog" className="uppercase text-white font-bold mb-6 w-fit border-b-2 border-transparent hover:border-b-2 hover:border-cyan-300">{t('header.blog')}</Link>
                    <Link href="/career" className="uppercase text-white font-bold mb-6 w-fit border-b-2 border-transparent hover:border-b-2 hover:border-cyan-300">{t('header.career')}</Link>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="px-6 py-2">
            <Link href="/contact" className="uppercase text-white font-bold pb-1 hover:border-b-2 border-cyan-300">{t('header.contact')}</Link>
          </li>
          {/*<li>*/}
          {/*  <Link href="https://techvoyagesolution.com/meetings" target="_blank" className="btn bg-secondary border-secondary text-white uppercase font-bold">*/}
          {/*    <span className="icon-calendar mr-2"></span>{t('header.book_free')}*/}
          {/*  </Link>*/}
          {/*</li>*/}
        </ul>
      </nav>
    </div>
  )
}

export default DesktopMenu;
