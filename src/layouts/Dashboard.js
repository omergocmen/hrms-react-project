import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import UserRoutes from "./UserRoutes";

export default function Dashboard() {
  return (
    <div>
      <Navbar/>
          <UserRoutes/>
      <Footer/>
    </div>
  );
}
