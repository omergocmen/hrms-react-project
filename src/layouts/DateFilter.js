import React, { useState } from "react";
import { Radio, Form, Segment, List } from "semantic-ui-react";

export default function DateFilter() {
  const [value, setValue] = useState("");
  const handleChange = (event, { value }) => setValue(value);

  return (
    <List ordered >
      <Segment>İlan Tarihi</Segment>
      <Segment>
        <Radio
          name="radioGroup"
          value="Son 25 gün"
          checked={value === "Son 25 gün"}
          label="Son 25 gün"
          onChange={handleChange}
        />
      </Segment>
      <Segment>
        <Radio
          name="radioGroup"
          value="Son 20 gün"
          checked={value === "Son 20 gün"}
          label="Son 20 gün"
          onChange={handleChange}
        />
      </Segment>
      <Segment>
        <Radio
          name="radioGroup"
          value="Son 15 gün"
          checked={value === "Son 15 gün"}
          label="Son 15 gün"
          onChange={handleChange}
        />
      </Segment>
      <Segment>
        <Radio
          name="radioGroup"
          value="this"
          checked={value === "this"}
          label="Son 10 gün"
          onChange={handleChange}
        />
      </Segment>
    </List>
  );
}
