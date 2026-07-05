import Image from "next/image";
import {
  Download,
  Globe,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="hero-section" id="hero">
      <div className="container" style={{textAlign:'center'}}>
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

        <div className="green-badge"><span className="green-dot"></span>Available · Open to opportunities</div>

    
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
          Frontend Developer with 4+ years of experience building scalable, high-performance SPAs using Angular, React.js, Next.js, and TypeScript. Passionate about clean architecture, responsive UI, and real-time applications.
        </p>

        {/* Location */}

        <div className="hero-location">
          <div>
            <MapPin size={18} />
            Pune, Maharashtra, India
          </div>

          <div><Globe size={18}/> Remote & On-site</div>
        </div>

        {/* Buttons */}

        <div className="hero-buttons">
         
          <a
            href="https://www.linkedin.com/in/aniket-sadaphale-177b5a186/"
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
            href="tel:+917028732496"
            className="hero-btn"
          >
            <Phone size={16} /> Call
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