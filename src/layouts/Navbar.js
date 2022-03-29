import React from "react";
import {
  Input,
  Menu,
  Button,
  Icon,
  Checkbox,
  Container,
} from "semantic-ui-react";
import { useState } from "react";

export default function Navbar() {
  const [activeItem, setActiveItem] = useState("");
  const handleItemClick = (name) => {
    setActiveItem(name);
  };

  return (
    <div>
      <Menu basic attached inverted color="black">
        <Container>
          <Menu.Item
            style={{ color: "#8A73FF" }}
            name="Ana Sayfa"
            active={activeItem === "Ana Sayfa"}
            onClick={() => handleItemClick("Ana Sayfa")}
          />
          <Menu.Item
            style={{ color: "#8A73FF" }}
            name="Hakkımızda"
            active={activeItem === "Hakkımızda"}
            onClick={() => handleItemClick("Hakkımızda")}
          />
          <Menu.Item
            style={{ color: "#8A73FF" }}
            name="İletişim"
            active={activeItem === "İletişim"}
            onClick={() => handleItemClick("İletişim")}
          />
          <Menu.Menu position="right">
            <Menu.Item>
              <Input icon="search" placeholder="Search..." />
            </Menu.Item>
            <Menu.Item>
              <Button inverted color="violet">
                Çıkış
              </Button>
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
