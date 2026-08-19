"use client";

import HeaderSection from "./ui/Header";

const education = [
  {
    degree: "MSc (Software Engineering)",
    college: "MGM’S College of CS & IT, Nanded",
    duration: "Aug 2018 - Jun 2021",
  },
  {
    degree: "BSc (Computer Science)",
    college: "MGM’S College of CS & IT, Nanded",
    duration: "May 2015 - Jun 2018",
  },
];

export default function Education() {
  return (
    <section className="education-section sections" id="education">
      <HeaderSection
        number="05. EDUCATION"
        title="Education"
      />

      <div className="container">
        <div className="project-grid">
          {education.map((item) => (
            <div className="timeline-card" key={item.degree}>
              <div className="duration">
                {item.duration}
              </div>

              <h3>{item.degree}</h3>

              <h4>{item.college}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}