"use client";
const projects = [{
    title: "iGaming Platform",
    description:
      "Developed a scalable white-label iGaming platform with multi-brand support, authentication, wallet integration, multilingual support and responsive UI. Integrated REST APIs and optimized application performance.",
    tech: [
      "Next.js",
      "React.js",
      "TypeScript",
      "Redux Toolkit",
      "RTK Query",
      "WebSocket",
    ],
  },]
// const projects = [
//   {
//     title: "iGaming Platform",
//     description:
//       "Developed a scalable white-label iGaming platform with multi-brand support, authentication, wallet integration, multilingual support and responsive UI. Integrated REST APIs and optimized application performance.",
//     tech: [
//       "Next.js",
//       "React.js",
//       "TypeScript",
//       "Redux Toolkit",
//       "RTK Query",
//       "WebSocket",
//     ],
//   },
//   {
//     title: "Smart Office",
//     description:
//       "Built an office management platform for appointment scheduling, visitor management, event tracking and dashboards. Developed reusable Angular components and integrated REST APIs.",
//     tech: [
//       "Angular",
//       "TypeScript",
//       "Angular Material",
//       "RxJS",
//       "REST API",
//       "SCSS",
//     ],
//   },
//   {
//     title: "Lucky Spin Wheel",
//     description:
//       "Created an interactive lucky spin wheel with campaign management, configurable rewards, animations, winner history and responsive UI for promotional events.",
//     tech: [
//       "React.js",
//       "TypeScript",
//       "Redux Toolkit",
//       "Konva.js",
//       "RTK Query",
//       "REST API",
//     ],
//   },
//   {
//     title: "Mariomint Campaign",
//     description:
//       "Developed a marketing campaign management platform with user import, campaign creation, coupon management, template builder and analytics dashboard.",
//     tech: [
//       "Next.js",
//       "React.js",
//       "TypeScript",
//       "Redux",
//       "Tailwind CSS",
//       "REST API",
//     ],
//   },
// ];

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">

        <span className="experience-subtitle">
          // 02. PROJECTS
        </span>

        <h2 className="experience-title">
          What I've Built
        </h2>

        <div className="project-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="tech-stack">
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