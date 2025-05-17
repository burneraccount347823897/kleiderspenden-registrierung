// Spenden Bestätigung 

import { Button } from "react-bootstrap";
import { motion } from "framer-motion";
import StorkIcon from "../../components/StorkIcon";

export default function DonationConfirmation({ confirmation }) {
  return (
    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="text-center p-4 bg-success text-white rounded shadow">
      <motion.div initial={{ scale: 0 }} animate={{ scale: 1.2 }} transition={{ delay: 0.3, type: "spring", stiffness: 200 }}>
        <StorkIcon size={120} className="mx-auto mb-1" />
      </motion.div>
      <h2 className="mt-3">Vielen Dank für Ihre Spende!</h2>
      <p className="lead">Die erfolgreiche Registrierung wird hiermit bestätigt.</p>
      <hr className="border-light" />
      <div className="text-start">
        <p><strong>Spenden-Identifikationsnummer:</strong> {confirmation.customerNumber}</p>
        <p><strong>Art der Kleidung:</strong> {confirmation.clothing}</p>
        <p><strong>Krisengebiet:</strong> {confirmation.region}</p>
        <p><strong>Spendenart:</strong> {confirmation.donationType === "station" ? "Übergabe an der Geschäftsstelle" : `Abholung von ${confirmation.fullPostalCode}, ${confirmation.address}`}</p>
        {confirmation.donationType === "pickup" && (
          <p><strong>Abholdatum:</strong> {confirmation.pickupDate}</p>
        )}
        <p><strong>Registriert am:</strong> {confirmation.date}</p>
      </div>
      {confirmation.donationType === "pickup" && (
        <p className="mt-3">Das Sammelfahrzeug ist auf dem Weg zu Ihnen und holt Ihre Spende am {confirmation.pickupDate} ab.</p>
      )}
      <Button variant="light" className="mt-3" onClick={() => window.location.reload()}>
        Weitere Spende registrieren
      </Button>
    </motion.div>
  );
}
