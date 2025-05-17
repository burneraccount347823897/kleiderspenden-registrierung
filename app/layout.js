//Root Layout

import "bootstrap/dist/css/bootstrap.css";
import Script from "next/script";
import Link from "next/link";
import Navbar from "../components/navbar";
import { NavbarProvider } from "../components/NavbarContext"; 

export const metadata = {
  title: {
    default: "Kleiderkurier – Kleidung sinnvoll spenden",
    template: "%s | Kleiderkurier",
  },
  description: "Kleiderkurier ist eine Plattform für nachhaltige Kleiderspenden in Berlin.",
  keywords: ["Kleiderspende", "Nachhaltigkeit", "Kleiderkurier", "Spenden", "Soziales Engagement"],
  authors: [{ name: "Kleiderkurier Team", url: "http://localhost:3000" }],
  creator: "Kleiderkurier e.V.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <head>
        {/* Strukturierte Daten (Schema.org für Google) */}
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Kleiderkurier",
              url: "http://localhost:3000",
              logo: "http://localhost:3000/logo.png", 
            }),
          }}
        />
      </head>

      <body className="d-flex flex-column min-vh-100">
        <NavbarProvider>
        <header>
          <Navbar />
        </header> 

        <main style={{ paddingTop: "100px" }}> <div className="container py-4" >{children} </div></main>

        <footer className="bg-dark text-white py-3 mt-auto">
          <div className="container text-center">
            <p>© {new Date().getFullYear()} Kleiderkurier e.V. Alle Rechte vorbehalten.</p>
            <p>
              <Link href="/impressum" className="text-white text-decoration-underline me-2">
                Impressum
              </Link>
              |
              <Link href="/datenschutz" className="text-white text-decoration-underline ms-2">
                Datenschutz
              </Link>
            </p>
          </div>
        </footer>
        </NavbarProvider>
      </body>
    </html>
  );
}










  
