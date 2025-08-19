import { Component } from "react";
import content from "./InfoList";
import "./InfoCards.css";

class InfoCards extends Component {
  render() {
    return (
      <div className="infocards" id="events">
        <div className="divider horizontal" id="title">
          Our Events
        </div>
        <br />

        <div id="cards">
          {content.map(({ id, title, content, button }) => (
            <div key={id} className="Card rounded-card">
              <div className="card-content">
                <div className="card-header">{title}</div>
                <div className="card-description">
                  {content.map((element) => element)}
                </div>
                <br />
                {button === "Join our Sun Devil Central" ? (
                  <a 
                    href="https://sundevilcentral.eoss.asu.edu/feeds?type=club&type_id=35661&tab=about" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="card-button"
                    style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}
                  >
                    {button}
                  </a>
                ) : (
                  <button className="card-button">{button}</button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default InfoCards;
