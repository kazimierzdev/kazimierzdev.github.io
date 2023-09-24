import Link from "next/link";

type DesktopProps = {
  setOver?: (type: boolean) => void
}
const DesktopMenu = ({ setOver }: DesktopProps) => {
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
            <Link href="/" className="uppercase text-white font-bold pb-1 hover:border-b-2 border-cyan-300">Home Page</Link>
          </li>
          <li className="px-6 py-2 dropdown-menu" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
            <Link href="/services" className="uppercase text-white font-bold pb-1 hover:border-b-2 border-cyan-300">Services</Link>
            <div>
              <div className="nav-overlay" />
              <div className="dropdown">
                <div className="flex gap-8" style={{ width: '956px' }}>
                  <div className="flex flex-col">
                    <Link href="/design" className="text-secondary hover:text-hover-secondary text-2xl font-bold mb-10">Design</Link>
                    <Link href="/design/ui-design" className="uppercase text-white font-bold mb-6 w-fit border-b-2 border-transparent hover:border-b-2 hover:border-cyan-300">UI Design</Link>
                    <Link href="/design/ux-design" className="uppercase text-white font-bold mb-6 w-fit border-b-2 border-transparent hover:border-b-2 hover:border-cyan-300">UX Design</Link>
                    <Link href="/design/architecture-design" className="uppercase text-white font-bold mb-6 w-fit border-b-2 border-transparent hover:border-b-2 hover:border-cyan-300">Architecture Design</Link>
                  </div>
                  <div className="flex flex-col">
                    <Link href="/development" className="text-secondary hover:text-hover-secondary text-2xl font-bold mb-10">Development</Link>
                    <Link href="/development/web-apps" className="uppercase text-white font-bold mb-6 w-fit border-b-2 border-transparent hover:border-b-2 hover:border-cyan-300">Web Apps</Link>
                    <Link href="/development/backend" className="uppercase text-white font-bold mb-6 w-fit border-b-2 border-transparent hover:border-b-2 hover:border-cyan-300">Backend</Link>
                    <Link href="/development/mobile-apps" className="uppercase text-white font-bold mb-6 w-fit border-b-2 border-transparent hover:border-b-2 hover:border-cyan-300">Mobile Apps</Link>
                  </div>
                  <div className="flex flex-col">
                    <Link href="/power-up" className="text-secondary hover:text-hover-secondary text-2xl font-bold mb-10">Power up</Link>
                    <Link href="/power-up/app-store" className="uppercase text-white font-bold mb-6 w-fit border-b-2 border-transparent hover:border-b-2 hover:border-cyan-300">Apps</Link>
                    <Link href="/power-up/devops" className="uppercase text-white font-bold mb-6 w-fit border-b-2 border-transparent hover:border-b-2 hover:border-cyan-300">DevOps</Link>
                    <Link href="/power-up/infrastructure" className="uppercase text-white font-bold mb-6 w-fit border-b-2 border-transparent hover:border-b-2 hover:border-cyan-300">Infrastructure</Link>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="px-6 py-2 text-white">
            <Link href="/projects" className="uppercase text-white font-bold pb-1 hover:border-b-2 border-cyan-300">Projects</Link>
          </li>
          <li className="px-6 py-2 dropdown-menu about-dropdown" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
            <Link href="/about-us" className="uppercase text-white font-bold pb-1 hover:border-b-2 border-cyan-300">About Us</Link>
            <div>
              <div className="nav-overlay" />
              <div className="dropdown">
                <div className="flex gap-8" style={{ width: '956px' }}>
                  <div className="flex flex-col">
                    <Link href="/blog" className="uppercase text-white font-bold mb-6 w-fit border-b-2 border-transparent hover:border-b-2 hover:border-cyan-300">Blog</Link>
                    <Link href="/career" className="uppercase text-white font-bold mb-6 w-fit border-b-2 border-transparent hover:border-b-2 hover:border-cyan-300">Career</Link>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="px-6 py-2">
            <Link href="/contact" className="uppercase text-white font-bold pb-1 hover:border-b-2 border-cyan-300">Contact</Link>
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
