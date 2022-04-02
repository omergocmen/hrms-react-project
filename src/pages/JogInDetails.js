import { Formik, Form } from "formik";
import React from "react";
import * as Yup from "yup";
import { Button, Image, Segment } from "semantic-ui-react";
import KodlamaIoTextInput from "../utilities/customFormControls/KodlamaIoTextInput";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import AuthService from '../services/authService'

export default function LogInDetails() {
  const navigate = useNavigate();
  const authService=new AuthService();
  const initialValues = { userName: "", password: "" };
  const schema = Yup.object({
    userName: Yup.string().required("Kullanıcı Adı Girmek Zorunludur"),
    password: Yup.string().required("Şifre Girmek Zorunludur"),
  });

  return (
    <Segment raised piled 
      style={{
        minWidth: "350px",
        width: "400px",
        margin: "6rem auto",
        padding: "2rem"
      }}
    >
      <h1 id="playfair">GİRİŞ YAP</h1>
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
          const user=values;
             authService.login(user).then(response=>{
                localStorage.setItem("token",response.data);
                toast.success("Hoşgeldiniz");
                navigate("/home");
             }).catch(err=>{
                 toast.error("Kullanıcı adı veya şifre hatalıdır")
             });
        }}
      >
        <Form className="ui form">
          <KodlamaIoTextInput name="userName" type="email" placeholder="E-posta" />
          <KodlamaIoTextInput name="password" placeholder="Şifre" />
          <Button color="violet" type="submit">
            Giriş Yap
          </Button>
        </Form>
      </Formik>
    </Segment>
  );
}
