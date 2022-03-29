import React from "react";
import Navbar from "./Navbar";
import JobAnnouncementDetails from "../pages/JobAnnouncementDetails";
import JobAnnouncementList from "../pages/JobAnnouncementList";
import JobAnnouncementSlide from "../layouts/JobAnnouncmentSlide";
import { Container } from "semantic-ui-react";
import Home from "../pages/Home";

export default function Dashboard() {
  return (
    <div>
     
     <Navbar />
     <Home/>
    
    </div>
  );
}
/*
  <JobAnnouncementSlide/>
        <hr/>
      <JobAnnouncementList />*/ 