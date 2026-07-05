"use client";

import { Code2, Layers, Rocket, Users } from "lucide-react";
import HeaderSection from "./ui/Header";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    text: "Component-based architecture with reusable, maintainable patterns.",
  },
  {
    icon: Layers,
    title: "State Management",
    text: "Redux Toolkit, NgRx, RxJS, RTK Query and Context API.",
  },
  {
    icon: Rocket,
    title: "Performance",
    text: "SSR, lazy loading, code splitting and optimized rendering.",
  },
  {
    icon: Users,
    title: "Collaboration",
    text: "Cross-team work with backend, design and product stakeholders.",
  },
];

export default function About() {
  return (
    <section className="about-section" id="about">
        <HeaderSection number="01. ABOUT" title="A bit about me"/>
      <div className="container">

        <div className="about-grid">

          <div className="hero-description">
            <p>
              I'm a <strong>Frontend Developer</strong> with <strong>4+ years</strong>
              of experience building scalable single-page applications using
              <span className="highlight"> Angular, React.js and Next.js</span>.
              I've delivered real-time platforms, admin dashboards,
              white-label products and CRM tools for gaming, retail and
              enterprise clients.
            </p>

            <p>
              I enjoy building reusable components, writing clean code,
              implementing efficient state management and creating responsive,
              high-performance user interfaces that provide a great user
              experience.
            </p>
          </div>

          <div className="about-cards">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div className="about-card" key={item.title}>
                  <Icon size={18} className="about-icon" />

                  <h3>{item.title}</h3>

                  <p>{item.text}</p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}