import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import {
  Container,
  Statistic,
  Grid,
  Header,
  Icon,
  Image,
  Segment,
} from "semantic-ui-react";

export default function Home() {
  const auth=useSelector(state=>state.auth);
  console.log(auth);


  return (
    <Container>
      <div id="slideSection">
        <Grid style={{ margin: "8em 0em" }}>
          <Grid.Column width={7} style={{ minWidth: "250px" }}>
            <Image
              circular
              fluid
              src="https://img.freepik.com/free-vector/decision-making-abstract-concept_335657-3039.jpg?size=338&ext=jpg"
            />
          </Grid.Column>
          <Grid.Column width={9} style={{ margin: "5em 0em" }}>
            <Container textAlign="center">
              <Header as="h1" id="libre" style={{ fontSize: "4rem" }}>
                Kariyerine Giden Yolu Arıyorsan Burası Tam Sana Göre
              </Header>
            </Container>
          </Grid.Column>
        </Grid>
      </div>
      <div className="statistic">
        <Segment inverted>
          <Statistic.Group inverted  color="violet" >
            <div style={{margin:"auto"}}>
            <Statistic >
              <Statistic.Value>20,258</Statistic.Value>
              <Statistic.Label>aktif iş ilanı</Statistic.Label>
            </Statistic>
            <Statistic>
              <Statistic.Value>31,200</Statistic.Value>
              <Statistic.Label>toplam kullanıcı</Statistic.Label>
            </Statistic>
            <Statistic>
              <Statistic.Value>2,258</Statistic.Value>
              <Statistic.Label>bugün iş arayanlar</Statistic.Label>
            </Statistic>
            <Statistic>
              <Statistic.Value><Icon name='building' />12</Statistic.Value>
              <Statistic.Label>bugün dahil olan firmalar</Statistic.Label>
            </Statistic>
            </div>
          </Statistic.Group>
        </Segment>
      </div>
      <div className="stageSection" style={{ marginTop: "6rem" }}>
        <Header
          as="h1"
          id="shadow"
          style={{ fontSize: "3rem", marginBottom: "3rem" }}
        >
          Hemen başla
        </Header>
        <Grid columns={5} divided>
          <Grid.Row>
            <Grid.Column>
              <div style={{ minHeight: "200px" }}>
                <Image src="https://i.pinimg.com/736x/ec/fb/9f/ecfb9ffd184bceec03b3c19161eee7fd.jpg" />
              </div>
              <p id="shadow" style={{ fontSize: "2rem" }}>
                Kayıt ol <Icon disabled name="arrow right" />
              </p>
            </Grid.Column>
            <Grid.Column>
              <div style={{ minHeight: "200px" }}>
                <Image src="https://media.istockphoto.com/vectors/online-resume-job-searching-concept-vector-design-graphic-flat-vector-id1157772221?k=20&m=1157772221&s=612x612&w=0&h=rtrMPvW0_DJhQDF8jX9sNzGig9BrlAB31zIfwx1eFCw=" />
              </div>
              <p id="shadow" style={{ fontSize: "2rem" }}>
                Özgeçmişini oluştur <Icon disabled name="arrow right" />
              </p>
            </Grid.Column>
            <Grid.Column>
              <div style={{ minHeight: "200px" }}>
                <Image src="https://cdni.iconscout.com/illustration/premium/thumb/job-search-4268354-3560997.png" />
              </div>
              <p id="shadow" style={{ fontSize: "2rem" }}>
                Aradağın işi bul <Icon disabled name="arrow right" />
              </p>
            </Grid.Column>
            <Grid.Column>
              <div style={{ minHeight: "200px" }}>
                <Image src="https://thumbs.dreamstime.com/b/man-working-home-office-vector-male-character-using-computer-smartphone-work-businessman-student-pc-194354947.jpg" />
              </div>
              <p id="shadow" style={{ fontSize: "2rem" }}>
                Başvur <Icon disabled name="arrow right" />
              </p>
            </Grid.Column>
            <Grid.Column>
              <div style={{ minHeight: "200px" }}>
                <Image src="https://thumbs.dreamstime.com/b/business-team-achievements-victory-win-concept-characters-people-holds-cup-celebrates-success-136242348.jpg" />
              </div>
              <p id="shadow" style={{ fontSize: "2rem" }}>
                Başardın <Icon disabled name="arrow right" />
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
      <div className="propSection" style={{ marginTop: "8rem" }}>
        <Header as="h1" id="shadow" style={{ fontSize: "3rem" }}>
          Özellikler
        </Header>
        <Grid>
          <Grid.Row>
            <Grid.Column width={6}>
              <Image
                fluid
                circular
                src="https://cdn1.vectorstock.com/i/1000x1000/91/00/job-hiring-and-search-concept-headhunting-we-vector-36279100.jpg"
              />
            </Grid.Column>
            <Grid.Column width={10}>
              <Container fluid style={{ marginTop: "8rem" }}>
                <p id="propmt">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa strong. Cum
                  sociis natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus. Donec quam felis, ultricies nec,
                  pellentesque eu, pretium quis, sem. Nulla consequat massa quis
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa strong. Cum
                  sociis natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus. Donec quam felis, ultricies nec,
                  pellentesque eu, pretium quis, sem. Nulla consequat massa quis
                </p>
              </Container>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={10}>
              <Container fluid style={{ marginTop: "8rem" }}>
                <p id="propmt">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa strong. Cum
                  sociis natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus. Donec quam felis, ultricies nec,
                  pellentesque eu, pretium quis, sem. Nulla consequat massa quis
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa strong. Cum
                  sociis natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus. Donec quam felis, ultricies nec,
                  pellentesque eu, pretium quis, sem. Nulla consequat massa quis
                </p>
              </Container>
            </Grid.Column>
            <Grid.Column width={6}>
              <Image
                fluid
                circular
                src="https://www.teceze.com/sites/default/files/2020-08/carriere.png"
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={6}>
              <Image
                fluid
                circular
                src="https://www.uidownload.com/files/762/118/373/job-search-illustration.jpg"
              />
            </Grid.Column>
            <Grid.Column width={10}>
              <Container fluid style={{ marginTop: "8rem" }}>
                <p id="propmt">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa strong. Cum
                  sociis natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus. Donec quam felis, ultricies nec,
                  pellentesque eu, pretium quis, sem. Nulla consequat massa quis
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa strong. Cum
                  sociis natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus. Donec quam felis, ultricies nec,
                  pellentesque eu, pretium quis, sem. Nulla consequat massa quis
                </p>
              </Container>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </Container>
  );
}
