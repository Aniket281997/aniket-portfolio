import HeaderSection from "./ui/Header";
import Image from "next/image";
import {
  Download,
  Globe,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";

export default function Contact() {
  return (

    <section className="contact-section sections" id="contact">
      <HeaderSection
        number="05. CONTACT"
        title="Let's Work Together"
      />
        <div className="container" style={{ textAlign: 'center' }}>
          {/* Description */}

        <p className="hero-description">
  I'm currently available for full-time opportunities
  and exciting collaborations. Feel free to reach out anytime.
</p>

          {/* Buttons */}
          <a
            href="mailto:aniketsadaphale97@gmail.com"
            className="hero-btn primary email-card"
          >
            <Mail size={18} />
            aniketsadaphale97@gmail.com
          </a>
          
          <div className="hero-buttons">

            <a
              href="https://www.linkedin.com/in/aniket-sadaphale-177b5a186/"
              target="_blank"
              className="hero-btn"
            >
              <FaLinkedinIn size={18} color="#00d4ff" />
              <div className="contact-hero-card">
                  <p >LinkedIn</p>
              <p >aniket-sadaphale</p>
              </div>
            </a>

           
            <a
              href="tel:+917028732496"
              className="hero-btn"
            >
              <Phone size={18} color="#00d4ff"  /> 
              <div className="contact-hero-card">
                  <p >Phone</p>
              <p >+91 70287 32496</p>
              </div>
            </a>

          </div>
          <div className="hero-location">
          <div>
            <MapPin size={18} />
            Pune, Maharashtra, India
          </div>

        </div>
        </div>
      </section>
  );
}