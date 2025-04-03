import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { TeamMember, Teams } from "./Contacts";
import _teams from "./TeamList.json";

function MemberCards() {
  const teams: Teams = _teams;
  const renderMemberCard = (member: TeamMember, j: number) => (
    <div key={j} className="flex w-[40vw] md:w-56 md:py-4 text-center flex-col md:space-y-4 space-y-4 items-center justify-center">
      <div className="w-[40vw] md:w-[12vw] aspect-square">
        <img
          className="w-full h-full object-cover rounded-full"
          src={member.image}
          alt={`${member.name} image`}
        />
      </div>

      <div className="card-text min-h-34">
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
          <div className="flex flex-row flex-wrap px-[5vw] items-center gap-8 w-full justify-center mb-12 md:items-start md:gap-x-24 md:max-w-[70vw] mx-auto">
            {(teams[team]).map((member: TeamMember, j: number) => renderMemberCard(member, j))}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}

export default MemberCards;
