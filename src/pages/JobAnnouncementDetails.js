import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JobAnnouncementService from "../services/jobAnnouncementService";

import {
  Image,
  Grid,
  Container,
  Header,
  Segment,
  List,
  Button,
} from "semantic-ui-react";

export default function JobAnnouncementDetails() {
  const jobAnnoucmentService = new JobAnnouncementService();
  const [jobAnnoucment, setJobAnnoucment] = useState([]);
  const [cities, setCities] = useState([]);
  const [jobPositions, setJobPositions] = useState([]);
  const [employer, setEmployer] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    jobAnnoucmentService.getById(id).then((result) => {
      setJobAnnoucment(result.data.data);
      setCities(result.data.data.cities);
      setJobPositions(result.data.data.jobPositions);
      setEmployer(result.data.data.employer);
    });
  }, []);

  const getCities = (cities) => {
    return (
      <List bulleted horizontal>
        {cities.map((city, index) => (
          <List.Item key={index} as="a">
            {city.cityName}
          </List.Item>
        ))}
      </List>
    );
  };

  return (
    <div>
      <Container style={{ marginTop: "6rem" }}>
        <Segment raised textAlign="left">
          <Grid>
            <Grid.Column floated="left" width={5}>
              <h3>Muhasebe Personeli</h3>
              <b>{employer.companyName}</b>
              <div>{ getCities(cities)}</div>
              <p>Güncellenme Tarihi 28.10.2022</p>
              <b>Son Başvuru Tarihi 05.12.2022</b>
            </Grid.Column>
            <Grid.Column floated="right" width={5}>
              <Button floated="right" inverted color="violet">
                Hemen Başvur
              </Button>
            </Grid.Column>
          </Grid>

          <Segment>
            <Header as="h5">
              Çalışma Şekli
              <Header.Subheader>{jobAnnoucment.shift}</Header.Subheader>
            </Header>
            <Header as="h5">
              Departman
              <Header.Subheader>İnsan Kaynakları</Header.Subheader>
            </Header>
            <Header as="h5">
              Pozisyon
              <Header.Subheader>İnsan Kaynakları Uzmanı</Header.Subheader>
            </Header>
            <Header as="h5">
              Başvuru Sayısı
              <Header.Subheader>128</Header.Subheader>
            </Header>
            <Header as="h5">
              Maaş Aralığı
              <Header.Subheader>
                <b>En Düşük Maaş {jobAnnoucment.minSalary} TL</b>
                <b style={{marginLeft:"2rem"}}>En Yüksek Maaş  {jobAnnoucment.maxSalary} TL</b>
              </Header.Subheader>
            </Header>
          </Segment>
        </Segment>
        <Segment raised>
          <Grid>
            <Grid.Column width={6}>
              <Image
                style={{ padding: "4rem 0rem" }}
                src="https://react.semantic-ui.com/images/avatar/large/rachel.png"
              />
            </Grid.Column>
            <Grid.Column width={10}>
              <Container text fluid>
                <h1>{jobAnnoucment.description}</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa strong. Cum
                  sociis natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus. Donec quam felis, ultricies nec,
                  pellentesque eu, pretium quis, sem. Nulla consequat massa quis
                  enim. Donec pede justo, fringilla vel, aliquet nec, vulputate
                  eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis
                  vitae, justo. Nullam dictum felis eu pede link mollis pretium.
                  Integer tincidunt. Cras dapibus. Vivamus elementum semper
                  nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
                  porttitor eu, consequat vitae, eleifend ac, enim. Aliquam
                  lorem ante, dapibus in, viverra quis, feugiat a, tellus.
                  Phasellus viverra nulla ut metus varius laoreet. Quisque
                  rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.
                  Curabitur ullamcorper ultricies nisi.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa strong. Cum
                  sociis natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus. Donec quam felis, ultricies nec,
                  pellentesque eu, pretium quis, sem. Nulla consequat massa quis
                  enim. Donec pede justo, fringilla vel, aliquet nec, vulputate
                  eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis
                  vitae, justo. Nullam dictum felis eu pede link mollis pretium.
                  Integer tincidunt. Cras dapibus. Vivamus elementum semper
                  nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
                  porttitor eu, consequat vitae, eleifend ac, enim. Aliquam
                  lorem ante, dapibus in, viverra quis, feugiat a, tellus.
                  Phasellus viverra nulla ut metus varius laoreet. Quisque
                  rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.
                  Curabitur ullamcorper ultricies nisi.
                </p>
              </Container>
            </Grid.Column>
          </Grid>
        </Segment>
        <Segment raised textAlign="left">
          <h3>Genel Yetenekler ve İş Tanımı</h3>
          <List>
            <List.Item>
              <List.Icon name="check" />
              <List.Content>Semantic UI</List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name="check" />
              <List.Content>New York, NY</List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name="check" />
              <List.Content>Donec pede</List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name="check" />
              <List.Content>Phasellus</List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name="check" />
              <List.Content>Consequat</List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name="check" />
              <List.Content>Aenean imperdiet</List.Content>
            </List.Item>
          </List>
        </Segment>

        <Segment raised textAlign="left">
          <h3>Aday Kriterleri</h3>
          <List>
            <List.Item>
              <List.Icon name="star" />
              <List.Content>Semantic UI</List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name="star" />
              <List.Content>New York, NY</List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name="star" />
              <List.Content>Donec pede</List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name="star" />
              <List.Content>Phasellus</List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name="star" />
              <List.Content>Consequat</List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name="star" />
              <List.Content>Aenean imperdiet</List.Content>
            </List.Item>
          </List>
        </Segment>
      </Container>
    </div>
  );
}
