import React, { useEffect, useState } from "react";
import { Checkbox, List, MenuItem, Segment } from "semantic-ui-react";
import FilterService from "../services/filterService";

export default function JobFilter() {
    const [activeItems, setActiveItems] = useState([]);
    const [jobPositons, setJobPositions] = useState([])

    useEffect(() => {
    const filterService=new FilterService();
    filterService.getFilterJob().then(result=>setJobPositions(result.data.data));
    }, [])
  

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
    <List animated ordered verticalAlign="middle" style={{overflow: 'auto', maxHeight: 350 }}>
    <List.Item>
    <Segment>Meslek</Segment>
    </List.Item>
  {jobPositons.map((jobPosition, index) => (
    <List.Item key={index}>
      <Segment onClick={()=>handleItemClick(jobPosition.jobExplanation)}>
        <List.Content floated="right">
        <Checkbox/>
        </List.Content>
        <List.Content  style={{textAlign:"start"}}>{jobPosition.jobExplanation}</List.Content>
      </Segment>
    </List.Item>
  ))}
</List>
  );
}
