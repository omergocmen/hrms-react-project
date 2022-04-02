import React, { useState } from "react";
import { Button, Image, Segment ,Menu} from "semantic-ui-react";
import { useNavigate } from "react-router";
import CandidateSingInDetails from "./CandidateSingInDetails";
import EmployersSingInDetails from "./EmployersSingInDetails";


export default function SingInDetails() {
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
        <h1 id="playfair">KAYIT OL</h1>
        {
          activeItem==='Aday'?<CandidateSingInDetails/>:<EmployersSingInDetails/>
        }
    </Segment>
  );
}
