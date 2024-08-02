import { Component } from "react";
import content from "./InfoList";
import { Card, Button, Divider } from "semantic-ui-react";
import "./InfoCards.css";

class InfoCards extends Component {
  render() {
    return (
      <div className="infocards" id="info">
        <Divider horizontal id="title">
          Info
        </Divider>
        <br />

        <div id="cards">
          {content.map(({ id, title, content, button }) => (
            <Card key={id} className="Card rounded-card">
              <Card.Content className="card-content">
                <Card.Header className="card-header">{title}</Card.Header>
                <Card.Description className="card-description">
                  {content.map((element) => element)}
                </Card.Description>
                <br />
                <Button className="card-button">{button}</Button>
              </Card.Content>
            </Card>
          ))}
        </div>
      </div>
    );
  }
}

export default InfoCards;
