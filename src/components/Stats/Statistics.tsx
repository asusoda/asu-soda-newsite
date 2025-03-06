import AnimatedNumber from "../logic/AnimatedNumber";
import { Statistic } from "semantic-ui-react";
import teamsData from "../../components/Team/TeamList.json";
import RoundedButton from "../Button/RiArrowButton";

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
    steps: 1000,
    formatter: (x: number) => <>{dollarFormatter.format(x)}</>,
  },
  {
    key: "sponsors",
    label: "Sponsors",
    value: 12,
    steps: 1,
    formatter: (x: number) => <>{x}</>,
  },
  {
    key: "teams",
    label: "Committees",
    value: Object.keys(teams).length,
    steps: 1,
    formatter: (x: number) => <>{x}</>,
  },
  {
    key: "officers",
    label: "Officers",
    value: Object.values(teams).reduce((total, team) => {
      return total + team.length;
    }, 0),
    steps: 1,
    formatter: (x: number) => <>{x}</>,
  },
  {
    key: "advisors",
    label: "Advisors",
    value: Object.keys(advisors).length,
    steps: 1,
    formatter: (x: number) => <>{x}</>,
  },
];

export default function Statistics() {
  return (
    <div className="statistics">
      {statistics.map(({ key, label, value, steps, formatter }) => (
        <Statistic key={key} className="stat-container">
          <Statistic.Value className="stat-value">
            <AnimatedNumber
              number={value}
              steps={steps}
              formatter={formatter}
            />
          </Statistic.Value>
          <Statistic.Label className="stat-label">{label}</Statistic.Label>
        </Statistic>
      ))}

      {/* <RoundedButton
        name="Learn More"
        url="https://asu.campuslabs.com/engage/organization/soda"
      ></RoundedButton> */}
    </div>
  );
}
