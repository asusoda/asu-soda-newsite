import React from "react";
import Markdown from "markdown-to-jsx";

export default function Blog() {
  return (
    <main>
      <h1 className="section-header-text">SoDA Developers News</h1>
      <section className="flex gap-10 my-14 items-center justify-center ">
        <IndividualBlog></IndividualBlog>
        <IndividualBlog></IndividualBlog>
        <IndividualBlog></IndividualBlog>
      </section>
    </main>
  );
}

function IndividualBlog() {
  return (
    <div className="bg-soda-white rounded-lg p-4 w-80 text-black font-sans ">
      <img
        src="/events/microsoft.JPG"
        alt="Person coding on a laptop"
        className="w-full rounded-lg"
      />
      <div className="flex space-x-2 mt-2">
        <span className="bg-blue-500 rounded-full px-3 py-1 text-xs text-white">
          Mentorship
        </span>
        <span className="bg-blue-500 rounded-full px-3 py-1 text-xs text-white">
          Community Development
        </span>
      </div>
      <h2 className="text-2xl font-bold mt-3">Mentoring Program</h2>
      <p className="text-gray-900 mt-2 text-sm">
        SoDA offers a comprehensive mentorship program designed to support those
        in need. Our program connects experienced mentors with mentees,
        providing guidance, resources, and support to help them navigate their
        academic and professional journeys. Whether you're looking to improve
        your coding skills, seek career advice, or simply need someone to talk
        to, our mentorship program is here to help you succeed.
      </p>
    </div>
  );
}
