import React from 'react'
import {
    Menu,
    Icon,
    Container,
    Header,
  } from "semantic-ui-react";
  import { Link, NavLink } from "react-router-dom";
  import { useState } from "react";

  import AuthButtons from "./AuthButtons";


export default function CandidateNavbar() {
    const [activeItem, setActiveItem] = useState("");
    const handleItemClick = (name) => {
      setActiveItem(name);
    };
  return (
    <Menu attached inverted color="black">
        <Container>
          <Menu.Item onClick={() => handleItemClick("")} as={Link} to="/">
            <Header style={{ color: "#8A73FF" }} as="h2">
              <Icon name="map outline" />
              <Header.Content>Career Map</Header.Content>
            </Header>
          </Menu.Item>
          <Menu.Item
            style={{ color: "#8A73FF" }}
            name="İlanlar"
            active={activeItem === "İlanlar"}
            onClick={() => handleItemClick("İlanlar")}
            as={NavLink}
            to="/jobs"
          />
          <Menu.Item
            style={{ color: "#8A73FF" }}
            name="Hakkımızda"
            active={activeItem === "Hakkımızda"}
            onClick={() => handleItemClick("Hakkımızda")}
            as={NavLink}
            to="/about"
          />
          <Menu.Item
            style={{ color: "#8A73FF" }}
            name="İletişim"
            active={activeItem === "İletişim"}
            onClick={() => handleItemClick("İletişim")}
            as={NavLink}
            to="/contact"
          />
          <AuthButtons/>
        </Container>
      </Menu>
  )
}

