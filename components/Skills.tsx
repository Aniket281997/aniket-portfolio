"use client";

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
    <section className="skills-section" id="skills">
      <div className="container">

        <span className="section-subtitle">
          // 03. SKILLS
        </span>

        <h2 className="section-title">
          Technologies & Tools
        </h2>

        <div className="skills-grid">
          {skills.map((category) => (
            <div className="skill-card" key={category.title}>
              <h3>{category.title}</h3>

              <div className="skill-tags">
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