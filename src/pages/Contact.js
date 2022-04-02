import React from "react";
import { Form, Checkbox, Button,Container, Segment } from "semantic-ui-react";

export default function Contact() {
  return (
    <div>
      <Container textAlign="left" style={{marginTop:"6rem"}}>
      <Segment raised style={{padding:"6rem"}}>
          <h1 id="playfair">İLETİŞİM</h1>
      <Form >
      <Form.TextArea label='İleti' placeholder='Bizimle iletişime geçin...' />
        <Form.Field>
          <label>E-posta</label>
          <input placeholder="E-posta" />
        </Form.Field>
        <Form.Field>
          <Checkbox label="I agree to the Terms and Conditions" />
        </Form.Field>
        <Button color="violet" type="submit">Gönder</Button>
      </Form>
      </Segment>
      </Container>
    </div>
  );
}
