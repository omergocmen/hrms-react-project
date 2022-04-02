import React, { useEffect, useState } from "react";
import { Card, Container, Header, Icon, Image } from "semantic-ui-react";
import CandidateService from "../services/candidateService";

export default function Candidates() {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    const candidateService = new CandidateService();
    candidateService
      .getCandidates()
      .then((result) => setCandidates(result.data));
  }, []);

  return (
    <Container>
      <br />
      <Header style={{fontSize:"2.5rem"}} id="libre" textAlign="center" as="h2">
        <Icon name="address book outline" />
        Adaylar
      </Header>
      <Card.Group itemsPerRow={3}>
        {candidates.map((candidate, index) => (
          <Card key={index}>
            <Image
              src="https://www.stmdrummoyne.catholic.edu.au/wp-content/uploads/sites/53/2018/10/person-1.png"
              wrapped
              ui={false}
            />
            <Card.Content>
              <Card.Header>
                {candidate.firstName} {candidate.lastName}
              </Card.Header>
              <Card.Meta>
                <span className="date">Joined in 2015</span>
              </Card.Meta>
              <Card.Description>{candidate.email}</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Icon name="user" />
              22 Friends
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </Container>
  );
}
