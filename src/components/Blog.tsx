import React from "react";
import Markdown from "markdown-to-jsx";
import { Link } from "react-router-dom";

interface IndividualBlogProps {
  imageURL: string;
  tag: string[];
  title: string;
  summary: string;
  link: string;
}

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const IndividualBlog: React.FC<IndividualBlogProps> = ({
  imageURL,
  tag,
  title,
  summary,
  link,
}) => {
  return (
    <Link to={link} className="group relative block">
      <div className="bg-soda-white rounded-lg p-6 w-80 h-100 overflow-hidden text-black font-sans transition transform hover:scale-105 hover:shadow-lg">
        <img src={imageURL} alt={title} className="w-full rounded-lg" />
        <div className="flex flex-wrap gap-2 mt-2">
          {tag.map((t, index) => (
            <span
              key={index}
              className="rounded-full px-3 py-1 text-xs text-black"
              style={{ backgroundColor: getRandomColor() }}
            >
              {t}
            </span>
          ))}
        </div>
        <h2 className="text-2xl font-bold mt-3">{title}</h2>
        <Markdown className="text-gray-900 mt-2 text-sm overflow-hidden text-ellipsis h-16">
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
    <main className="mt-10">
      <h1 className="section-header-text mb-6">SoDA Programs</h1>
      <section className="flex max-md:flex-col gap-8 items-center justify-center">
        <IndividualBlog
          imageURL="/events/microsoft.JPG"
          tag={["mentorship", "community development"]}
          title="Mentoring Program 🧑‍🏫"
          summary="SoDA offers a comprehensive mentorship program designed to support those in need. Our program connects experienced mentors with mentees, providing guidance, and support to help them navigate their academic and professional journeys. "
          link="/mentorship"
        />
        <IndividualBlog
          imageURL="/how-to-start-a-points-system.png"
          tag={["mentorship", "community development"]}
          title="Points System 📊"
          summary="SoDA introduced points system designed to encourage active participation in our community. By attending meetings, events, and engaging in various activities, members can earn points that contribute to their standing within the organization."
          link="/points-system"
        />
      </section>
    </main>
  );
}
