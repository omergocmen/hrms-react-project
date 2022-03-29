import React, { useEffect, useState } from "react";
import { Button, Checkbox, Image, List, Segment } from "semantic-ui-react";
import FilterService from "../services/filterService";

export default function CityFilter() {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const filterService = new FilterService();
    filterService.getCities().then((result) => setCities(result.data));
  }, []);

  return (
    <List animated ordered verticalAlign="middle" style={{overflow: 'auto', maxHeight: 350 }}>
        <List.Item>
        <Segment>Şehir</Segment>
        </List.Item>
      {cities.map((city, index) => (
        <List.Item key={index}>
          <Segment >
            <List.Content floated="right">
              <Checkbox/>
            </List.Content>
            <List.Content style={{textAlign:"start"}}>{city.cityName}</List.Content>
          </Segment>
        </List.Item>
      ))}
    </List>
  );
}
