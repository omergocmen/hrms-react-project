import React, { useState } from "react";
import AuthService from "../services/authService";
import { Formik, Form } from "formik";
import KodlamaIoTextInput from "../utilities/customFormControls/KodlamaIoTextInput";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { useNavigate } from "react-router";
import { Button, Image, Segment } from "semantic-ui-react";
import CandidateService from "../services/candidateService";
import { useDispatch, useSelector } from "react-redux";
import {  signIn } from '../store/actions/authActions';

export default function CandidateLoginDetail() {
  const dispatch=new useDispatch();

  const candidateService = new CandidateService();
  const navigate = useNavigate();
  const authService = new AuthService();
  const initialValues = { userName: "", password: "" };
  const schema = Yup.object({
    userName: Yup.string().required("Kullanıcı Adı Girmek Zorunludur"),
    password: Yup.string().required("Şifre Girmek Zorunludur"),
  });

  const IsCandidate = (token) => {
    candidateService.getCandidateByEmail().then((result) => {
      if (result.data.data) {
        dispatch(signIn({auth:true,clientType:"candidate"}))
        navigate("/profil");
        window.location.reload();
      } else {
        localStorage.clear();
        toast.error("Kullanıcı adı ve/veya Şifre Hatalıdır");
      }
    });
  };

  return (
    <Segment basic piled>
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
          const user = values;
          user.clientType="candidate"
          authService
            .login(user)
            .then((response) => {
              localStorage.setItem("token", response.data);
              IsCandidate();
            })
            .catch((err) => {
              toast.error("Kullanıcı adı veya şifre hatalıdır");
            });
        }}
      >
        <Form className="ui form">
          <KodlamaIoTextInput
            name="userName"
            type="email"
            placeholder="E-posta"
          />
          <KodlamaIoTextInput name="password" placeholder="Şifre" />
          <Button color="violet" type="submit">
            Giriş Yap
          </Button>
        </Form>
      </Formik>
    </Segment>
  );
}
