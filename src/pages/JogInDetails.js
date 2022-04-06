
import React, { useState } from "react";
import { Button, Image, Menu, Segment } from "semantic-ui-react";
import { useNavigate } from "react-router";
import EmployerLoginDetail from "./EmployerLoginDetail";
import CandidateLoginDetail from "./CandidateLoginDetail";


export default function LogInDetails() {

  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState("Aday")

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
      <Menu color="violet" attached='top' tabular>
          <Menu.Item 
            name='Aday'
            active={activeItem === 'Aday'}
            onClick={()=>{setActiveItem("Aday")}}
          />
          <Menu.Item
            name='İşveren'
            active={activeItem === 'İşveren'}
            onClick={()=>{setActiveItem("İşveren")}}
          />
        </Menu>
        <h1 id="playfair">Giriş Yap</h1>
        {
          activeItem==='Aday'?<CandidateLoginDetail/>:<EmployerLoginDetail/>
        }
    </Segment>
  );
}
