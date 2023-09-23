import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { BiChevronRight } from "react-icons/bi";
import Accordion from "@/components/accordion";
import {useTranslation} from "next-i18next";

const MobileMenu = () => {
  const { t } = useTranslation('common');

  const [mobileMenuOpened, setMobileMenuOpened] = useState(false);

  const router = useRouter();
  const pathname = router.pathname;

  useEffect(() => {
    setMobileMenuOpened(false);
  }, [pathname]);

  const handleClickMobileMenu = () => {
    setMobileMenuOpened(!mobileMenuOpened);
  }

  return (
    <div className={`lg:hidden main-nav ${mobileMenuOpened ? 'nav-opened' : 'nav-closed'}`}>
      <nav className="nav-wrapper">
        <div className="relative top-1/2 px-10 -translate-y-1/2">
          <ul>
            <li className="flex justify-between items-center px-4 py-6 border-t-2 border-light-grey cursor-pointer">
              <Link href="/" className="uppercase text-white font-bold" onClick={() => setMobileMenuOpened(false)}>{t('header.home')}</Link>
              <BiChevronRight className="text-secondary text-3xl" />
            </li>
            <li className="flex justify-between items-center px-4 py-6 border-t-2 border-light-grey cursor-pointer">
              <Accordion title={t('header.services')} link="/services">
                <div className="pl-6">
                  <ul className="mt-4">
                    <li className="flex justify-between items-center py-4 border-t-2 border-light-grey cursor-pointer">
                      <Accordion title={t('header.design')} link="/design">
                        <div className="flex items-center py-2">
                          <BiChevronRight className="text-secondary text-3xl" />
                          <Link href="/design/ui-design" className="uppercase text-white font-bold" onClick={() => setMobileMenuOpened(false)}>{t('header.ui_design')}</Link>
                        </div>
                        <div className="flex items-center py-2">
                          <BiChevronRight className="text-secondary text-3xl" />
                          <Link href="/design/ux-design" className="uppercase text-white font-bold" onClick={() => setMobileMenuOpened(false)}>{t('header.ux_design')}</Link>
                        </div>
                        <div className="flex items-center py-2">
                          <BiChevronRight className="text-secondary text-3xl" />
                          <Link href="/design/architecture-design" className="uppercase text-white font-bold" onClick={() => setMobileMenuOpened(false)}>{t('header.architecture_design')}</Link>
                        </div>
                      </Accordion>
                    </li>
                    <li className="flex justify-between items-center py-4 border-t-2 border-light-grey cursor-pointer">
                      <Accordion title={t('header.development')} link="/development">
                        <div className="flex items-center py-2">
                          <BiChevronRight className="text-secondary text-3xl" />
                          <Link href="/development/web-apps" className="uppercase text-white font-bold" onClick={() => setMobileMenuOpened(false)}>{t('header.web_apps')}</Link>
                        </div>
                        <div className="flex items-center py-2">
                          <BiChevronRight className="text-secondary text-3xl" />
                          <Link href="/development/backend" className="uppercase text-white font-bold" onClick={() => setMobileMenuOpened(false)}>{t('header.backend')}</Link>
                        </div>
                        <div className="flex items-center py-2">
                          <BiChevronRight className="text-secondary text-3xl" />
                          <Link href="/development/mobile-apps" className="uppercase text-white font-bold" onClick={() => setMobileMenuOpened(false)}>{t('header.mobile_apps')}</Link>
                        </div>
                      </Accordion>
                    </li>
                    <li className="flex justify-between items-center py-4 border-t-2 border-light-grey cursor-pointer">
                      <Accordion title={t('header.power_up')} link="/power-up">
                        <div className="flex items-center py-2">
                          <BiChevronRight className="text-secondary text-3xl" />
                          <Link href="/power-up/app-store" className="uppercase text-white font-bold" onClick={() => setMobileMenuOpened(false)}>{t('header.apps')}</Link>
                        </div>
                        <div className="flex items-center py-2">
                          <BiChevronRight className="text-secondary text-3xl" />
                          <Link href="/power-up/devops" className="uppercase text-white font-bold" onClick={() => setMobileMenuOpened(false)}>{t('header.devOps')}</Link>
                        </div>
                        <div className="flex items-center py-2">
                          <BiChevronRight className="text-secondary text-3xl" />
                          <Link href="/power-up/infrastructure" className="uppercase text-white font-bold" onClick={() => setMobileMenuOpened(false)}>{t('header.infrastructure')}</Link>
                        </div>
                      </Accordion>
                    </li>
                  </ul>
                </div>
              </Accordion>
            </li>
            <li className="flex justify-between items-center px-4 py-6 border-t-2 border-light-grey cursor-pointer">
              <Link href="/projects" className="uppercase text-white font-bold" onClick={() => setMobileMenuOpened(false)}>{t('header.projects')}</Link>
              <BiChevronRight className="text-secondary text-3xl" />
            </li>
            <li className="flex justify-between items-center px-4 py-6 border-t-2 border-light-grey cursor-pointer">
              <Accordion title={t('header.about_us')} link="/about-us">
                <div className="flex items-center py-2">
                  <BiChevronRight className="text-secondary text-3xl" />
                  <Link href="/blog" className="uppercase text-white font-bold" onClick={() => setMobileMenuOpened(false)}>{t('header.blog')}</Link>
                </div>
                <div className="flex items-center py-2">
                  <BiChevronRight className="text-secondary text-3xl" />
                  <Link href="/career" className="uppercase text-white font-bold" onClick={() => setMobileMenuOpened(false)}>{t('header.career')}</Link>
                </div>
              </Accordion>
            </li>
            <li className="flex justify-between items-center px-4 py-6 border-t-2 border-light-grey cursor-pointer">
              <Link href="/contact" className="uppercase text-white font-bold" onClick={() => setMobileMenuOpened(false)}>{t('header.contact')}</Link>
              <BiChevronRight className="text-secondary text-3xl" />
            </li>
            {/*<li className="flex justify-center mt-8">*/}
            {/*  <Link href="https://techvoyagesolution.com/meetings/vernes" target="_blank" className="btn bg-secondary border-secondary text-white uppercase font-bold">*/}
            {/*    <span className="icon-calendar mr-2"></span>{t('header.book_free')}*/}
            {/*  </Link>*/}
            {/*</li>*/}
          </ul>
        </div>
      </nav>
      <div className={`hamburger hamburger--slider ${mobileMenuOpened ? 'is-active' : ''}`} onClick={handleClickMobileMenu}>
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
      </div>
    </div>
  )
}

export default MobileMenu;
