import React, { useState } from "react";
import {
  Container,
  Modal,
  Button,
  Header,
  Grid,
  Accordion,
  Segment,
  Icon,
  TextArea,
  Select,
} from "semantic-ui-react";

export default function AddJob() {
  const [active, setActive] = useState(0);
  const [definition, setDefinition] = useState("");
  const [quality, setQuality] = useState("");

  const [educationState, setEducationState] = useState("");
  const [shiftState, setShiftState] = useState("");
  const [militaryState, setMilitaryState] = useState("");
  const [drivingLicenseState, setDrivingLicenseState] = useState("");


  const educationLevel = [
    { text: "İlk okul" },
    { text: "Orta okul" },
    { text: "Lise" },
    { text: "Lisans" },
    { text: "Yüksek Lisans" },
    { text: "Doktora" }
  ];

  const shift = [
    { text: "Yarı Zamanlı" },
    { text: "Tam Zamanlı" },
    { text: "Gün Bazlı" },
    { text: "Esnek" }
  ];

  const military = [
    { text: "Yapıldı" },
    { text: "Muaf" },
    { text: "Tecilli" },
    { text: "Yapılmadı" }
  ];
  const drivingLicense = [
    { text: "A" },
    { text: "B" },
    { text: "C" },
    { text: "D" },
    { text: "E" },
    { text: "Yok" }
  ];

  const handleChange = (evt) => {
    if (evt.target.value !== "") {
      active === 1
        ? setDefinition(evt.target.value)
        : setQuality(evt.target.value);
      console.log(definition);
      console.log(quality);
    }
  };


  


  return (
    <Container style={{ marginTop: "6rem" }}>
      <h1 id="playfair" style={{ fontSize: "3rem" }}>
        İlan Oluştur
      </h1>
      <Segment>
        <Accordion fluid>
          <Accordion.Title
            active={active === 1}
            index={0}
            onClick={() => setActive(active !== 1 ? 1 : 0)}
          >
            <Icon name="dropdown" />
            İş Tanımı Ekle
          </Accordion.Title>
          <Accordion.Content active={active === 1}>
            <TextArea
              name="definition"
              placeholder="İş tanımını yazınız"
              style={{
                marginBottom: "3rem",
                minHeight: 100,
                maxWidth: "90%",
                minWidth: "90%",
              }}
              onChange={handleChange}
            />
          </Accordion.Content>
        </Accordion>
      </Segment>
      <Segment>
        <Accordion fluid>
          <Accordion.Title
            active={active === 2}
            index={0}
            onClick={() => setActive(active !== 2 ? 2 : 0)}
          >
            <Icon name="dropdown" />
            Genel Nitelikleri Ekle
          </Accordion.Title>
          <Accordion.Content active={active === 2}>
            <TextArea
              name="definition"
              placeholder="Genel Nitelikleri Yazınız"
              style={{
                marginBottom: "3rem",
                minHeight: 100,
                maxWidth: "90%",
                minWidth: "90%",
              }}
              onChange={handleChange}
            />
          </Accordion.Content>
        </Accordion>
      </Segment>
      <Segment>
        Aranan Kriterleri Belirt
        <Grid>
          <Grid.Column floated="left" width={4}>
            <Select
              style={{ margin: "1rem" }}
              placeholder="Yabancı Dil Bilgisi"
              options={educationLevel}
            />
            <Select
              style={{ margin: "1rem" }}
              placeholder="Eğitim Seviyesi"
              options={educationLevel}
            />
            <Select
              style={{ margin: "1rem" }}
              placeholder="Mesai Tipi"
              options={shift}
            />
            <Select
              style={{ margin: "1rem" }}
              placeholder="Departman"
              options={educationLevel}
            />
            <Select
              style={{ margin: "1rem" }}
              placeholder="Pozisyon"
              options={educationLevel}
            />
            <Select
              style={{ margin: "1rem" }}
              placeholder="Askerlik Durumu"
              options={military}
            />
            <Select
              style={{ margin: "1rem" }}
              placeholder="Ehliyet Durumu"
              options={drivingLicense}
            />
          </Grid.Column>
          <Grid.Column floated="right" width={4}>
            <Button style={{ margin: "1rem" }} color="violet">
              Oluştur
            </Button>
          </Grid.Column>
        </Grid>
      </Segment>
    </Container>
  );
}
