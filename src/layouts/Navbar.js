import React from "react";
import {
  Input,
  Menu,
  Button,
  Icon,
  Checkbox,
  Container,
  Header,
} from "semantic-ui-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const signedOut = () => {
    localStorage.clear();
  };
  const [activeItem, setActiveItem] = useState("");
  const handleItemClick = (name) => {
    setActiveItem(name);
  };

  return (
    <div>
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
            name="İlan Oluştur"
            active={activeItem === "İlan Oluştur"}
            onClick={() => handleItemClick("İlan Oluştur")}
            as={NavLink}
            to="/createJob"
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
          <Menu.Menu position="right">
            <Menu.Item>
              <Button onClick={() => signedOut()} inverted color="violet">
                Çıkış
              </Button>
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
