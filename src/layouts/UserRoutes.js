import React from "react";
import { useSelector } from "react-redux";
import CandidateRoutes from "./CandidateRoutes";
import EmployerRoutes from "./EmployerRoutes";
import PublicRoutes from "./PublicRoutes";
import decodeToken from '../utilities/jwtDecoder.js/jwtDecoder'

export default function UserRoutes() {
 const clientType=decodeToken().clientType;
  if (clientType === "candidate") {
    return <CandidateRoutes />;
  } else if (clientType === "employer") {
    return <EmployerRoutes />;
  } else {
    return <PublicRoutes />;
  }
}
