import React from "react";
import { Image, Button } from "semantic-ui-react";
import { Formik, Form } from "formik";
import KodlamaIoTextInput from "../utilities/customFormControls/KodlamaIoTextInput";
import EmployerService from "../services/employerService";
import * as Yup from "yup";
import { toast } from "react-toastify";

export default function EmployersSingInDetails() {
  const employerService = new EmployerService();
  const initialValues = {
    companyName: "",
    webAddress: "",
    password: "",
    repeatPassword: "",
    phoneNumber: "",
  };
  const schema = Yup.object({
    companyName: Yup.string().required("Kurum Adı Girmek Zorunludur"),
    webAddress: Yup.string().required("Web Adresi Girmek Zorunludur"),
    password: Yup.string().required("Şifre Girmek Zorunludur"),
    repeatPassword: Yup.string().required("Şifre Tekrarı Girmek Zorunludur"),
    email: Yup.string().required("Email Girmek Zorunludur"),
    phoneNumber: Yup.string().required("Telefon Numarası Girmek Zorunludur"),
  });
  return (
    <div>
      <Image
        avatar
        spaced
        style={{ marginBottom: "2rem" }}
        src={
          "https://cdn.dribbble.com/users/286960/screenshots/2938947/companies-illustration.jpg"
        }
        size="large"
        centered
      />
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values) => {
          const employer={
            companyName:values.companyName,
            webAddress:values.webAddress,
            phoneNumber:values.phoneNumber,
            password:values.password,
            email:values.email
          }
          employerService.addEmployers(employer).then(result=>console.log(result.data))
        }}
      >
        <Form className="ui form">
          <KodlamaIoTextInput name="companyName" placeholder="Kurum Adı" />
          <KodlamaIoTextInput name="webAddress" placeholder="Web Adres" />
          <KodlamaIoTextInput name="password" placeholder="Şifre" />
          <KodlamaIoTextInput
            name="repeatPassword"
            placeholder="Şifre(tekrar)"
          />
          <KodlamaIoTextInput name="email" placeholder="Email" />
          <KodlamaIoTextInput
            name="phoneNumber"
            placeholder="Telefon Numarası"
          />
          <Button color="violet" type="submit">
            Kayıt Ol
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
