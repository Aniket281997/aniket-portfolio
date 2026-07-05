"use client";

const experiences = [
  {
    side: "left",
    duration: "May 2024 - Apr 2026",
    title: "Frontend Developer",
    company: "Autotroph Infotech",
    points: [
      "Developed scalable web applications using React.js, Next.js and TypeScript.",
      "Built reusable UI components for multiple products.",
      "Integrated REST APIs and WebSocket for real-time applications.",
      "Optimized performance using SSR, lazy loading and code splitting.",
      "Worked with Redux Toolkit, RTK Query and Context API."
    ],
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Redux",
      "RTK Query",
      "WebSocket"
    ]
  },
  {
    side: "right",
    duration: "2021 - 2024",
    title: "Frontend Developer",
    company: "Projects & Freelancing",
    points: [
      "Built responsive websites and admin dashboards.",
      "Developed reusable component libraries.",
      "Integrated authentication and payment gateways.",
      "Collaborated with backend developers."
    ],
    skills: [
      "React",
      "JavaScript",
      "Tailwind",
      "Node.js",
      "Express",
      "MongoDB"
    ]
  }
];

export default function Experience() {
  return (
    <section className="experience-section" id="experience">

      <span className="experience-subtitle">
        // 01. EXPERIENCE
      </span>

      <h2 className="experience-title">
        My Professional Journey
      </h2>

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