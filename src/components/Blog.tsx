import React from "react";
import Markdown from "markdown-to-jsx";

// Define the props type for the IndividualBlog component
interface IndividualBlogProps {
  imageURL: string;
  tag: string[];
  title: string;
  summary: string;
}

export default function Blog() {
  return (
    <main>
      <h1 className="section-header-text">SoDA Developers News</h1>
      <section className="flex gap-10 my-14 items-center justify-center">
        <IndividualBlog
          imageURL="/events/microsoft.JPG"
          tag={["mentorship", "community development"]}
          title="Mentoring Program 🧑‍🏫"
          summary="SoDA offers a comprehensive mentorship program designed to support those in need. Our program connects experienced mentors with mentees, providing guidance, resources, and support to help them navigate their academic and professional journeys. Whether you're looking to improve your coding skills, seek career advice, or simply need someone to talk to, our mentorship program is here to help you succeed."
        />
        <IndividualBlog
          imageURL="/events/microsoft.JPG"
          tag={["mentorship", "community development"]}
          title="Points System 📊"
          summary="SoDA has a dynamic points system designed to encourage active participation in our community. By attending meetings, events, and engaging in various activities, members can earn points that contribute to their standing within the organization. This system opens up opportunities for members to take on leadership roles. Accumulating points allows members to qualify for officer positions, where they can further their development, lead initiatives, and make a significant impact on our community."
        />
      </section>
    </main>
  );
}

const IndividualBlog: React.FC<IndividualBlogProps> = ({
  imageURL,
  tag,
  title,
  summary,
}) => {
  return (
    <div className="group relative bg-soda-white rounded-lg p-6 w-96 h-112 overflow-hidden text-black font-sans transition transform hover:scale-105 hover:shadow-lg">
      <img src={imageURL} alt={title} className="w-full rounded-lg" />
      <div className="flex space-x-2 mt-2">
        {tag.map((t, index) => (
          <span
            key={index}
            className="bg-blue-500 rounded-full px-3 py-1 text-xs text-white"
          >
            {t}
          </span>
        ))}
      </div>
      <h2 className="text-2xl font-bold mt-3">{title}</h2>
      <Markdown className="text-gray-900 mt-2 text-sm">{summary}</Markdown>

      {/* Overlay for "Read More" effect */}
      <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
        <span className="text-white text-lg font-bold top-20">Read More</span>
      </div>
    </div>
  );
};
