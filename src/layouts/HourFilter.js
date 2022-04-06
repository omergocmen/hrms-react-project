import React, { useEffect, useState } from "react";
import { Menu, List, Segment, Checkbox } from "semantic-ui-react";

export default function HourFilter() {
  const [activeItems, setActiveItems] = useState([]);

  const handleItemClick = (name) => {
    activeItems.includes(name)
      ? removeElement(name)
      : setActiveItems([...activeItems, name]);
  };

  const removeElement = (name) => {
    const filteredArray = activeItems.filter((item) => item !== name);
    setActiveItems(filteredArray);
  };

  return (
    <List ordered animated verticalAlign="middle">
      <List.Item>
        <Segment>Çalışma Aralığı</Segment>
      </List.Item>
      <List.Item>
        <Segment>
          <List.Content floated="right">
            <Checkbox />
          </List.Content>
          <List.Content style={{ textAlign: "start" }}>0-6 Saat</List.Content>
        </Segment>
      </List.Item>
      <List.Item>
        <Segment>
          <List.Content floated="right">
            <Checkbox />
          </List.Content>
          <List.Content style={{ textAlign: "start" }}>0-8 Saat</List.Content>
        </Segment>
      </List.Item>
      <List.Item>
        <Segment>
          <List.Content floated="right">
            <Checkbox />
          </List.Content>
          <List.Content style={{ textAlign: "start" }}>0-12 Saat</List.Content>
        </Segment>
      </List.Item>
      <List.Item>
        <Segment>
          <List.Content floated="right">
            <Checkbox />
          </List.Content>
          <List.Content style={{ textAlign: "start" }}>12+ Saat</List.Content>
        </Segment>
      </List.Item>
    </List>
  );
}
