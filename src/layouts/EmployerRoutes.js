import React from 'react'
import { Route, Routes } from 'react-router'
import Home from "../pages/Home";
import SingInDetails from "../pages/SignInDetails";
import LogInDetails from "../pages/JogInDetails";
import JobAnnouncementDetails from "../pages/JobAnnouncementDetails";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contact";
import AddLanguage from "../pages/AddLanguage";
import CreateJobAnnouncment from "../pages/CreateJobAnnouncment";
import EmployerDetail from "../pages/EmployerDetail";
import JobAnnouncementList from "../pages/JobAnnouncementList";
import Candidates from '../pages/Candidates';

export default function EmployerRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/jobs" element={<JobAnnouncementList />} />
      <Route exact path="/candidates" element={<Candidates />} />
      <Route exact path="/signIn" element={<SingInDetails />} />
      <Route exact path="/logIn" element={<LogInDetails />} />
      <Route exact path="/jobs/:id" element={<JobAnnouncementDetails />} />
      <Route exact path="/about" element={<AboutUs />} />
      <Route exact path="/contact" element={<Contact />} />
      <Route exact path="/language" element={<AddLanguage />} />
      <Route exact path="/createJob" element={<CreateJobAnnouncment />} />
      <Route exact path="/jobs/:id" element={<JobAnnouncementDetails />} />
      <Route exact path="/profil" element={<EmployerDetail/>} />
    </Routes>
  )
}
