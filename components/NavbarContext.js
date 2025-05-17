// Globaler Kontext für Navbar 

"use client";

import { createContext, useContext, useState } from "react";

const NavbarContext = createContext();

export function NavbarProvider({ children }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <NavbarContext.Provider value={{ expanded, setExpanded }}>
      {children}
    </NavbarContext.Provider>
  );
}

export function useNavbar() {
  return useContext(NavbarContext);
}
