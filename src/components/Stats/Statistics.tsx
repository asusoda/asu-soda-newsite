import AnimatedNumber from "../logic/AnimatedNumber";
import teamsData from "../../components/Team/TeamList.json";

const dollarFormatter = new Intl.NumberFormat("US", {
  style: "currency",
  currency: "USD",
});
const teams = Object.fromEntries(Object.entries(teamsData).slice(0, -1));  // Assuming advisors is last entry
const advisors = teamsData["Advisors"];

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
    label: "Teams",
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
    value: advisors.length,
    steps: 1,
    formatter: (x: number) => <>{x}</>,
  },
];

export default function Statistics() {
  return (
    <div className="statistics">
      {statistics.map(({ key, label, value, steps, formatter }) => (
        <div key={key} className="stat-container">
          <div className="stat-value">
            <AnimatedNumber
              number={value}
              steps={steps}
              formatter={formatter}
            />
          </div>
          <div className="stat-label">{label}</div>
        </div>
      ))}
    </div>
  );
}
