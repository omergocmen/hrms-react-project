import React, { useState } from "react";
import { Checkbox, Menu, MenuItem } from "semantic-ui-react";
import CityFilter from "./CityFilter";
import DateFilter from "./DateFilter";
import HourFilter from "./HourFilter";
import JobFilter from "./JobFilter";

export default function FilterMenu() {
 
  return (
    <div>
        <JobFilter/>
        <br/>
        <CityFilter/>
        <br/>
        <HourFilter/>
        <br/>
        <DateFilter/>
    </div>
  );
}
