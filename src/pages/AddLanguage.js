import React from "react";
import { Segment, Image, Button } from "semantic-ui-react";
import KodlamaIoTextInput from "../utilities/customFormControls/KodlamaIoTextInput";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import LanguageService from "../services/languageService";

export default function AddLanguage() {
  const initialValues = { language: "" };
  const languageService = new LanguageService();
  const schema = Yup.object({
    language: Yup.string().required("Dil Giriniz"),
  });
  return (
    <Segment
      raised
      piled
      style={{
        minWidth: "350px",
        width: "400px",
        margin: "6rem auto",
        padding: "2rem",
      }}
    >
      <h1 id="playfair">DİL EKLE</h1>
      <Image
        avatar
        spaced
        style={{ marginBottom: "2rem" }}
        src={"https://react.semantic-ui.com/images/avatar/large/nan.jpg"}
        size="medium"
      />
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values) => {
          const language={
            languageName:values.language
          }
          languageService.add(language).then(result=>console.log(result.data));
        }}
      >
        <Form className="ui form">
          <KodlamaIoTextInput name="language" placeholder="Dil Giriniz" />
          <Button color="violet" type="submit">
            Ekle
          </Button>
        </Form>
      </Formik>
    </Segment>
  );
}
