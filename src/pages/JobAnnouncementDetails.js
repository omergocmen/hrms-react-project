import React from "react";
import {
  Card,
  Image,
  Grid,
  Container,
  Header,
  Segment,
  List,
  Button,
} from "semantic-ui-react";

export default function jobAnnouncementDetails() {
  return (
    <div>
      <Container style={{ marginTop: "6rem" }}>
        <Segment raised  textAlign="left">
          <Grid>
            <Grid.Column floated="left" width={5}>
              <h3>Muhasebe Personeli</h3>
              <b>Matsis Matbaa Hizmetleri San. Tic. Ltd Şti.</b>
              <div>
                <List bulleted horizontal>
                  <List.Item as="a">Ankara</List.Item>
                  <List.Item as="a">İstanbul</List.Item>
                  <List.Item as="a">İzmir</List.Item>
                </List>
              </div>
              <p>Güncellenme Tarihi 28.10.2022</p>
            </Grid.Column>
            <Grid.Column floated="right" width={5}>
              <Button floated="right" inverted color="violet">
                Hemen Başvur
              </Button>
            </Grid.Column>
          </Grid>

          <Segment >
            <Header as="h5">
              Çalışma Şekli
              <Header.Subheader>Tam Zamanlı</Header.Subheader>
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
                <h1>Deneme</h1>
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
