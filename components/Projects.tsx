"use client";

import HeaderSection from "./ui/Header";

const projects = [
  {
    title: "iGaming Platform",
    description: [
      "Built responsive websites and admin dashboards.",
      "Developed reusable component libraries.",
      "Integrated authentication and payment gateways.",
      "Collaborated with backend developers."
    ], tech: [
      "Next.js",
      "React.js",
      "TypeScript",
      "Redux Toolkit",
      "RTK Query",
      "WebSocket",
    ],
  },
  {
    title: "Smart Office",
    description: [
      "Built responsive websites and admin dashboards.",
      "Developed reusable component libraries.",
      "Integrated authentication and payment gateways.",
      "Collaborated with backend developers."
    ], tech: [
      "Angular",
      "TypeScript",
      "Angular Material",
      "RxJS",
      "REST API",
      "SCSS",
    ],
  },
  {
    title: "Lucky Spin Wheel",
    description: [
      "Built responsive websites and admin dashboards.",
      "Developed reusable component libraries.",
      "Integrated authentication and payment gateways.",
      "Collaborated with backend developers."
    ], tech: [
      "React.js",
      "TypeScript",
      "Redux Toolkit",
      "Konva.js",
      "RTK Query",
      "REST API",
    ],
  },
  {
    title: "Mariomint Campaign",
    description: [
      "Built responsive websites and admin dashboards.",
      "Developed reusable component libraries.",
      "Integrated authentication and payment gateways.",
      "Collaborated with backend developers."
    ],
    tech: [
      "Next.js",
      "React.js",
      "TypeScript",
      "Redux",
      "Tailwind CSS",
      "REST API",
    ],
  },
];

export default function Projects() {
  return (
    <section className="projects" id="projects">

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