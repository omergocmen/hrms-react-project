import React from "react";
import { Image, Button } from "semantic-ui-react";
import { Formik, Form } from "formik";
import KodlamaIoTextInput from "../utilities/customFormControls/KodlamaIoTextInput";
import CandidateService from '../services/candidateService.js'
import * as Yup from "yup";
import { toast } from "react-toastify";

export default function CandidateSingInDetails() {
  const candidateService = new CandidateService();
  const initialValues = {
    firstName: "",
    lastName: "",
    password: "",
    repeatPassword: "",
    email: "",
    identityNumber: "",
  };
  const schema = Yup.object({
    firstName: Yup.string().required("Ad Girmek Zorunludur"),
    lastName: Yup.string().required("Soyad Girmek Zorunludur"),
    password: Yup.string().required("Şifre Girmek Zorunludur"),
    repeatPassword: Yup.string().required("Şifre Tekrarı Girmek Zorunludur"),
    email: Yup.string().required("Email Girmek Zorunludur"),
    birtOfYear: Yup.number().required("Doğum Yılı Girmek Zorunludur"),
    identityNumber: Yup.string().required("Kimlik Numarası Girmek Zorunludur"),
  });
  return (
    <div>
      <Image
        avatar
        spaced
        style={{ marginBottom: "2rem" }}
        src={"https://react.semantic-ui.com/images/avatar/large/stevie.jpg"}
        size="medium"
      />
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values) => {
          const candidate = {
            birtOfYear: values.birtOfYear,
            email: values.email,
            firstName: values.firstName,
            lastName: values.lastName,
            identityNumber: values.identityNumber,
            password: values.password,
          };
          candidateService
            .addCandidates(candidate)
            .then((result) => {
              toast.info(result.data.message);
            })
            .catch((err) => {
              toast.error("Kayıt Olunamadı");
            });
        }}
      >
        <Form className="ui form">
          <KodlamaIoTextInput name="firstName" placeholder="Ad" />
          <KodlamaIoTextInput name="lastName" placeholder="Soyad" />
          <KodlamaIoTextInput name="password" placeholder="Şifre" />
          <KodlamaIoTextInput
            name="repeatPassword"
            placeholder="Şifre(tekrar)"
          />
          <KodlamaIoTextInput name="email" placeholder="Email" />
          <KodlamaIoTextInput name="birtOfYear" placeholder="Doğum Yılı" />
          <KodlamaIoTextInput
            name="identityNumber"
            placeholder="Kimlik Numarası"
          />
          <Button color="violet" type="submit">
            Kayıt Ol
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
