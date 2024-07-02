import AnimatedNumber from "./logic/AnimatedNumber";
import { Statistic } from "semantic-ui-react";

import teamsData from "../assets/teams.json";

const dollarFormatter = new Intl.NumberFormat("US", {
  style: "currency",
  currency: "USD",
});
const teams = teamsData.teams;
const advisors = teamsData.advisors;

const statistics = [
  {
    key: "pizza",
    label: "worth of pizza served",
    value: 22500,
    steps: 50,
    formatter: (x) => dollarFormatter.format(x),
  },
  {
    key: "sponsors",
    label: "Sponsors",
    value: 12,
    steps: 1,
    formatter: (x) => x,
  },
  {
    key: "teams",
    label: "Committees",
    value: Object.keys(teams).length,
    steps: 1,
    formatter: (x) => x,
  },
  {
    key: "officers",
    label: "Officers",
    value: Object.values(teams).reduce((total, team) => {
      return total + team.length;
    }, 0),
    steps: 1,
    formatter: (x) => x,
  },
  {
    key: "advisors",
    label: "Advisors",
    value: Object.keys(advisors).length,
    steps: 1,
    formatter: (x) => x,
  },
];

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="md:w-1/2 px-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            The Software Developers Association
          </h1>
          <p className="mt-4 text-xl">
            The premiere software development club for Arizona State University
            students.
          </p>
          <div className="statistics">
            {statistics.map(({ key, label, value, steps, formatter }) => (
              <Statistic key={key} className="">
                <div className="">
                  <Statistic.Value>
                    <AnimatedNumber
                      number={value}
                      steps={steps}
                      formatter={formatter}
                    />
                  </Statistic.Value>
                  <Statistic.Label>{label}</Statistic.Label>
                </div>
              </Statistic>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
