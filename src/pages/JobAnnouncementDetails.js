import React from "react";
import { Card, Image, Button } from "semantic-ui-react";

export default function jobAnnouncementDetails() {
  return (
    <div>
      <Card.Group>
        <Card>
          <Card.Content>
            <Image 
              circular
              size="small"
              src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
            />
            <Card.Header>Backend yazılım geliştirici</Card.Header>
            <Card.Description >
              Steve wants to add you to the grnts to add you to the
              group Steve wants to {" "}
              <p><strong>2 Yıl tecrübe</strong></p>ss
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button inverted color="violet">
                Başvur
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  );
}
