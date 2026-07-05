"use client";

import HeaderSection from "./ui/Header";

const skills = [
  {
    title: "Frontend",
    items: ["Angular", "React.js", "Next.js", "JavaScript", "TypeScript", "HTML5"],
  },
  {
    title: "UI Frameworks",
    items: ["Angular Material", "PrimeNG", "Bootstrap"],
  },
  {
    title: "State Management",
    items: ["NgRx", "Redux Toolkit", "RxJS"],
  },
  {
    title: "Concepts & Architecture",
    items: ["REST APIs", "WebSocket", "Lazy Loading", "Axios", "Responsive Design", "Cross-Browser Compatibility"],
  },
  {
    title: "Tools & Version Control",
    items: ["Git", "Bitbucket", "VS Code", "Postman"],
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