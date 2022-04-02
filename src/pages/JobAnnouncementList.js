import React, { useEffect, useState } from "react";
import JobAnnouncmentService from "../services/jobAnnouncementService";
import {
  Grid,
  Card,
  Image,
  Button,
  Container,
  Input,
  List,
} from "semantic-ui-react";
import FilterMenu from "../layouts/FilterMenu";
import JobAnnouncmentSlide from "../layouts/JobAnnouncmentSlide";

export default function JobAnnouncementList() {
  const [jobAnnouncements, setJobAnnouncments] = useState([]);
  useEffect(() => {
    const jobAnnouncementService = new JobAnnouncmentService();
    jobAnnouncementService.getJobAnnouncments().then((result) => {
      setJobAnnouncments(result.data.data);
    });
  }, []);

  const getCities = (cities) => {
    return (
      <List bulleted horizontal>
        {cities.map((city, index) => (
          <List.Item key={index} as="a">
            {city.cityName}
          </List.Item>
        ))}
      </List>
    );
  };

  return (
    <div>
      <JobAnnouncmentSlide />
      <Container>
        <br />
        <div style={{ fontSize: "1.2rem", maxWidth: "300px" }}>
          <Input fluid icon="search" placeholder="Aradığın iş..." />
        </div>
        <br />
        <Grid columns="equal">
          <Grid.Column width={12}>
            <Card.Group itemsPerRow={2}>
              {jobAnnouncements.map((jobAnnouncement, index) => (
                <Card key={index} centered color="violet" size="tiny">
                  <Card.Content>
                    <Image
                    style={{margin:"2rem 0"}}
                      circular
                      size="small"
                      src="https://1.semantic-ui.com/images/avatar/large/stevie.jpg"
                    />
                    <Card.Header>{jobAnnouncement.description}</Card.Header>
                    <Card.Description>
                      {getCities(jobAnnouncement.cities)}
                      <p>
                        <strong>
                          Son başvuru tarihi  {jobAnnouncement.applicationDeadline}
                        </strong>
                      </p>
                      <p>
                        <strong>
                          {jobAnnouncement.employer.companyName.toUpperCase()}
                        </strong>
                      </p>
                    </Card.Description>
                  </Card.Content>
                  <Card.Content></Card.Content>
                  <Card.Content extra>
                    <div className="ui two buttons">
                      <Button inverted color="violet">
                        İlana git
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
    </div>
  );
}
