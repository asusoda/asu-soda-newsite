import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "../styles/Points.css";
const markdownContent = `# 🎯 Distinguished Members Program

The **Distinguished Members Program** is designed to incentivize active involvement through a structured framework of rewards and recognitions. This program aims to enhance the overall club experience while offering tangible benefits to our members.

# 🎯 Objectives

1. **Increase Active Participation:** Encourage consistent attendance at meetings, workshops, and club events.
2. **Enhance Member Skills:** Motivate members to engage deeply with technical content and collaborative projects.
3. **Build Community:** Strengthen the sense of belonging and teamwork within the club.
4. **Recognize Contributions:** Acknowledge and reward the efforts and achievements of our members.

# 🏆 Perks and Rewards

Members can earn points through various activities such as attending meetings, participating in discussions, contributing to projects, and more. These points lead to numerous benefits, including:

- **Priority Opportunities:** Access to limited-space events and seats on SoDA Team Trip to Sponsor's Office (more details to come as the semester progresses).
- **Professional Advancement:** Enhanced visibility in our Resume Book and potential recommendation letters.
- **Exclusive Access:** Voting rights on future workshop topics and direct interactions with industry professionals.
- **Alumini Banquet:** Invitation to Alumini Banquet at the end of the semester/year. (more details comming out soon)

## 🎯 Point System Breakdown

Earn points through different activities to unlock rewards. Here’s a breakdown:

| **Activity Category**     | **Specific Activity**                                                                 | **Points Awarded** | **Notes**                                                                                   |
|---------------------------|----------------------------------------------------------------------------------------|--------------------|---------------------------------------------------------------------------------------------|
| **Meetings**              | Attend in-person meeting                                                              | 10                 | Higher points for in-person attendance                                                      |
|                           | Attend online meeting                                                                 | Approx. 5          | Encourages participation regardless of location                                             |
|                           | Attend Lounge hours                                                                   | 5                  |                                                                                             |
| **Active Participation**  | Asking questions or contributing to meetings by interacting with workshops/presenters | 1 each time        | Promotes lively discussions and engagement                                                  |
|                           | Bonus points for participation                                                        | 5                  |                                                                                             |
| **Discord Engagement**    | Engaging with the Discord in general and asking questions (not answering questions)    | 2 per month        | Maximum of 10 points per semester; subject to director's discretion                         |
|                           | Helpful post or solving a query                                                       | 5 per instance     | Encourages peer support (cap of 15 points per semester)                                     |
| **Workshop Contribution** | Submit a workshop challenge                                                           | 20                 | Encourages taking the initiative to engage with the events                                  |
`;

export default function PointsSystem() {
  return (
    <div className="max-w-5xl mx-auto p-6 my-32 shadow-md rounded-lg">
      <h1 className="section-header-text">Points System AKA Distinguished Members Program 🎯</h1>
      <ReactMarkdown
        children={markdownContent}
        remarkPlugins={[remarkGfm]}
        className="prose lg:prose-xl custom-table" // Add a custom class here
      />
    </div>
  );
}