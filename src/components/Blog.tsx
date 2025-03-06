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
      <div className="bg-neutral-900 border-gray-600  rounded-lg p-6 max-w-md h-full overflow-hidden text-white font-sans transition transform hover:scale-105 hover:shadow-lg">
        <img src={imageURL} alt={alt} className="w-full rounded-lg" />
        <div className="flex flex-wrap gap-2 mt-2">
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
        <h2 className="text-2xl font-bold my-3">{title}</h2>
        <Markdown className="text-gray-200 mt-2 text-sm overflow-hidden text-ellipsis h-16">
          {summary}
        </Markdown>
        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="text-white text-lg font-bold">Read More</span>
        </div>
      </div>
    </Link>
  );
};

export default function Blog() {
  return (
    <main className="mt-10 md:mb-16">
      <h1 className="section-header-text mb-6">Programs</h1>
      <section className="flex p-4 max-md:flex-col grow gap-8  justify-center">
        <IndividualBlog
          imageURL="/events/microsoft.webp"
          tag={["mentorship", "community development"]}
          title="Exclusive Mentoring Program"
          summary="SoDA offers a comprehensive mentorship program designed to support those in need. Our program connects experienced mentors with mentees, providing guidance, and support to help them navigate their academic and professional journeys. "
          link="/mentorship"
          alt="Mentoring Program"
        />
        <IndividualBlog
          imageURL="/how-to-start-a-points-system.webp"
          tag={["mentorship", "community development"]}
          title="Distinguished Membership Program "
          summary="SoDA introduced points system designed to encourage active participation in our community. By attending meetings, events, and engaging in various activities, members can earn points that contribute to their standing within the organization."
          link="/distinguishedMembers"
          alt="Distinguished Membership Program"
        />
      </section>
    </main>
  );
}
