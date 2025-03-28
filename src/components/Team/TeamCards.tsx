import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { TeamMember, Teams } from "./Contacts";
import _teams from "./TeamList.json";

function MemberCards() {
  const teams: Teams = _teams;
  const renderMemberCard = (member: TeamMember, j: number) => (
    <div key={j} className="flex w-full md:w-56 md:py-4 text-center flex-col md:space-y-4 space-y-8 items-center justify-center">
      <div className="">
        <img
          className="w-[50vw] md:w-[15vw] rounded-full"
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
          <Popover>
            <PopoverTrigger asChild>
              <a
                href={"mailto:" + member.email}
                className="card-email"
              >
                {member.email}
              </a>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-2 bg-gray-800 text-white">
              {member.email}
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  )

  return (
    <div className="team flex flex-col items-center" id="team">
      <h1 className="section-header-text">Team</h1>
      {Object.keys(teams).map((team: string, i) => (
        <React.Fragment key={i}>
          <div className="flex flex-col my-12 text-center text-2xl md:text-4xl font-semibold">
            {team}
          </div>
          <div className="flex flex-col px-[10vw] md:flex-wrap md:flex-row grow items-center md:items-start gap-y-24 md:gap-x-24 w-full justify-center mb-12">
            {(teams[team]).map((member: TeamMember, j: number) => renderMemberCard(member, j))}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}

export default MemberCards;
