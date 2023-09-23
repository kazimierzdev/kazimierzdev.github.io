import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/images/logo.svg";
import DesktopMenu from "@/components/header/desktop-menu";
import MobileMenu from "@/components/header/mobile-menu";

const Header = () => {
  const [stickyMenuOpened, setStickyMenuOpened] = useState(false);
  const [showStickyHeader, setShowStickyHeader] = useState(false);
  const [menuOver, setMenuOver] = useState(false);

  useEffect(() => {
    const updateScrollDirection = () => {
      if (window.scrollY > 700) {
        setShowStickyHeader(true)
      } else {
        setShowStickyHeader(false);
        setStickyMenuOpened(false);
      }
    };
    window.addEventListener("scroll", updateScrollDirection);

    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
    }
  }, []);

  const handleClickStickyMenu = () => {
    setStickyMenuOpened(!stickyMenuOpened);
  }

  return (
    <header className={`header lg:absolute bg-darker lg:bg-transparent left-0 top-0 w-full flex items-center justify-between px-2 md:px-4 lg:pr-0 2xl:px-20 h-[80px] md:h-[120px] z-50 ${showStickyHeader ? 'scrolled' : ''}`}>
      <Link href="/" aria-current="page" className="nuxt-link-exact-active nuxt-link-active z-10">
        <Image alt="TechVoyageSolutions logo" height="78" width="205" className="logo lazyLoad isLoaded" src={Logo} />
      </Link>

      <DesktopMenu />

      <MobileMenu />

      <div className={`main-nav secondary-nav justify-end ${stickyMenuOpened ? 'nav-opened' : 'nav-closed'} ${menuOver ? 'menu-overed': ''}`}>
        <DesktopMenu setOver={setMenuOver} />
        <div className={`hamburger hamburger--slider ${stickyMenuOpened ? 'is-active' : ''}`} onClick={handleClickStickyMenu}>
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </div>
      </div>
    </header>
  )
}

export default Header;
