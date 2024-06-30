import { Component } from "react";
import content from "./InfoList";
import { Card, Button, Divider } from "semantic-ui-react";
import "./InfoCards.css";

class InfoCards extends Component {
  render() {
    return (
      <div className="infocards">
        <Divider horizontal id="title">
          Info
        </Divider>
        <br />

        <div id="cards">
          {content.map(({ title, content, button }) => (
            <Card key={title} className="Card rounded-card">
              <Card.Content className="card-content">
                <Card.Header className="card-header">{title}</Card.Header>
                <Card.Description className="card-description">
                  {content}
                </Card.Description>
                <br />
                <Button className="card-button">{button} </Button>
              </Card.Content>
            </Card>
          ))}
        </div>
      </div>
    );
  }
}

export default InfoCards;
