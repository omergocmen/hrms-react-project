import React from "react";
import {
  Container,
  Segment,
  Grid,
  Select,
  Header,
  Input,
  TextArea,
  Button,
} from "semantic-ui-react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

export default function CreateJob() {
  const countryOptions = [
    { key: "af", value: "af", text: "Afghanistan" },
    { key: "ax", value: "ax", text: "Aland Islands" },
    { key: "al", value: "al", text: "Albania" },
    { key: "dz", value: "dz", text: "Algeria" },
    { key: "as", value: "as", text: "American Samoa" },
    { key: "ad", value: "ad", text: "Andorra" },
    { key: "ao", value: "ao", text: "Angola" },
    { key: "ai", value: "ai", text: "Anguilla" },
    { key: "ag", value: "ag", text: "Antigua" },
    { key: "ar", value: "ar", text: "Argentina" },
    { key: "am", value: "am", text: "Armenia" },
    { key: "aw", value: "aw", text: "Aruba" },
    { key: "au", value: "au", text: "Australia" },
    { key: "at", value: "at", text: "Austria" },
    { key: "az", value: "az", text: "Azerbaijan" },
    { key: "bs", value: "bs", text: "Bahamas" },
    { key: "bh", value: "bh", text: "Bahrain" },
    { key: "bd", value: "bd", text: "Bangladesh" },
    { key: "bb", value: "bb", text: "Barbados" },
    { key: "by", value: "by", text: "Belarus" },
    { key: "be", value: "be", text: "Belgium" },
    { key: "bz", value: "bz", text: "Belize" },
    { key: "bj", value: "bj", text: "Benin" },
  ];
  const schema = Yup.object({
    userName: Yup.string().required("Kullanıcı Adı Girmek Zorunludur"),
    password: Yup.string().required("Şifre Girmek Zorunludur"),
  });

  return (
    <Container style={{ marginTop: "6rem" }}>
      <Header id="playfair" style={{ fontSize: "35px", margin: "2rem" }}>
        İLAN OLUŞTUR
      </Header>
      <Formik
        validationSchema={schema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form>
          <Segment raised className="description" style={{ padding: "1rem" }}>
            <h1 id="playfair">Beklenen Özellikler</h1>
            <Grid columns="equal">
              <Grid.Column>
                <Select
                  name="position"
                  placeholder="Pozisyon"
                  style={{ margin: "1rem" }}
                  options={countryOptions}
                />
                <Select
                  name="department"
                  placeholder="Departman"
                  style={{ margin: "1rem" }}
                  options={countryOptions}
                />
                <Select
                  name="military"
                  placeholder="Askerlik Durumu"
                  style={{ margin: "1rem" }}
                  options={countryOptions}
                />
                <Select
                  name="shift"
                  placeholder="Çalışma Şekli"
                  style={{ margin: "1rem" }}
                  options={countryOptions}
                />
              </Grid.Column>
              <Grid.Column>
                <Input
                  name="experience"
                  icon="tags"
                  iconPosition="left"
                  style={{ margin: "1rem" }}
                  label={{ tag: true, content: "Geçmiş Tecrübe" }}
                  labelPosition="right"
                  placeholder="Tecrüce Giriniz"
                />
                <Input
                  name="drivingLicense"
                  icon="tags"
                  iconPosition="left"
                  style={{ margin: "1rem" }}
                  label={{ tag: true, content: "Ehliyet Durumu" }}
                  labelPosition="right"
                  placeholder="Ehliyet Durumu"
                />
              </Grid.Column>
            </Grid>
          </Segment>
          <Segment raised className="definition">
            <h1 id="playfair">İş Tanımı</h1>
            <TextArea
              name="definition"
              placeholder="İş tanımını yazınız"
              style={{ minHeight: 100, maxWidth: "90%", minWidth: "90%" }}
            />
          </Segment>
          <Segment raised className="quality">
            <h1 id="playfair">Genel Nitelikler</h1>
            <TextArea
              name="quality"
              placeholder="Genel niteliklerin tanımını yazınız"
              style={{ minHeight: 100, maxWidth: "90%", minWidth: "90%" }}
            />
          </Segment>
          <Segment raised className="criterion">
            <Grid columns="equal">
              <Grid.Column>
                <Select
                  name="education"
                  placeholder="Eğitim Seviyesi"
                  style={{ margin: "1rem" }}
                  options={countryOptions}
                />
              </Grid.Column>
              <Grid.Column>
                <Select
                  name="language"
                  placeholder="Yabancı Dil Beklentisi"
                  style={{ margin: "1rem" }}
                  options={countryOptions}
                />
              </Grid.Column>
              <Grid.Column>
                <Button style={{ margin: "1rem" }} color="violet" type="submit">
                  Oluştur
                </Button>
              </Grid.Column>
            </Grid>
          </Segment>
        </Form>
      </Formik>
    </Container>
  );
}
