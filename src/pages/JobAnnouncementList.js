import React, { useEffect, useState } from "react";
import JobAnnouncmentService from "../services/jobAnnouncementService";
import {
  Grid,
  Segment,
  Card,
  Image,
  Button,
  Container,
} from "semantic-ui-react";
import FilterMenu from "../layouts/FilterMenu";

export default function JobAnnouncementList() {
  const [jobAnnouncements, setJobAnnouncments] = useState([]);
  useEffect(() => {
    const jobAnnouncementService = new JobAnnouncmentService();
    jobAnnouncementService.getJobAnnouncments().then((result) => {
      setJobAnnouncments(result.data.data);
    });
  }, []);

  return (
     <Container>
        <Grid columns="equal">
        <Grid.Column width={12}>
          <Card.Group itemsPerRow={2}>
            {jobAnnouncements.map((jobAnnouncement, index) => (
              <Card key={index} centered color="violet" size="tiny">
                <Card.Content>
                  <Image
                    circular
                    size="small"
                    src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
                  />
                  <Card.Header>Backend yazılım geliştirici</Card.Header>
                  <Card.Description>
                    Steve wants to add you to the grnts to add you to the group
                    Steve wants to
                    <p>
                      <strong>2 Yıl tecrübe</strong>
                    </p>
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
            ))}
          </Card.Group>
        </Grid.Column>
        <Grid.Column>
          <FilterMenu />
        </Grid.Column>
      </Grid>
     </Container>
  );
}
