// NavButton für in Page Seitenlinks

"use client";

import Link from "next/link";
import { useNavbar } from "./NavbarContext"; 

export default function NavButton({ href, children, className = "" }) {
  const { setExpanded } = useNavbar();

  const handleClick = () => {
    setExpanded(false);
  };

  return (
    <Link href={href} onClick={handleClick} className={className}>
      {children}
    </Link>
  );
}
