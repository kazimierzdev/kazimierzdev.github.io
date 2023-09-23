import { ReactNode, useState } from "react";
import Link from "next/link";
import { BiMinus, BiPlus } from "react-icons/bi";

type AccordionProps = {
  title: string;
  link: string;
  children: ReactNode;
}

const Accordion = ({ title, link, children }: AccordionProps) => {
  const [isOpen, setOpen] = useState(false);

  const toggleAccordion = (e: any) => {
    e.preventDefault();
    setOpen(!isOpen);
  };

  return (
    <div className="accordion-wrapper w-full">
      <Link
        href={link}
        className={`accordion-title uppercase text-white font-bold ${isOpen ? "open" : ""}`}
      >
        {title}
        {isOpen ? <BiMinus className="text-secondary text-3xl" onClick={toggleAccordion} /> : <BiPlus className="text-secondary text-3xl" onClick={toggleAccordion} />}
      </Link>
      <div className={`accordion-item ${!isOpen ? "collapsed" : ""}`}>
        <div className="accordion-content">{children}</div>
      </div>
    </div>
  )
}

export default Accordion;
