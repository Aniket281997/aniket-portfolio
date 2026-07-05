"use client";

import HeaderSection from "./ui/Header";

const skills = [
  {
    title: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "Angular",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "SCSS",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    title: "State Management",
    items: [
      "Redux Toolkit",
      "RTK Query",
      "Context API",
      "RxJS",
      "React Hooks",
      "NgRx",
    ],
  },
  {
    title: "Backend & APIs",
    items: [
      "Node.js",
      "Express.js",
      "REST API",
      "WebSocket",
      "JWT",
      "Firebase",
    ],
  },
  {
    title: "Tools & Others",
    items: [
      "Git",
      "GitHub",
      "VS Code",
      "Vercel",
      "Postman",
      "Figma",
      "Jira",
      "Webpack",
      "npm",
      "Yarn",
    ],
  },
];

export default function Skills() {
  return (
    <section className="skills-section sections" id="skills">
      <HeaderSection
        number="04. SKILLS"
        title="Technologies & Tools"
      />

      <div className="container">
        <div className="project-grid">
          {skills.map((category) => (
            <div className="timeline-card" key={category.title}>
              <h3>{category.title}</h3>

              <div className="skills">
                {category.items.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}