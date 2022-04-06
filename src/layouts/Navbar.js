import React from "react";
import { useSelector } from "react-redux";
import UserPublicNavbar from "./UserPublicNavbar";
import CandidateNavbar from "./CandidateNavbar";
import EmployerNavbar from "./EmployerNavbar";



export default function Navbar() {

  const clientType=useSelector(state=>state.auth.authIn.clientType);

  if(clientType==="candidate"){
    return (<div>
      <CandidateNavbar/>
    </div>)
  }
  else if(clientType==="employer"){
    return (<div>
      <EmployerNavbar/>
    </div>)
  }
  else if(!clientType){
    return (<div>
      <UserPublicNavbar/>
    </div>)
  }

}
