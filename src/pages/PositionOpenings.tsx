import { Helmet } from "react-helmet-async";
import { useState, useEffect } from "react";
import RoundedButton from "../components/Button/RiArrowButton";
import Slider from "react-infinite-logo-slider";
import {
  FaMeta,
  FaApple,
  FaAmazon,
  FaDropbox,
  FaSalesforce,
  FaMicrosoft,
} from "react-icons/fa6";
import { AiOutlineOpenAI } from "react-icons/ai";
import {
  SiIntuit,
  SiGarmin,
  SiGodaddy,
  SiIntel,
  SiGoldmansachs,
} from "react-icons/si";
import { IconContext } from "react-icons";
import HandDrawnStar from "../components/ui/HandDrawnStar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
export default function Positions() {
  const [sliderWidth, setSliderWidth] = useState("150px");
  const [sliderDuration, setSliderDuration] = useState(15);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)"); // Corresponds to md breakpoint

    const handleResize = () => {
      if (mediaQuery.matches) {
        // Mobile
        setSliderWidth("125px");
        setSliderDuration(10);
      } else {
        // Desktop
        setSliderWidth("150px");
        setSliderDuration(15);
      }
    };

    // Initial check
    handleResize();

    // Add listener for screen size changes
    mediaQuery.addEventListener("change", handleResize);

    // Cleanup listener on component unmount
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []); // Empty dependency array ensures this runs only on mount and unmount

  return (
    <div className="max-w-5xl mx-auto p-6 md:mt-14 shadow-md rounded-lg prose lg:prose-xl prose-invert">
      {/* Helmet for SEO */}
      <Helmet>
        <title>Organizer Applications</title>
        <meta
          name="description"
          content="Explore open officer positions at ASU Soda and apply for roles in administration, marketing, technology, and more."
        />
        <meta
          name="keywords"
          content="Officer Positions, ASU Soda, Officer Roles, Administrative Roles, Marketing Roles, Technology Roles, Officer Applications, Computer science, CS Club"
        />
      </Helmet>

      <h1>Organizer Applications</h1>

      <p>
        Thank you for your interest in joining the Software Developers
        Association!
      </p>
      <p>Our organizers get jobs at companies like</p>
      {/* todo: add cap one, state farm, lockheed */}
      <p>
        <IconContext.Provider
          value={{ size: "4rem", style: { verticalAlign: "middle" } }}
        >
          <Slider
            width={sliderWidth}
            duration={sliderDuration}
            blurBorders={true}
            blurBorderColor="#080909"
          >
            <Slider.Slide>
              <FaMeta />
            </Slider.Slide>
            <Slider.Slide>
              <FaApple />
            </Slider.Slide>
            <Slider.Slide>
              <FaAmazon />
            </Slider.Slide>
            <Slider.Slide>
              <FaMicrosoft />
            </Slider.Slide>
            <Slider.Slide>
              <FaDropbox />
            </Slider.Slide>
            <Slider.Slide>
              <FaSalesforce />
            </Slider.Slide>
            <Slider.Slide>
              <AiOutlineOpenAI />
            </Slider.Slide>
            <Slider.Slide>
              <SiGoldmansachs />
            </Slider.Slide>
            <Slider.Slide>
              <SiIntuit size="5rem" />
            </Slider.Slide>
            <Slider.Slide>
              <SiIntel />
            </Slider.Slide>
            <Slider.Slide>
              <SiGarmin size="5rem" />
            </Slider.Slide>
            <Slider.Slide>
              <SiGodaddy />
            </Slider.Slide>
          </Slider>
        </IconContext.Provider>
      </p>

      <h2>️️Application Instructions</h2>

      <p>
        Our application process will be conducted through the Qruil platform.
      </p>

      <p>
        If you don't already have one, create an account with{" "}
        <a href="https://qruil.com" target="_blank">
          Qruil
        </a>
        . You will then have to fill out your application details through the
        "Application" tab found in the left sidebar on Qruil.
      </p>

      <p>
        The only information we require is your Profile (Personal Information,
        Contact), Work, Education, CV/Resume, and Questions ("What makes you a
        good fit for this role?"). Note that Qruil may require you to fill out
        additional information before applying.
      </p>

      <p>
        Finally, locate one of our open positions in the{" "}
        <a href="https://qruil.com/seeker/job-search" target="_blank">
          Qruil search page
        </a>{" "}
        and apply through there.
      </p>

      <p>
        Direct any technical issues or concerns to{" "}
        <a href="mailto:asu@thesoda.io">asu@thesoda.io</a>.
      </p>

      <h2>Application Timeline</h2>
      <p>
        We review applications on a rolling basis, so please apply as soon as
        you can. If your application moves forward, we'll contact you to
        schedule a 30-minute interview. You will be asked basic questions about
        your interest, experience, and how you work within a team. Finally, you
        will be contacted regarding a final decision.
      </p>

      <hr className="my-10 border-gray-600" />


      <h2>Open Positions by Team</h2>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="admin">
          <AccordionTrigger className="text-3xl font-semibold no-underline hover:no-underline py-4" showStar>
            Finance
          </AccordionTrigger>
          <AccordionContent className="prose lg:prose-xl prose-invert">
            <h3>Treasurer</h3>
            <ul className="mb-0">
              <li>Conduct fiscal operations based on planning established by VP of Finance</li>
              <li>Oversee admin officers in carrying out budget/purchase requests</li>
              <li>Manage funding sources and financial accounts</li>
            </ul>
            <div className="max-w-3xl flex justify-start mt-4">
              <RoundedButton name="Details on Qruil" url={"https://qruil.com/job-detail/treasurer-1744186548095"} />
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="marketing">
          {/* Add showStar prop, remove HandDrawnStar component */}
          <AccordionTrigger className="text-3xl font-semibold no-underline hover:no-underline py-4" showStar>
            Marketing
          </AccordionTrigger>
          <AccordionContent className="prose lg:prose-xl prose-invert">
            <h3>Photographer</h3>
            <ul className="mb-0">
              <li>
                Attend all of SoDA's events to capture high-quality photos
              </li>
              <li>
                Process and edit photos for clarity, lighting, and aesthetics
              </li>
              <li>
                Work with the graphic designers and other marketing officers to
                provide images that complement design elements
              </li>
            </ul>
            <div className="max-w-3xl flex justify-start mt-4">
              <RoundedButton
                name="Details on Qruil"
                url="https://qruil.com/job-detail/marketing-or-photographer-1742971795749"
              />
            </div>
            <h3>Video Editor</h3>
            <ul className="mb-0">
              <li>
                Edit raw footage into polished, engaging videos for social media
              </li>
              <li>
                Add special effects, transitions, and graphics to enhance video
                quality
              </li>
              <li>
                Work with the marketing team to ensure videos align with SoDA
                branding
              </li>
            </ul>
            <div className="max-w-3xl flex justify-start mt-4">
              <RoundedButton
                name="Details on Qruil"
                url="https://qruil.com/job-detail/marketing-or-graphic-designer-1742971746962"
              />
            </div>
            <h3>Graphic Designer</h3>
            <ul className="mb-0">
              <li>
                Develop and create visual content incorporating SoDA's brand
                identity, including posters, flyers, and digital graphics
              </li>
              <li>
                Work closely with the Marketing Director to provide creative
                input and translate business requirements into compelling visual
                designs
              </li>
              <li>
                Reinforce and develop SoDA's brand identity, reviewing and
                updating design templates as necessary to keep the brand fresh
                and consistent
              </li>
            </ul>
            <div className="max-w-3xl flex justify-start mt-4">
              <RoundedButton
                name="Details on Qruil"
                url="https://qruil.com/job-detail/test-1742321001922"
              />
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="industry-relations">
          {/* Add showStar prop, remove HandDrawnStar component */}
          <AccordionTrigger className="text-3xl font-semibold no-underline hover:no-underline py-4" showStar>
            Industry Relations
          </AccordionTrigger>
          <AccordionContent className="prose lg:prose-xl prose-invert mt-[-2rem]">
            <ul className="mb-0">
              <li>
                Establish new corporate sponsorships and strategic partnerships
              </li>
              <li>Maintain relations with existing sponsors and partners</li>
              <li>
                Arrange for sponsored and partner events, workshops, and other
                activities
              </li>
            </ul>
            <div className="max-w-3xl flex justify-start mt-4">
              <RoundedButton
                name="Details on Qruil"
                url="https://qruil.com/job-detail/industry-relations-officer-1743643231829"
              />
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="development-engagement">
          {/* Add showStar prop, remove HandDrawnStar component */}
          <AccordionTrigger className="text-3xl font-semibold no-underline hover:no-underline py-4" showStar>
            Development & Engagement
          </AccordionTrigger>
          <AccordionContent className="prose lg:prose-xl prose-invert mt-[-2rem]">
            <ul className="mb-0">
              <li>
                Organize and facilitate events designed to boost community
                engagement and provide valuable networking opportunities.
              </li>
              <li>
                Plan and execute social gatherings for both current and
                potential members, fostering a welcoming and inclusive
                atmosphere within the organization.
              </li>
            </ul>
            <div className="max-w-3xl flex justify-start mt-4">
              <RoundedButton
                name="Details on Qruil"
                url="https://qruil.com/job-detail/professional-development-and-community-engagement-specialist-(dande)-1742971838660"
              />
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="technology">
          {/* Add showStar prop, remove HandDrawnStar component */}
          <AccordionTrigger className="text-3xl font-semibold no-underline hover:no-underline py-4" showStar>
            Technology
          </AccordionTrigger>
          <AccordionContent className="prose lg:prose-xl prose-invert">
            <h3>Workshop Content Developer</h3>
            <ul className="mb-0">
              <li>
                Create comprehensive workshop content, including slides,
                handouts, and coding exercises
              </li>
              <li>
                Present and instruct workshops, ensuring participant engagement
                and understanding
              </li>
              <li>
                Continuously update and improve workshop materials based on
                feedback and advancements in the field
              </li>
            </ul>
            <h3>Special Events Organizer</h3>
            <ul className="mb-0">
              <li>
                Hackathon problem statement selection and judging panel
                coordination
              </li>
              <li>
                Competitive programming contest organization and problem design
              </li>
              <li>
                Bootcamp organization, instructional design, and speaker
                coordination
              </li>
            </ul>
            <h3>Internal Tools Developer</h3>
            <ul className="mb-0">
              <li>Internal software, tools, and automations</li>
              <li>
                Web development, database management, and API integrations
              </li>
            </ul>
            <div className="max-w-3xl flex justify-start mt-4">
              <RoundedButton
                name="Details on Qruil"
                url="https://qruil.com/job-detail/technology-specialist-1742972015408"
              />
            </div>
          </AccordionContent>
        </AccordionItem>
        <div />
      </Accordion>
    </div>
  );
}
