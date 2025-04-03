import React from "react";
import Markdown from "markdown-to-jsx";
import { Link } from "react-router-dom";

interface IndividualBlogProps {
  imageURL: string;
  tag: string[];
  title: string;
  summary: string;
  link: string;
  alt: string;
}

const getColorFromString = (str: string) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }

  // Generate HSL color with fixed saturation and lightness for better readability
  const h = Math.abs(hash % 360);
  // Using lightness of 85% for light backgrounds
  return `hsl(${h}, 70%, 85%)`;
};

const IndividualBlog: React.FC<IndividualBlogProps> = ({
  imageURL,
  tag,
  title,
  summary,
  link,
  alt,
}) => {
  return (
    <Link to={link} className="group relative block">
      <div className="bg-neutral-900 border-gray-600 rounded-lg p-6 max-w-md h-full overflow-hidden text-white transition transform hover:scale-105 hover:shadow-lg">
        <img src={imageURL} alt={alt} className="w-full h-48 object-cover rounded-t-lg" />
        {/* <div className="flex flex-wrap gap-2 mt-2">
          {tag.map((t, index) => (
            <span
              key={index}
              className="rounded-full px-3 py-1 text-xs text-gray-800"
              style={{ backgroundColor: getColorFromString(t) }}
            >
              {t}
            </span>
          ))}
        </div>
        */}
        <h2 className="text-2xl font-bold my-3">{title}</h2>
        <Markdown className="text-gray-200 mt-2 text-sm overflow-hidden text-ellipsis h-16">
          {summary}
        </Markdown>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-500/40 to-zinc-500/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center" />
      </div>
    </Link>
  );
};

export default function Blog() {
  return (
    <section id="programs" className="flex flex-col items-center px-8">
      <h1 className="section-header-text">Programs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <IndividualBlog
          imageURL="/pizza.webp"
          tag={["community", "learning", "networking"]}
          title="Weekly General Body Meetings"
          summary="Join SoDA every week for our General Body Meetings on Tuesdays! We host workshops, tech talks, networking events, and more. It's a great way to learn, connect with fellow students, and get involved in the largest engineering organization at ASU. Free pizza included ;)"
          link="/"
          alt="Weekly General Body Meetings"
        />
        <IndividualBlog
          imageURL="/winner-winner-chicken-dinner.webp"
          tag={["mentorship", "community development"]}
          title="Distinguished Members Program"
          summary="SoDA introduced points system designed to encourage active participation in our community. By attending meetings, events, and engaging in various activities, members can earn points that contribute to their standing within the organization."
          link="/distinguishedMembers"
          alt="Distinguished Members Program"
        />
       <IndividualBlog
          imageURL="/events/microsoft.webp"
          tag={["mentorship", "community development"]}
          title="Mentorship Program"
          summary="SoDA offers a comprehensive mentorship program designed to support those in need. Our program connects experienced mentors with mentees, providing guidance, and support to help them navigate their academic and professional journeys. "
          link="/mentorship"
          alt="Mentorship Program"
        />
      </div>
    </section>
  );
}
