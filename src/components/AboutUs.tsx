import React from "react";

const perks = [
  {
    header: "Unlimited Opportunities & Career Development",
    description:
      " Throughout the year we welcome industry representatives to host technical workshops and company information sessions. We also host larger events, such as our annual Bootcamp and Coding Competition, in addition to more!",
    imgURL: "/events/amazon-table.png",
  },
  {
    header: "",
    description:
      " Throughout the year we welcome industry representatives to host technical workshops and company information sessions. We also host larger events, such as our annual Bootcamp and Coding Competition, in addition to more!",
    imgURL: "/events/amazon-table.png",
  },
  {
    header: "Unlimited Opportunities",
    description:
      " Throughout the year we welcome industry representatives to host technical workshops and company information sessions. We also host larger events, such as our annual Bootcamp and Coding Competition, in addition to more!",
    imgURL: "/events/amazon-table.png",
  },
];

export default function AboutUs() {
  return (
    <main className="flex flex-col text-center w-[70vw] justify-center items-center mx-auto">
      <section>
        <h1 className="section-header-text">About SoDA</h1>
        <p className="px-24">
          The Software Developers Association (SoDA) at Arizona State
          University, is a student run, free organization dedicated to serving
          ASU’s computer science students. SoDA is one of the largest
          communities of students on campus, and is the largest engineering
          organization. We provide opportunities to collaborate on projects
          outside of the classroom, learn from university and industry
          professionals, and prepare for a career as a software developer.
        </p>
      </section>

      <section className="grid grid-cols-3 my-10 gap-20">
        {perks.map((perk) => (
          <div className="bg-white w-[400px] h-[550px] rounded-2xl flex flex-col ">
            <img src={perk.imgURL} className="w-100 rounded-t-2xl" />
            <div className="text-soda-black px-5 py-4 text-left">
              <h4 className="font-semibold text-2xl mb-4">{perk.header}</h4>
              <p className="text-[16px]">{perk.description}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
