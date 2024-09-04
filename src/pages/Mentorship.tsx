import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const markdownContent = `
# Mentorship Program Details

## Overview

The Mentorship Program is designed to connect underclassmen with experienced upperclassmen to foster professional growth and development. This initiative, in collaboration with the Software Developers Association (SoDA), aims to provide valuable guidance and support to students through a structured mentoring process.

- **Program Idea:** Pair underclassmen with upperclassmen for mentorship.
- **Collaboration:** Partnered with SoDA.
- **Team Size:** 3-5 individuals to manage applications and mentor/mentee pairings.
- **Estimated Duration:** 3-4 weeks for the entire process.

## Timeline

1. **Late July/Early August:** Poll officers to find 10-15 mentors, including backups.
2. **Create Application Forms:** Develop forms for both mentors and mentees.
3. **Distribute Forms:** Send out application forms after the first or second General Body Meeting (GBM).
4. **Assign Mentors:** Match mentors with mentees.
5. **Announce Program:** Reveal the program details at the first meeting.

## Mentor Responsibilities

- Provide mentees with resume reviews.
- Offer tips for securing internships.
- Share professional insights and support.

## Program Structure

### Mentorship Options

1. **One-on-One Pairing:** Direct pairing of one mentor with one mentee.
2. **Group Mentorship:** Groups of mentors assisting groups of mentees.

### Communication

- **Discord Channel:** Dedicated space for mentors and mentees to communicate.
- **Mentorship/Office Hours:** Scheduled times for direct interaction and support.

### End-of-Program Project

Mentees will work on projects with their mentors, including:

1. **Build an App:** Contribute to a SoDA or CodeDevils project.
2. **Create a Portfolio Website:** Develop a personal or SoDA-related website.
3. **AI-Related Project:** Engage in a project related to artificial intelligence.
4. **Free Choice:** Select a project of personal interest.

## Participant Benefits

### Mentors

- **Volunteer Opportunity:** Contribute to the professional growth of students.
- **Special Privileges:** Potential access to industry speakers and events.
- **Certificate of Mentorship:** Enhance your resume with formal recognition.
- **Potential Rewards:** Gift cards or other incentives.

### Mentees

- **Personalized Help:** Receive tailored advice and support.
- **Skill Expansion:** Gain new skills from workshops and practical experience.
- **Support System:** Benefit from a structured support system, particularly useful during the freshman year.
- **Resume Review:** Get feedback and improvement tips for your resume.

## Application Process

1. **Submit Resume and Application Form:** Provide necessary documentation and information.
2. **Short Interview:** Participate in an interview with 2-3 mentors.
3. **Evaluation Criteria:** Assessment based on involvement in SoDA, skills demonstrated through the resume and workshops, and potential gain from the program.

## Notes for Future Consideration

- **Intern/Mid-Season Hiring:** Explore the possibility of hiring successful mentees.
- **Incentives for Mentors:** Develop better incentives to attract and retain mentors.
- **Mentor/Mentee-Specific Events:** Consider organizing exclusive events for mentors and mentees.
- **Stipends for Mentors:** Investigate the possibility of providing stipends for mentors.
`;

export default function Mentorship() {
  return (
    <div className="max-w-4xl mx-auto p-6 mt-20  shadow-md rounded-lg">
      <h1 className="section-header-text">Mentorship Program 🧑‍🏫</h1>
      <ReactMarkdown
        children={markdownContent}
        remarkPlugins={[remarkGfm]}
        className="prose lg:prose-xl"
      />
    </div>
  );
}
