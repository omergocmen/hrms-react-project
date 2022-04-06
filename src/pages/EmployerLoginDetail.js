import React from "react";
import AuthService from "../services/authService";
import { Formik, Form } from "formik";
import KodlamaIoTextInput from "../utilities/customFormControls/KodlamaIoTextInput";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { useNavigate } from "react-router";
import { Button, Image, Segment } from "semantic-ui-react";
import EmployerService from '../services/employerService'
import { signIn } from "../store/actions/authActions";
import { useDispatch } from "react-redux";

export default function EmployerLoginDetail() {
  
  const employerService=new EmployerService();
  const dispatch=useDispatch();
  const navigate = useNavigate();
  const authService = new AuthService();
  const initialValues = { userName: "", password: "" };
  const schema = Yup.object({
    userName: Yup.string().required("Email Girmek Zorunludur"),
    password: Yup.string().required("Şifre Girmek Zorunludur"),
  });


  const IsEmployer=()=>{
    employerService.getEmployerByEmail().then(result=>{
      console.log(result.data.data);
      if (result.data.data) {
        dispatch(signIn({auth:true,clientType:"employer"}))
        navigate("/profil");
        window.location.reload();
      } else {
        localStorage.clear();
        toast.error("Kullanıcı adı ve/veya Şifre Hatalıdır");
      }
    })
  }


  return (
    <Segment basic piled>
      <Image
        avatar
        spaced
        style={{ margin: "3rem 0" }}
        src={"https://cdn.dribbble.com/users/286960/screenshots/2938947/companies-illustration.jpg"}
        size="medium"
      />
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values) => {
          const user = values;
          user.clientType="employer"
          authService
            .login(user)
            .then((response) => {
              localStorage.setItem("token", response.data);
              IsEmployer(response.data);
            })
            .catch((err) => {
              toast.error("Email adı ve/veya şifre hatalıdır");
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
