// Navbar 

"use client";

import { useNavbar } from "./NavbarContext";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Navbar, Nav, Container } from "react-bootstrap";

export default function Navigation() {
  const pathname = usePathname();
  const { expanded, setExpanded } = useNavbar();

  const handleNavClick = () => setExpanded(false);

  const getNavLinkClass = (targetPath) => {
    return pathname === targetPath ? "active fw-bold text-white" : "text-white-50";
  };

  return (
    <Navbar
      expand="lg"
      bg="primary"
      variant="dark"
      fixed="top"
      expanded={expanded}
      onToggle={(value) => setExpanded(value)}
      className="py-3"
    >
      <Container>
        <Navbar.Brand as={Link} href="/" onClick={handleNavClick}>
          <img
            src="/logo.png"
            width="80"
            height="80"
            className="d-inline-block align-center me-2"
            alt="Kleiderkurier Logo"
          />
          Kleiderkurier e.V.
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              as={Link}
              href="/"
              onClick={handleNavClick}
              aria-current={pathname === "/" ? "page" : undefined}
              className={getNavLinkClass("/")}
            >
              Start
            </Nav.Link>
            <Nav.Link
              as={Link}
              href="/spenden"
              onClick={handleNavClick}
              aria-current={pathname === "/spenden" ? "page" : undefined}
              className={getNavLinkClass("/spenden")}
            >
              Spenden
            </Nav.Link>
            <Nav.Link
              as={Link}
              href="/ueberuns"
              onClick={handleNavClick}
              aria-current={pathname === "/ueberuns" ? "page" : undefined}
              className={getNavLinkClass("/ueberuns")}
            >
              Über Uns
            </Nav.Link>
            <Nav.Link
              as={Link}
              href="/kontakt"
              onClick={handleNavClick}
              aria-current={pathname === "/kontakt" ? "page" : undefined}
              className={getNavLinkClass("/kontakt")}
            >
              Kontakt
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}



