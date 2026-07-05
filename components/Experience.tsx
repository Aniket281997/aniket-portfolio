"use client";

import HeaderSection from "./ui/Header";

const experiences = [
  {
    side: "left",
    duration: "May 2024 - Apr 2026",
    title: "Frontend Developer",
    company: "Autotroph Infotech",
    points: [
      "Built client-facing applications using Next.js with SSR and developed React.js admin dashboards for efficient data management.",
      "Integrated REST APIs and WebSocket technology to enhance real-time functionality.",
      "Developed reusable Angular and React components improving development efficiency.",
      "Implemented white-label solutions with customizable themes including light and dark mode support.",
      "Validated cross-browser compatibility and optimized responsive design across multiple devices."
    ],
    skills: ["React.js", "Next.js", "Angular", "TypeScript", "WebSocket", "REST API"]
  },
  {
    side: "right",
    duration: "Feb 2022 - Apr 2024",
    title: "Software Developer",
    company: "Infeon IT Services",
    points: [
      "Developed Angular components, CRUD modules, and reusable UI elements to enhance application functionality.",
      "Developed and deployed comprehensive Angular applications for retail and political sectors.",
      "Integrated PrimeNG components and developed complex form validations.",
      "Contributed to UI/UX discussions and maintained consistent branding across modules.",
      "Worked on performance optimization, accessibility compliance, and cross-browser support."
    ],
    skills: ["Angular", "PrimeNG", "TypeScript", "RxJS", "Bootstrap"]
  }
];

export default function Experience() {
  return (
    <section className="sections" id="experience">
      <HeaderSection number="02. EXPERIENCE" title="My Professional Journey" />

      <div className="timeline">

        {experiences.map((item, index) => (
          <div
            key={index}
            className={`timeline-item ${item.side}`}
          >
            <div className="timeline-card">

              <div className="duration">
                {item.duration}
              </div>

              <h3>{item.title}</h3>

              <h4>{item.company}</h4>

              <ul>
                {item.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              <div className="skills">
                {item.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>

            </div>
          </div>
        ))}

      </div>

    </section>
  );
}