// Spendenformular 

"use client";

import React, { useState } from "react";
import {
  Container,
  Form,
  Button,
  Alert,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  InfoCircle,
  GeoAltFill,
  BoxSeam,
  Truck,
  House,
  Clock,
  Mailbox,
} from "react-bootstrap-icons";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import DonationConfirmation from "./DonationConfirmation"
import "react-datepicker/dist/react-datepicker.css"
import { registerLocale } from "react-datepicker"
import de from "date-fns/locale/de";
import { setHours, setMinutes } from "date-fns";

registerLocale("de", de);

const crisisRegions = ["Ukraine", "Syrien", "Palästina", "Myanmar", "Sudan"];
const clothingTypes = ["Jacken", "Hosen", "T-Shirts", "Schuhe", "Decken"];
const berlinPostalPrefixes = ["10", "12", "13", "14", "15"];

export default function ClothesDonationForm() {
  const [donationType, setDonationType] = useState("station");
  const [fullPostalCode, setFullPostalCode] = useState("");
  const [address, setAddress] = useState("");
  const [clothing, setClothing] = useState("");
  const [region, setRegion] = useState("");
  const [confirmation, setConfirmation] = useState(null);
  const [validPostalCode, setValidPostalCode] = useState(null);
  const [pickupDate, setPickupDate] = useState(null);

  const handlePostalCodeChange = (e) => {
    const value = e.target.value;
    setFullPostalCode(value);
  
    if (value.length >= 2) {
      const prefix = value.slice(0, 2);
      setValidPostalCode(berlinPostalPrefixes.includes(prefix));
    } else {
      setValidPostalCode(null);
    }
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (donationType === "pickup" && (!validPostalCode || fullPostalCode.length !== 5 || address.trim() === "" || !pickupDate)) {
      alert("Bitte füllen Sie alle Felder wie gefordert aus");
      return;
    }
    if (!clothing || !region) {
      alert("Bitte wählen Sie die Art der Kleidung und das Krisengebiet aus.");
      return;
    }

    const customerNumber = getNextCustomerNumber();

    setConfirmation({
      donationType,
      address,
      fullPostalCode,
      clothing,
      region,
      date: new Date().toLocaleString(),
      pickupDate: pickupDate?.toLocaleString(),
      customerNumber,
    });
  };

  const tooltip = (msg) => <Tooltip>{msg}</Tooltip>;

  const isWeekday = (date) => {
    const day = date.getDay();
    return day !== 0; 
  };

  const getNextCustomerNumber = () => {
    const lastNumber = parseInt(localStorage.getItem("lastCustomerNumber") || "0", 10);
    const nextNumber = lastNumber + 1;
  
    localStorage.setItem("lastCustomerNumber", nextNumber.toString());
  
    return `SP-${String(nextNumber).padStart(4, "0")}`;
  };
  

  return (
    <Container className="mt-5 p-4 rounded shadow bg-white">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1 className="text-center mb-3 text-primary fw-bold">Kleiderspenden-Registrierung</h1>
        <p className="text-center text-muted fst-italic mb-4">
          Eine Abholung per Sammelfahrzeug ist <strong>nur</strong> in <strong>Berlin</strong> möglich!
        </p>

        {confirmation ? (
          <DonationConfirmation confirmation={confirmation} />
        ) : (
          <Form onSubmit={handleSubmit} className="p-4 bg-light rounded shadow-sm">
            <Form.Group className="mb-3">
                <Form.Label><Truck className="me-2" />Spendenart</Form.Label>
                <Form.Select value={donationType} onChange={(e) => setDonationType(e.target.value)}>
                  <option value="station">Übergabe an der Geschäftsstelle</option>
                  <option value="pickup">Abholung per Sammelfahrzeug</option>
                </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>
                <BoxSeam className="me-2" />Art der Kleidung
                <OverlayTrigger placement="top" trigger={["hover", "click"]} overlay={tooltip("Bei diversen Artikeln bitte Kleidungsart mit dem größten Spendenanteil wählen")}>
                        <span style={{ display: "inline-block"}}>
                          <InfoCircle className="text-primary ms-2" />
                        </span>
                </OverlayTrigger>
              </Form.Label>
                <Form.Select value={clothing} onChange={(e) => setClothing(e.target.value)}>
                  <option value="">Bitte auswählen</option>
                  {clothingTypes.map((type, idx) => (
                    <option key={idx} value={type}>{type}</option>
                  ))}
                </Form.Select>
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Label>
                <GeoAltFill className="me-2" />Krisengebiet
                <OverlayTrigger placement="top" trigger={["hover", "click"]} overlay={tooltip("Ihr bevorzugtes Spendenziel")}>
                        <span style={{ display: "inline-block" }}>
                          <InfoCircle className="text-primary ms-2" />
                        </span>
                </OverlayTrigger>
              </Form.Label>
              <Form.Select value={region} onChange={(e) => setRegion(e.target.value)}>
                <option value="">Bitte auswählen</option>
                {crisisRegions.map((r, idx) => (
                  <option key={idx} value={r}>{r}</option>
                ))}
              </Form.Select>
            </Form.Group>

            {donationType === "pickup" && (
              <>
                <Form.Group className="mb-3">
                  <Form.Label>
                    <Mailbox className="me-2"/>Postleitzahl
                    <OverlayTrigger placement="top" trigger={["hover", "click"]} overlay={tooltip("Nur Berliner PLZ!")}>
                      <span style={{ display: "inline-block" }}>
                        <InfoCircle className="text-primary ms-2" />
                      </span>
                     </OverlayTrigger>
                 </Form.Label>
                  <Form.Control
                    type="text"
                    maxLength="5"
                    value={fullPostalCode}
                    onChange={handlePostalCodeChange}
                    placeholder="z.B. 10115"
                    style={{ width: "100px" }}
                  />
                </Form.Group>

                {validPostalCode === false && (
                  <Alert variant="danger">
                    ❌ Leider bieten wir für Ihren Wohnort noch keine Abholung an. Bringen Sie Ihre Spende gerne persönlich vorbei!
                  </Alert>
                )}

                {validPostalCode && (
                  <>
                    <Form.Group className="mb-3">
                      <Form.Label><House className="me-2"/>Adresse (Bezirk und Straße)</Form.Label>
                      <Form.Control type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="z.B. Spandau, Schönwälder Str. 12" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label><Clock className="me-2"/>Wunschdatum für die Abholung</Form.Label>
                      <DatePicker
                        selected={pickupDate}
                        onChange={(date) => setPickupDate(date)}
                        filterDate={isWeekday}
                        minDate={new Date()}
                        showTimeSelect
                        timeFormat="HH:mm"
                        timeIntervals={30}
                        dateFormat="dd.MM.yyyy, HH:mm"
                        timeCaption="Uhrzeit"
                        locale="de"
                        minTime={setHours(setMinutes(new Date(), 0), 8)}
                        maxTime={setHours(setMinutes(new Date (), 0), 16)}
                        className="form-control"
                        placeholderText="z.B. 12.03.2025, 12:30"
                        showPopperArrow={false}
                        autoComplete="off" 
                      />
                    </Form.Group>
                  </>
                )}
              </>
            )}

            <Button type="submit" variant="primary" className="w-100 fw-bold mt-3" disabled={!clothing || !region|| (donationType === "pickup" && (!validPostalCode || fullPostalCode.length !== 5 || address.trim() === "" || !pickupDate))}>
              Jetzt Spende registrieren
            </Button>
          </Form>
        )}
      </motion.div>
    </Container>
  );
}
