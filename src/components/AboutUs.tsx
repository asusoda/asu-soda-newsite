import React from "react";
import HorizontalLine from "./ui/HorizontalLine";

const perks = [
  {
    header: "Professional Development",
    description:
      "SoDA offers boundless opportunities to advance your career. From technical workshops hosted by industry leaders to career fairs and networking events, you’ll gain invaluable experience and connections to kickstart your journey as a software developer.",
    imgURL: "/events/amazon-table.webp",
    alt: "Amazon table at a SoDA event",
  },
  {
    header: "Community and Support",
    description:
      "SoDA provides a supportive network of fellow computer science students, offering collaboration, encouragement, and a sense of belonging through regular meetings and events with free food.",
    imgURL: "/events/microsoft-resume-review.webp",
    alt: "Microsoft resume review at a SoDA event",
  },
  {
    header: "Learning",
    description:
      "Enhance your skills through a variety of learning opportunities, including coding workshops, bootcamps, and talks from industry professionals. SoDA is committed to your personal and professional growth, ensuring you stay ahead in the fast-paced tech world.",
    imgURL: "/events/what-is-soda.webp",
    alt: "SoDA members at a meeting",
  },
];

export default function AboutUs() {
  return (
    <>
    <div className="flex flex-row w-full soda-bars z-50 h-2"></div>
    <main
      className="flex  flex-col min-h-screen justify-center items-center"
      id="info"
    >
      <h1 className="section-header-text">About SoDA</h1>
      <section className="text-center items-center">
        <p className="hero-small-text px-24 max-w-[100ch] max-lg:px-6 mx-auto">
          The Software Developers Association (SoDA) at Arizona State
          University is a student-run, free organization dedicated to
          serving ASU’s computer science students since 2008. SoDA is
          one of the oldest and largest communities of students on
          campus, and is the largest engineering organization.
        </p>
      </section>

      <h1 className="section-header-text">Mission</h1>
      <section className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {perks.map((perk) => (
          <div key={perk.header} className="bg-neutral-900  p-4 border-gray-600 rounded-2xl justify-center flex flex-col min-h-[300px] max-w-[300px] w-full">
            <img
              src={perk.imgURL}
              className="rounded-t-xl object-cover w-full h-48"
              alt={perk.alt}
            />
            <div className="text-white px-4 py-3 space-y-3 text-left flex-1">
              <h4 className="font-semibold text-xl max-md:text-lg">
                {perk.header}
              </h4>
              {/* <hr className="border-soda-gray opacity-75 my-2 w-[60%]" /> */}
              <p className="text-[14px] max-md:text-sm">{perk.description}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  
    </>
  );
}
