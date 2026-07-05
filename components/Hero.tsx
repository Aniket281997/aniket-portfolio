import Image from "next/image";
import {
  Download,
  Mail,
  MapPin,
} from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="profile-wrapper">
          <div className="profile-ring">
            <Image
              src="/profile.png"
              alt="Aniket Sadaphale"
              width={160}
              height={160}
              className="profile-image"
              priority
            />
          </div>
        </div>

    
        {/* Name */}

        <h1 className="hero-title">
          Aniket Sadaphale
        </h1>

        {/* Designation */}

        <h2 className="hero-subtitle">
          {"< "}
          Frontend Developer
          {" />"}
        </h2>

        {/* Description */}

        <p className="hero-description">
          Frontend Developer with 4+ years of experience building
          scalable web applications using Angular, React, Next.js,
          TypeScript, and modern frontend technologies.
        </p>

        {/* Location */}

        <div className="hero-location">
          <div>
            <MapPin size={18} />
            Pune, Maharashtra, India
          </div>

          <div>🌍 Available for remote and on-site opportunities</div>
        </div>

        {/* Buttons */}

        <div className="hero-buttons">
         
          <a
            href="https://linkedin.com"
            target="_blank"
            className="hero-btn"
          >
            <FaLinkedinIn  size={18} />
            LinkedIn
          </a>

          <a
            href="mailto:aniketsadaphale97@gmail.com"
            className="hero-btn"
          >
            <Mail size={18} />
            Email
          </a>

          <a
            href="/resume.pdf"
            className="hero-btn primary"
          >
            <Download size={18} />
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}