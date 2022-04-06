import React from "react";
import {
  Container,
  Grid,
  Segment,
  Image,
  Header,
  Icon,
  List,
  Card,
  Button,
} from "semantic-ui-react";

export default function EmployerDetail() {
  return (
    <Container style={{ margin: "6rem 4rem" }}>
      <Segment raised piled>
        <Grid>
          <Grid.Column textAlign="center" width={6}>
            <Image
              size="medium"
              centered
              circular
              src="https://cdn.dribbble.com/users/286960/screenshots/2938947/companies-illustration.jpg"
            />

            <Segment basic style={{ fontSize: "1.4rem" }} textAlign="left">
              <List style={{ marginLeft: "5.5rem" }}>
                <List.Item>
                  <List.Icon name="tag" />
                  <List.Content>Etiya</List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="mail outline" />
                  <List.Content>etiya@gmail.com</List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="krw" />
                  <List.Content>www.etiya.com</List.Content>
                </List.Item>
              </List>
            </Segment>
          </Grid.Column>
          <Grid.Column width={8}>
            <Container style={{ margin: "4rem" }} text fluid textAlign="left">
              <Header as="h2">Özet Bilgi</Header>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa strong. Cum sociis
                natoque penatibus et magnis dis parturient montes, nascetur
                ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,
                pretium quis, sem. Nulla consequat massa quis enim. Donec pede
                justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim
                justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam
                dictum felis eu pede link mollis pretium. Integer tincidunt.
                Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate
                eleifend tellus. Aenean leo ligula, porttitor eu, consequat
                vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in,
                viverra quis, feugiat a, tellus. Phasellus viverra nulla ut
                metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam
                ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
              </p>
            </Container>
          </Grid.Column>
        </Grid>
        <Segment basic>
          <Header as="h2" style={{ marginTop: "2rem" }} icon textAlign="center">
            <Icon name="building outline" circular />
            <Header.Content>KURUM BİLGİSİ</Header.Content>
          </Header>
          <Grid style={{ margin: "2rem" }}>
            <Grid.Column textAlign="left">
              <Segment raised textAlign="left">
                <h3>Kurumun İdolojisi</h3>
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

              <Segment raised textAlign="left">
                <h3>Kurumun Bulunduğu Şehirler</h3>
                <List animated verticalAlign="middle">
                  <List.Item>
                    <Icon name="building outline" />
                    <List.Content>
                      <List.Header>Oxford Univercity</List.Header>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <Icon name="building outline" />
                    <List.Content>
                      <List.Header>Univercity of california</List.Header>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <Icon name="building outline" />
                    <List.Content>
                      <List.Header>Boğaziçi Üniversitesi</List.Header>
                    </List.Content>
                  </List.Item>
                </List>
              </Segment>
              <Segment raised textAlign="left">
                <h3>Referanslar</h3>
                <List animated verticalAlign="middle">
                  <List.Item>
                    <Icon name="user outline" />
                    <List.Content>
                      <List.Header>
                        Vodafone Muhasebe Şefi Turgut Gürel
                      </List.Header>
                      turgutgurel@gmail.com
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <Icon name="user outline" />
                    <List.Content>
                      <List.Header>
                        Ziraan Bankası Muhasebe Uzmanı Aylin Kara
                      </List.Header>
                      aylınkara@gmail.com
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <Icon name="user outline" />
                    <List.Content>
                      <List.Header>
                        Halkbank Muhasebe Müdürü Necmettin Toğrul
                      </List.Header>
                      ncmttntgrl@gmail.com
                    </List.Content>
                  </List.Item>
                </List>
              </Segment>

              <Segment raised textAlign="left">
                <h3>İletişim</h3>
                <List>
                  <List.Item>
                    <List.Icon name="github" />
                    <List.Content as="a">
                      https://github.com/omergocmen
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon name="linkedin" />
                    <List.Content as="a">
                      https://www.linkedin.com/in/%C3%B6mer-g%C3%B6%C3%A7men-43a353227/
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon name="mail outline" />
                    <List.Content as="a">omergocmen68@outlook.com</List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon name="krw" />
                    <List.Content as="a">www.omergocmen.com</List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon name="phone" />
                    <List.Content as="a">05465654521</List.Content>
                  </List.Item>
                </List>
              </Segment>
              <Segment raised textAlign="left">
                <h3>Açık İş İlanları</h3>
                <Grid columns="equal">
                  <Grid.Column >
                    <Card.Group itemsPerRow={3}>
                      <Card centered color="violet" size="tiny">
                        <Card.Content>
                          <h4>Muhasebe Uzmanı</h4>
                          <Image
                            style={{ margin: "2rem 0" }}
                            circular
                            size="small"
                            src="https://1.semantic-ui.com/images/avatar/large/stevie.jpg"
                          />
                          <div>
                          Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan
                          mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir
                          matbaacının bir hurufat numune kitabı oluşturmak üzere
                          bir yazı galerisini alarak karıştırdığı 1500'lerden
                          beri endüstri standardı sahte metinler olarak
                          kullanılmıştır.
                          </div>
                          <Card.Description>
                            <p>
                              <strong>Son başvuru tarihi 28.10.2021</strong>
                            </p>
                            <p>
                              <strong>Etiya</strong>
                            </p>
                          </Card.Description>
                        </Card.Content>
                        <Card.Content></Card.Content>
                        <Card.Content extra>
                          <div className="ui two buttons">
                            <Button inverted color="violet">
                              İlana git
                            </Button>
                          </div>
                        </Card.Content>
                      </Card>
                      <Card centered color="violet" size="tiny">
                        <Card.Content>
                          <h4>Muhasebe Uzmanı</h4>
                          <Image
                            style={{ margin: "2rem 0" }}
                            circular
                            size="small"
                            src="https://1.semantic-ui.com/images/avatar/large/stevie.jpg"
                          />
                          <div>
                          Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan
                          mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir
                          matbaacının bir hurufat numune kitabı oluşturmak üzere
                          bir yazı galerisini alarak karıştırdığı 1500'lerden
                          beri endüstri standardı sahte metinler olarak
                          kullanılmıştır.
                          </div>
                          <Card.Description>
                            <p>
                              <strong>Son başvuru tarihi 28.10.2021</strong>
                            </p>
                            <p>
                              <strong>Etiya</strong>
                            </p>
                          </Card.Description>
                        </Card.Content>
                        <Card.Content></Card.Content>
                        <Card.Content extra>
                          <div className="ui two buttons">
                            <Button inverted color="violet">
                              İlana git
                            </Button>
                          </div>
                        </Card.Content>
                      </Card>
                      <Card centered color="violet" size="tiny">
                        <Card.Content>
                          <h4>Muhasebe Uzmanı</h4>
                          <Image
                            style={{ margin: "2rem 0" }}
                            circular
                            size="small"
                            src="https://1.semantic-ui.com/images/avatar/large/stevie.jpg"
                          />
                          <div>
                          Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan
                          mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir
                          matbaacının bir hurufat numune kitabı oluşturmak üzere
                          bir yazı galerisini alarak karıştırdığı 1500'lerden
                          beri endüstri standardı sahte metinler olarak
                          kullanılmıştır.
                          </div>
                          <Card.Description>
                            <p>
                              <strong>Son başvuru tarihi 28.10.2021</strong>
                            </p>
                            <p>
                              <strong>Etiya</strong>
                            </p>
                          </Card.Description>
                        </Card.Content>
                        <Card.Content></Card.Content>
                        <Card.Content extra>
                          <div className="ui two buttons">
                            <Button inverted color="violet">
                              İlana git
                            </Button>
                          </div>
                        </Card.Content>
                      </Card>
                      <Card centered color="violet" size="tiny">
                        <Card.Content>
                          <h4>Muhasebe Uzmanı</h4>
                          <Image
                            style={{ margin: "2rem 0" }}
                            circular
                            size="small"
                            src="https://1.semantic-ui.com/images/avatar/large/stevie.jpg"
                          />
                          <div>
                          Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan
                          mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir
                          matbaacının bir hurufat numune kitabı oluşturmak üzere
                          bir yazı galerisini alarak karıştırdığı 1500'lerden
                          beri endüstri standardı sahte metinler olarak
                          kullanılmıştır.
                          </div>
                          <Card.Description>
                            <p>
                              <strong>Son başvuru tarihi 28.10.2021</strong>
                            </p>
                            <p>
                              <strong>Etiya</strong>
                            </p>
                          </Card.Description>
                        </Card.Content>
                        <Card.Content></Card.Content>
                        <Card.Content extra>
                          <div className="ui two buttons">
                            <Button inverted color="violet">
                              İlana git
                            </Button>
                          </div>
                        </Card.Content>
                      </Card>
                    </Card.Group>
                  </Grid.Column>
                </Grid>
              </Segment>
            </Grid.Column>
          </Grid>
        </Segment>
      </Segment>
    </Container>
  );
}
