import React from "react";
import { Helmet } from "react-helmet-async";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import RoundedButton from "../components/Button/RiArrowButton";

const adminContent = `
# Officer Positions Openings
---
## Administrative Roles
### Treasurer (Executive)
- Conduct fiscal operations based on planning established by VP of Finance
- Oversee admin officers in carrying out budget/purchase requests
- Manage funding sources and financial accounts
### Finance Specialist
- Carry out budget and purchase requests as directed by the Treasurer
- Assist in financial planning and fiscal operations
- Manage funding sources and financial accounts
### Event Coordinator
- Manage event logistics and operations
- Coordinate with team directors to plan and operate events
- Location scouting and venue reservation
`;

const marketingContent = `
## Marketing Roles
| Note: Portfolio is required for all marketing positions. Please include a link to your portfolio in your application.
### Photographer
- Attend all of SoDA's events to capture high-quality photos
- Process and edit photos for clarity, lighting, and aesthetics
- Work with the graphic designers and other marketing officers to provide images that complement design elements
### Videographer
- Collaborate with the Marketing Director to plan and execute video shoots
- Capture high-quality video footage of SoDA events and promotional content
- Ensure proper lighting, sound, and camera setup for all video productions
### Video Editor
- Edit raw footage into polished, engaging videos for social media
- Add special effects, transitions, and graphics to enhance video quality
- Work with the marketing team to ensure videos align with SoDA branding
### Graphic Designer
- Develop and create visual content incorporating SoDA's brand identity, including posters, flyers, and digital graphics
- Work closely with the Marketing Director to provide creative input and translate business requirements into compelling visual designs
- Reinforce and develop SoDA's brand identity, reviewing and updating design templates as necessary to keep the brand fresh and consistent
`

const officerContent = `
## General Officer Roles
### Professional Development & Community Engagement Specialist (D&E)
- Facilitate community events and mentorship programs to enhance networking opportunities and professional development
- Engage socially with current and prospective SoDA members and ASU at large to create a welcoming environment
to people of all backgrounds
### Industry/University Relations Specialist
- Establish new corporate sponsorships and strategic partnerships
- Maintain relations with existing sponsors and partners
- Arrange for sponsored and partner events, workshops, and other activities
`

const techContent = `
## Technology Roles
| Note: Technology roles require a technical interview.
### Workshop Content Developer
- Create comprehensive workshop content, including slides, handouts, and coding exercises
- Present and instruct workshops, ensuring participant engagement and understanding
- Continuously update and improve workshop materials based on feedback and advancements in the field
### Special Events Organizer
- Hackathon problem statement selection and judging panel coordination
- Competitive programming contest organization and problem design
- Bootcamp organization, instructional design, and speaker coordination
### Internal Tools Developer
- Internal software, tools, and automations
- Web development, database management, and API integrations
`

const applicationURL = "https://forms.gle/7cRWXCLeLCRANtS86";

export default function Positions() {
  return (
    <div className="max-w-5xl mx-auto p-6 my-28 shadow-md rounded-lg">
      {/* Helmet for SEO */}
      <Helmet>
        <title>Officer Positions - ASU Soda</title>
        <meta name="description" content="Explore open officer positions at ASU Soda and apply for roles in administration, marketing, technology, and more." />
        <meta name="keywords" content="Officer Positions, ASU Soda, Officer Roles, Administrative Roles, Marketing Roles, Technology Roles, Officer Applications, Computer science, CS Club" />
      </Helmet>

      <div className="prose lg:prose-xl prose-invert mb-10">
        <ReactMarkdown
          children={adminContent}
          remarkPlugins={[remarkGfm]}
        />
      </div>
      <div className="max-w-3xl">
        <RoundedButton name="Apply Now" url={applicationURL} />
      </div>

      <div className="prose lg:prose-xl prose-invert my-10">
        <ReactMarkdown
          children={marketingContent}
          remarkPlugins={[remarkGfm]}
        />
      </div>
      <div className="max-w-3xl">
        <RoundedButton name="Apply Now" url={applicationURL} />
      </div>

      <div className="prose lg:prose-xl prose-invert my-10">
        <ReactMarkdown
          children={officerContent}
          remarkPlugins={[remarkGfm]}
        />
      </div>
      <div className="max-w-3xl">
        <RoundedButton name="Apply Now" url={applicationURL} />
      </div>

      <div className="prose lg:prose-xl prose-invert my-10">
        <ReactMarkdown
          children={techContent}
          remarkPlugins={[remarkGfm]}
        />
      </div>
      <div className="max-w-3xl">
        <RoundedButton name="Apply Now" url={applicationURL} />
      </div>
    </div>
  );
}
