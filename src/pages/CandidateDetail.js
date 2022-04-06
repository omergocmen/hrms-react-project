import React from 'react'
import {
    Container,
    Grid,
    Segment,
    Image,
    Header,
    Icon,
    List,
  } from "semantic-ui-react";

export default function CandidateDetail() {
  return (
    <Container style={{ margin: "6rem 4rem" }}>
    <Segment raised piled>
      <Grid>
        <Grid.Column textAlign="center" width={6}>
          <Image
            size="medium"
            centered
            circular
            src="https://react.semantic-ui.com/images/avatar/large/stevie.jpg"
          />

<Segment basic style={{fontSize:"1.4rem"}} textAlign="left">
              <List style={{marginLeft:"5.5rem"}}>
                <List.Item>
                  <List.Icon name="user outline" />
                  <List.Content>
                    Sevde Görür
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="star outline" />
                  <List.Content>
                    Muhasebe Uzmanı
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="mail outline" />
                  <List.Content>
                    sevdegorur@gmail.com
                  </List.Content>
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
          <Icon name="address card outline" circular />
          <Header.Content>ÖZGEÇMİŞ</Header.Content>
        </Header>
        <Grid style={{ margin: "2rem" }}>
          <Grid.Column textAlign="left">
            <Segment raised textAlign="left">
              <h3>Kariyer Geçmişi</h3>
              <List>
                <List.Item>
                  <List.Icon name="tag" />
                  <List.Content>
                    Vodafone Muhasebe Stajyeri 2015-2016
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="tag" />
                  <List.Content>
                    Vodafone Muhasebe Sekreteri 2016-2012
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="tag" />
                  <List.Content>
                    Ziraat Bankası Muhasebe Uzmanı 2018-2019
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="tag" />
                  <List.Content>
                    Ziraat Bankası Muhasebe Şefi 2019-2022
                  </List.Content>
                </List.Item>
              </List>
            </Segment>
            <Segment raised textAlign="left">
              <h3>Yetenekler</h3>
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
              <h3>Yabancı Dil Bilgisi</h3>
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
              <h3>Eğitim Aldığı Kurumlar</h3>
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
                    <List.Header>Vodafone Muhasebe Şefi Turgut Gürel</List.Header>
                    turgutgurel@gmail.com
                  </List.Content>
                </List.Item>
                <List.Item>
                  <Icon name="user outline" />
                  <List.Content>
                    <List.Header>Ziraan Bankası Muhasebe Uzmanı Aylin Kara</List.Header>
                    aylınkara@gmail.com
                  </List.Content>
                </List.Item>
                <List.Item>
                  <Icon name="user outline" />
                  <List.Content>
                    <List.Header>Halkbank Muhasebe Müdürü Necmettin Toğrul</List.Header>
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
          </Grid.Column>
        </Grid>
      </Segment>
    </Segment>
  </Container>
  )
}
