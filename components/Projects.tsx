"use client";

import HeaderSection from "./ui/Header";

const projects = [
  {
    title: "iGaming Platform",
    description: [
      "Developed multiple white-label gaming platforms with customizable themes and client-specific configurations.",
      "Built category-based game listings, authentication flows, payment integrations, and responsive gaming interfaces.",
      "Implemented iframe-based game launching and dynamic content rendering modules.",
      "Integrated real-time functionality for user interactions and live updates.",
      "Built configurable theming system supporting light/dark mode and per-client branding.",
    ],
    tech: ["Next.js", "React.js", "TypeScript", "Redux Toolkit", "WebSocket", "REST API"],
  },
  {
    title: "Chatbot – Customer Support & Admin Management",
    description: [
      "Built a real-time customer support platform with separate Customer and Admin panels.",
      "Implemented role-based access control for Master Admin and Agents with permission-based page access.",
      "Enabled multi-bot management across multiple websites and platforms.",
      "Built customization modules for themes, fonts, colors, and predefined messages.",
    ],
    tech: ["React.js", "Redux Toolkit", "WebSocket", "REST API", "RTK Query"],
  },
  {
    title: "Mariomint - CRM (B2B)",
    description: [
      "Developed campaign automation modules for customer acquisition and engagement workflows.",
      "Built bulk customer import and categorization based on deposits and registration status.",
      "Implemented automated Email, SMS, and WhatsApp messaging workflows.",
      "Built hierarchy-based automation triggers for multi-level customer journeys.",
    ],
    tech: ["Next.js", "React.js", "TypeScript", "Redux", "Tailwind CSS", "REST API"],
  },
  {
    title: "Smart Office – Office Management Platform",
    description: [
      "Developed an Angular-based web application for politicians to manage meetings, visits, and events.",
      "Implemented event scheduling, record tracking, and dashboard modules.",
      "Built responsive UI using Angular Material for accessibility across devices.",
      "Optimized performance using lazy loading and reusable component architecture.",
    ],
    tech: ["Angular", "TypeScript", "Angular Material", "RxJS", "REST API"],
  },
];

export default function Projects() {
  return (
    <section className="projects sections" id="projects">

      <HeaderSection number="02. PROJECTS" title="What I've Built" />
      <div className="container">
        <div className="project-grid">
          {projects.map((project, index) => (
            <div className="timeline-card" key={index}>
              <h3>{project.title}</h3>

              <ul>
                {project.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              <div className="skills">
                {project.tech.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}