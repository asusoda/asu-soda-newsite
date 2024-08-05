import React, { Component } from "react";
import { Card, Divider, Popup, Image } from "semantic-ui-react";
import { MemberCardsProps, Contacts } from "./Contacts";
import contactsData from "./TeamList.json";
import "./TeamCards.css";

const contacts: Contacts = contactsData as Contacts;
class MemberCards extends Component<MemberCardsProps> {
  constructor(props: MemberCardsProps) {
    super(props);
    this.onGClick = this.onGClick.bind(this);
    this.onIClick = this.onIClick.bind(this);
  }
  onGClick() {
    window.location.href = "mailto:asu@thesoda.io";
  }
  onIClick() {
    window.location.href = "mailto:industry.asu@thesoda.io";
  }

  render() {
    const teams = contacts.teams;
    const advisors = contacts.advisors;

    return (
      <div className="team" id="team">
        <Divider horizontal id="title">
          Team
        </Divider>
        <br />
        <div id="content" className="">
          SoDA is here to help you. Please feel free to reach out to any of us,
          we want to help and would be happy to answer any questions you have!
        </div>

        {Object.keys(teams).map((team, i) => (
          <React.Fragment key={i}>
            <Divider horizontal className="subteam-divider">
              {team}
            </Divider>
            <div id="cards">
              {teams[team].map((member, j) => (
                <Card key={j} className="Card rounded-card">
                  <Card.Content className="card-content">
                    <div className="card-image-wrapper">
                      <Image
                        className="card-image"
                        src={member.image}
                        size="tiny"
                      />
                    </div>

                    <div className="card-text">
                      <Card.Header className="card-header">
                        {member.name}
                      </Card.Header>
                      <Card.Meta className="card-meta">
                        {member.role}
                        <br />
                        <Popup
                          key={member.name}
                          position="bottom center"
                          inverted
                          trigger={
                            <a
                              href={"mailto:" + member.email}
                              className="card-email"
                            >
                              {member.email}
                            </a>
                          }
                          //header='Open Mail Client'
                          //content={member.email}
                        />
                      </Card.Meta>
                    </div>
                  </Card.Content>
                </Card>
              ))}
            </div>
          </React.Fragment>
        ))}

        <Divider horizontal className="subteam-divider">
          Advisors
        </Divider>
        <div id="cards">
          {advisors.map((advisor, j) => (
            <Card key={j} className="Card rounded-card">
              <Card.Content className="card-content">
                <div className="card-image-wrapper">
                  <Image
                    className="card-image"
                    src={advisor.image}
                    size="tiny"
                  />
                </div>

                <div className="card-text">
                  <Card.Header className="card-header">
                    {advisor.name}
                  </Card.Header>
                  <Card.Meta className="card-meta">
                    {advisor.role}
                    <br />
                    <a href={"mailto:" + advisor.email} className="card-email">
                      {advisor.email}
                    </a>
                  </Card.Meta>
                </div>
              </Card.Content>
            </Card>
          ))}
        </div>
      </div>
    );
  }
}

export default MemberCards;
