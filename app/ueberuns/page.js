// Über Uns Seite

import Image from "next/image";
import NavButton from "../../components/NavButton"


export const metadata = {
  title: "Über Uns",
  description: "Erfahre mehr über das engagierte Team hinter Kleiderkurier"
  };

export default function AboutUs() {
  return (
    <div>
      {/* Allgemeine Informationen */}
      <section className="general bg-primary text-white text-center py-5">
        <div className="container">
          <h1 className="display-4 font-weight-bold">Wir sind Kleiderkurier</h1>
          <p className="lead">
            2022 von engagierten Helfer*innen in Spandau gegründet – heute ein expandierendes Netzwerk, das bereits in ganz Berlin tätig ist .
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="mission py-5 bg-light text-center">
        <div className="container">
          <h2 className="font-weight-bold mb-4">Unsere Mission</h2>
          <p className="lead mb-0">
            Kleidung ist mehr als nur Stoff – sie schenkt Wärme, Schutz und Geborgenheit.
            <br />
            Wir sammeln gut erhaltene Kleidung und bringen sie ohne Umwege oder versteckte Kosten dorthin, wo sie dringend gebraucht wird.
          </p>
        </div>
      </section>

      {/* Unser Team */}
      <section className="team py-5 text-center">
        <div className="container">
          <h2 className="font-weight-bold mb-4">Das Herz von Kleiderkurier</h2>
          <p className="lead mb-5">
            Hinter jeder versendeten Spende stehen Menschen, die mit Leidenschaft und Herzblut dabei sind.
          </p>
          <div className="row">
            {/* Teammitglied 1 */}
            <div className="col-md-4 mb-4">
              <div className="card shadow-sm border-0">
                <div className="position-relative" style={{ width: '100%', paddingBottom: '100%' }}>
                  <Image
                    src="/images/team1.jpg"
                    alt="Teammitglied Max Müller"
                    fill
                    style={{objectFit: "cover" }}
                    className="card-img-top rounded object-cover"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Max Müller</h5>
                  <p className="text-muted mb-2">1. Vorstand</p>
                  <p className="card-text">
                    Max hat das Projekt ins Leben gerufen und bringt als Visionär und Macher Struktur und Inspiration ins Team.
                  </p>
                </div>
              </div>
            </div>

            {/* Teammitglied 2 */}
            <div className="col-md-4 mb-4">
              <div className="card shadow-sm border-0">
                <div className="position-relative" style={{ width: '100%', paddingBottom: '100%' }}>
                  <Image
                    src="/images/team2.jpg"
                    alt="Teammitglied Anna Schmidt"
                    fill
                    style={{objectFit: "cover" }}
                    className="card-img-top rounded object-cover"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Anna Schmidt</h5>
                  <p className="text-muted mb-2">2. Vorstand</p>
                  <p className="card-text">
                    Anna bringt Herz in die Kommunikation – ob online oder offline. Sie erzählt unsere Geschichten nach außen.
                  </p>
                </div>
              </div>
            </div>

            {/* Teammitglied 3 */}
            <div className="col-md-4 mb-4">
              <div className="card shadow-sm border-0">
                <div className="position-relative" style={{ width: '100%', paddingBottom: '100%' }}>
                  <Image
                    src="/images/team3.jpg"
                    alt="Teammitglied Lisa Weber"
                    fill
                    style={{objectFit: "cover" }}
                    className="card-img-top rounded object-cover"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Lisa Weber</h5>
                  <p className="text-muted mb-2">3. Vorstand</p>
                  <p className="card-text">
                    Lisa ist unser Logistik-Genie – mit ihr finden alle Spenden zuverlässig den Weg zu denen, die sie wirklich brauchen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Warum spenden? */}
      <section className="why-donate py-5 bg-primary text-white text-center">
        <div className="container">
          <h2 className="font-weight-bold mb-4">Warum Spenden?</h2>
          <p className="lead mb-4">
            Kleidung in konventionellen Kleidercontainern erreicht selten wirklich jene Menschen, die wirklich auf Unterstützung angewiesen sind. Wir von Kleiderkurier versichern, dass die Spende zu 100% in der gewählten Krisenregion ankommt.
          </p>
          <NavButton href="/spenden" className="btn btn-warning btn-lg">
            Jetzt Spenden
          </NavButton>
        </div>
      </section>

      {/* Aufruf zum Mitmachen */}
      <section className="cta py-5 text-center">
        <div className="container">
          <h2 className="font-weight-bold mb-4">Sei Teil der Bewegung</h2>
          <p className="lead mb-4">
            Egal ob du Kleidung spendest, mitarbeitest oder uns weiterempfiehlst – jede Unterstützung bringt uns näher an eine gerechtere Welt.
          </p>
          <NavButton href="/kontakt" className="btn btn-warning btn-lg">
            Kontakt aufnehmen
          </NavButton>
        </div>
      </section>
    </div>
  );
}

