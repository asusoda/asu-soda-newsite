import { Helmet } from "react-helmet-async";
import RoundedButton from "../components/Button/RiArrowButton";
import Slider from 'react-infinite-logo-slider'
import { FaMeta, FaApple, FaAmazon, FaDropbox, FaSalesforce } from "react-icons/fa6";
import { AiOutlineOpenAI } from "react-icons/ai";
import { SiGarmin } from "react-icons/si";
import { IconContext } from "react-icons";

export default function Positions() {
  return (
    <div className="max-w-5xl mx-auto p-6 md:mt-14 shadow-md rounded-lg prose lg:prose-xl prose-invert">
    {/* Helmet for SEO */}
    <Helmet>
    <title>Officer Positions</title>
    <meta name="description" content="Explore open officer positions at ASU Soda and apply for roles in administration, marketing, technology, and more." />
    <meta name="keywords" content="Officer Positions, ASU Soda, Officer Roles, Administrative Roles, Marketing Roles, Technology Roles, Officer Applications, Computer science, CS Club" />
    </Helmet>
    
    <h1>Officer Openings</h1>

    <p>
      Thank you for your interest in joining the Software Developers Association!
    </p>
    <p>
      Our officers get jobs at companies like
    </p>

    <p>
      <IconContext.Provider value={{size: "4rem", style: {verticalAlign: "middle"}}}>
      <Slider
        width="150px"
        duration={15}
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
          <FaDropbox />
        </Slider.Slide>
        <Slider.Slide>
          <FaSalesforce />
        </Slider.Slide>
        <Slider.Slide>
          <AiOutlineOpenAI />
        </Slider.Slide>
        <Slider.Slide>
          <SiGarmin size="5rem" />
        </Slider.Slide>
        <Slider.Slide>
        </Slider.Slide>
      </Slider>
    </IconContext.Provider>
    </p>

    <h2>️️Application Instructions</h2>

    <p>
      Our application process will be conducted through the Qruil platform.
    </p>

    <p>
      If you don't already have one, create an account with <a href="https://qruil.com" target="_blank">Qruil</a>. You will then have to fill out your application details
      through the "Application" tab found in the left sidebar on Qruil.
    </p>

    <p>
      The only information we require is your Profile (Personal Information, Contact), Work, Education, 
      CV/Resume, and Questions ("What makes you a good fit for this role?"). Note that Qruil may require you to fill
      out additional information before applying.
    </p>

    <p>
      Finally, locate one of our open positions in the <a href="https://qruil.com/seeker/job-search" target="_blank">Qruil search page</a> and apply through there.
    </p>

    <p>
      Direct any technical issues or concerns to <a href="mailto:asu@thesoda.io">asu@thesoda.io</a>.
    </p>

    <h2>Application Timeline</h2>
    <p>
      We review applications on a rolling basis, so please apply as soon as you can. If your application moves forward, we'll contact you to 
      schedule a 30-minute interview. You will be asked basic questions about your interest, experience, and how you work within a team. 
      Finally, you will be contacted regarding a final decision.
    </p>

    <hr />
    
    {/* <h2>Administrative Roles</h2>
      <h3>Treasurer (Executive)</h3>
      <ul>
      <li>Conduct fiscal operations based on planning established by VP of Finance</li>
      <li>Oversee admin officers in carrying out budget/purchase requests</li>
      <li>Manage funding sources and financial accounts</li>
      </ul>
      <div className="max-w-3xl flex justify-start mt-4 mb-6">
      <RoundedButton name="Apply for Treasurer" url={applicationURL} />
      </div>
      <h3>Finance Specialist</h3>
      <ul>
      <li>Carry out budget and purchase requests as directed by the Treasurer</li>
      <li>Assist in financial planning and fiscal operations</li>
      <li>Manage funding sources and financial accounts</li>
      </ul>
      <div className="max-w-3xl flex justify-start mt-4 mb-6">
      <RoundedButton name="Apply for Finance Specialist" url={applicationURL} />
      </div>
      <h3>Event Coordinator</h3>
      <ul>
      <li>Manage event logistics and operations</li>
      <li>Coordinate with team directors to plan and operate events</li>
      <li>Location scouting and venue reservation</li>
      </ul>
      <div className="max-w-3xl flex justify-start mt-4 mb-6">
      <RoundedButton name="Apply for Event Coordinator" url={applicationURL} />
      </div> */}
      
      <div className="prose lg:prose-xl prose-invert my-10">
      <h2>Marketing</h2>
      <h3>Photographer</h3>
      <ul>
      <li>Attend all of SoDA's events to capture high-quality photos</li>
      <li>Process and edit photos for clarity, lighting, and aesthetics</li>
      <li>Work with the graphic designers and other marketing officers to provide images that complement design elements</li>
      </ul>
      <div className="max-w-3xl flex justify-start mt-4 mb-6">
      <RoundedButton name="Details on Qruil" url="https://qruil.com/job-detail/marketing-or-photographer-1742971795749" />
      </div>
      <h3>Video Editor</h3>
      <ul>
      <li>Edit raw footage into polished, engaging videos for social media</li>
      <li>Add special effects, transitions, and graphics to enhance video quality</li>
      <li>Work with the marketing team to ensure videos align with SoDA branding</li>
      </ul>
      <div className="max-w-3xl flex justify-start mt-4 mb-6">
      <RoundedButton name="Details on Qruil" url="https://qruil.com/job-detail/marketing-or-graphic-designer-1742971746962" />
      </div>
      <h3>Graphic Designer</h3>
      <ul>
      <li>Develop and create visual content incorporating SoDA's brand identity, including posters, flyers, and digital graphics</li>
      <li>Work closely with the Marketing Director to provide creative input and translate business requirements into compelling visual designs</li>
      <li>Reinforce and develop SoDA's brand identity, reviewing and updating design templates as necessary to keep the brand fresh and consistent</li>
      </ul>
      <div className="max-w-3xl flex justify-start mt-4 mb-6">
      <RoundedButton name="Details on Qruil" url="https://qruil.com/job-detail/test-1742321001922" />
      </div>
      </div>
      
      <hr />
      
      <div className="prose lg:prose-xl prose-invert my-10">
      <h2>Industry Relations</h2>
      <ul>
      <li>Establish new corporate sponsorships and strategic partnerships</li>
      <li>Maintain relations with existing sponsors and partners</li>
      <li>Arrange for sponsored and partner events, workshops, and other activities</li>
      </ul>
      <div className="max-w-3xl flex justify-start mt-4 mb-6">
      <RoundedButton name="Details on Qruil" url="https://qruil.com/job-detail/industry-relations-officer-1743643231829" />
      </div>
      </div>
      
      <hr />
      
      <div className="prose lg:prose-xl prose-invert my-10">
      <h2>Development & Engagement</h2>
      <ul>
      <li>Facilitate community events and mentorship programs to enhance networking opportunities and professional development</li>
      <li>Engage socially with current and prospective SoDA members and ASU at large to create a welcoming environment to people of all backgrounds</li>
      </ul>
      <div className="max-w-3xl flex justify-start mt-4 mb-6">
      <RoundedButton name="Details on Qruil" url="https://qruil.com/job-detail/professional-development-and-community-engagement-specialist-(dande)-1742971838660" />
      </div>
      </div>
      
      <hr className="my-10 border-gray-600" /> {/* Added HR */}
      
      <div className="prose lg:prose-xl prose-invert my-10">
      <h2>Technology</h2>
      <h3>Workshop Content Developer</h3>
      <ul>
      <li>Create comprehensive workshop content, including slides, handouts, and coding exercises</li>
      <li>Present and instruct workshops, ensuring participant engagement and understanding</li>
      <li>Continuously update and improve workshop materials based on feedback and advancements in the field</li>
      </ul>
      <h3>Special Events Organizer</h3>
      <ul>
      <li>Hackathon problem statement selection and judging panel coordination</li>
      <li>Competitive programming contest organization and problem design</li>
      <li>Bootcamp organization, instructional design, and speaker coordination</li>
      </ul>
      <h3>Internal Tools Developer</h3>
      <ul>
      <li>Internal software, tools, and automations</li>
      <li>Web development, database management, and API integrations</li>
      </ul>
      </div>
      <div className="max-w-3xl flex justify-start mt-4">
      <RoundedButton name="Details on Qruil" url="https://qruil.com/job-detail/technology-specialist-1742972015408" />
      </div>
      </div>
    );
  }
  