import React from "react";
import HorizontalLine from "./ui/HorizontalLine";

const perks = [
  {
    header: "Unlimited Opportunities & Career Development",
    description:
      "SoDA offers boundless opportunities to advance your career. From technical workshops hosted by industry leaders to career fairs and networking events, you’ll gain invaluable experience and connections to kickstart your journey as a software developer.",
    imgURL: "/events/amazon-table.png",
  },
  {
    header: "Community and Support",
    description:
      "SoDA provides a supportive network of fellow computer science students, offering collaboration, encouragement, and a sense of belonging through regular meetings and events with free food.",
    imgURL: "/events/microsoft-resume-review.JPG",
  },
  {
    header: "Learning and Development",
    description:
      "Enhance your skills through a variety of learning opportunities, including coding workshops, bootcamps, and talks from industry professionals. SoDA is committed to your personal and professional growth, ensuring you stay ahead in the fast-paced tech world.",
    imgURL: "/events/what-is-soda.jpg",
  },
];

export default function AboutUs() {
  return (
    <main className="flex flex-col  w-[70vw] max-md:w-[95vw] justify-center items-center mx-auto">
      <section className="text-center max-md:text-left">
        <h1 className="section-header-text">About SoDA</h1>
        <p className="px-24 max-lg:px-4 mx-auto">
          The Software Developers Association (SoDA) at Arizona State
          University, is a student run, free organization dedicated to serving
          ASU’s computer science students. SoDA is one of the largest
          communities of students on campus, and is the largest engineering
          organization. We provide opportunities to collaborate on projects
          outside of the classroom, learn from university and industry
          professionals, and prepare for a career as a software developer.
        </p>
      </section>

      <section className="grid grid-cols-3 max-lg:grid-cols-1 my-10 max-md:gap-4 gap-14">
        {perks.map((perk) => (
          <div className="bg-white w-[400px] rounded-2xl flex flex-col">
            <img src={perk.imgURL} className="w-[100%] h-[50%] rounded-t-xl" />
            <div className="text-soda-black px-5 py-4 text-left">
              <h4 className="font-semibold text-2xl">{perk.header}</h4>
              <hr className="border-soda-gray opacity-75 my-2 w-[60%]"></hr>
              <p className="text-[16px] max-md:text-sm">{perk.description}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
