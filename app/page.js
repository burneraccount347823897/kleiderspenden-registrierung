//Startseite

import Image from "next/image";
import NavButton from "../components/NavButton"

export default function Home() {
  return (
    <div>
      {/* Aufruf zum Spenden 1 */}
      <section className="donate bg-primary text-white text-center py-5">
        <div className="container">
          <h1 className="display-4 font-weight-bold">Gib Kleidung ein neues Leben</h1>
          <p className="lead">
            Spende deine gut erhaltene Kleidung und hilf Menschen in Not. Jeder Beitrag zählt!
          </p>
          <NavButton href="/spenden" className="btn btn-warning btn-lg">
            Jetzt Spenden
          </NavButton>
        </ div>
      </section>

      {/* Anleitung zum Spenden */}
      <section className="steps py-5 bg-light text-center">
        <div className="container">
          <h2 className="font-weight-bold mb-5">So einfach geht’s</h2>
          <div className="row">
            {/* Schritt 1 */}
            <div className="col-md-4 mb-4">
              <div className="card shadow-sm border-0">
                <div style={{ position: "relative", width: "100%", aspectRatio: "16 / 9" }}>
                  <Image
                    src="/images/schritt1.jpg"
                    alt="Kleidung aussortieren"
                    fill
                    className="card-img-top object-cover rounded-top"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">1. Kleidung aussortieren</h5>
                  <p className="card-text">
                    Finde gut erhaltene Kleidung, die du nicht mehr brauchst.
                  </p>
                </div>
              </div>
            </div>

            {/* Schritt 2 */}
            <div className="col-md-4 mb-4">
              <div className="card shadow-sm border-0">
                <div style={{ position: "relative", width: "100%", aspectRatio: "16 / 9" }}>
                  <Image
                    src="/images/schritt2.jpg"
                    alt="Paket packen"
                    fill
                    className="card-img-top object-cover rounded-top"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">2. Paket packen</h5>
                  <p className="card-text">
                    Verpacke deine Kleidung und ruf das Sammelfahrzeug oder gib deine Kleidung
                    direkt in unserer Geschäftsstelle ab.
                  </p>
                </div>
              </div>
            </div>

            {/* Schritt 3 */}
            <div className="col-md-4 mb-4">
              <div className="card shadow-sm border-0">
                <div style={{ position: "relative", width: "100%", aspectRatio: "16 / 9" }}>
                  <Image
                    src="/images/schritt3.jpg"
                    alt="Hilfe leisten"
                    fill
                    className="card-img-top object-cover rounded-top"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">3. Gutes tun</h5>
                  <p className="card-text">
                    Wir verteilen deine Spende an Bedürftige in einer Krisenregion deiner Wahl.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Erfolge */}
      <section className="impact py-5 bg-primary text-white text-center">
        <div className="container">
          <h2 className="font-weight-bold mb-4">Gemeinsam haben wir schon viel erreicht</h2>
          <div className="row">
            <div className="col-md-4 mb-3">
              <h3>10.000+</h3>
              <p>gespendete Kleidungsstücke</p>
            </div>
            <div className="col-md-4 mb-3">
              <h3>5.000+</h3>
              <p>bedürftigen Menschen geholfen</p>
            </div>
            <div className="col-md-4 mb-3">
              <h3>100%</h3>
              <p>Zustellungsquote am Zielort</p>
            </div>
          </div>
        </div>
      </section>

      {/* Aufruf zum Spenden 2 */}
      <section className="cta py-5 text-center">
        <div className="container">
          <h2 className="font-weight-bold mb-4">Mache den Unterschied</h2>
          <p className="lead mb-4">Spende noch heute und unterstütze Menschen in Not.</p>
          <NavButton href="/spenden" className="btn btn-warning btn-lg">
            Jetzt Spenden
          </NavButton>
        </div>
      </section>
    </div>
  );
}










