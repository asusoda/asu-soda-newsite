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
      <div className="team space-y-24 md:pt-[100px]" id="team">
        <h1 className="section-header-text">Our Team</h1>
        {/* <Divider horizontal id="title">
          Team
        </Divider>
        <br />
        <div id="content" className="">
          SoDA is here to help you. Please feel free to reach out to any of us,
          we want to help and would be happy to answer any questions you have!
        </div> */}

        {Object.keys(teams).map((team, i) => (
          <React.Fragment key={i}>
            <div className="flex flex-col text-center text-4xl md:text-5xl font-semibold">
              {team}
            </div>
            <div className="flex flex-col px-3 md:flex-wrap md:flex-row grow items-center md:items-start gap-y-24 md:gap-x-24 w-full  justify-center">
              {teams[team].map((member, j) => (
                <div key={j} className="flex w-full md:w-56 md:py-4 text-center flex-col md:space-y-4 space-y-8  items-center justify-center">
                    <div className="">
                      <Image
                        className=" w-[30vw] md:w-[15vw] rounded-full"
                        src={member.image}
                        alt={`${member.name} image`}
                      />
                    </div>

                    <div className="card-text">
                      <div className="card-header whitespace-pre-line font-semibold text-xl">
                        {member.name}
                      </div>
                      <div className="">
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
                      </div>
                  </div>
                </div>
              ))}
            </div>
          </React.Fragment>
        ))}

<div className="flex flex-col text-center text-4xl md:text-5xl font-semibold">
              Advisors
            </div>
            <div className="flex flex-col px-3 flex-wrap md:flex-row grow items-start gap-x-24 w-full  justify-center">
              {advisors.map((advisor, j) => (
              <div key={j} className="flex w-full md:w-56 md:py-4 text-center flex-col md:space-y-4 space-y-8  items-center justify-center">
              <div className="">
                <Image
                  className=" w-[30vw] md:w-[15vw] rounded-full"
                  src={advisor.image}
                  alt={`${advisor.name} image`}
                />
              </div>

              <div className="card-text">
                <div className="card-header whitespace-pre-line font-semibold text-xl">
                  {advisor.name}
                </div>
                <div className="">
                  {advisor.role}
                  <br />
                  <Popup
                    key={advisor.name}
                    position="bottom center"
                    inverted
                    trigger={
                      <a
                        href={"mailto:" + advisor.email}
                        className="card-email"
                      >
                        {advisor.email}
                      </a>
                    }
                    //header='Open Mail Client'
                    //content={member.email}
                  />
                </div>
            </div>
          </div>
              ))}
            </div>
      </div>
    );
  }
}

export default MemberCards;
