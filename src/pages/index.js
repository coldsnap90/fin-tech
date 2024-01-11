import React, { useState } from "react";
import HeroSection from "../components/heroSection";
import InfoSection from "../components/infoSection";
import { Navbar } from "./../components/navbar";
import { Sidebar } from "./../components/sidebar";

import Image1 from "../images/design-notes.svg";
import Image2 from "../images/space.svg";
import InfoSectionLight from "../components/infoSectionLight";
import Services from "../components/services";
import Footer from "../components/footer";

export const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection
        image={Image1}
        id="about"
        subtitle="About Us"
        title="Client-Centric Approach"
        text="At the heart of our business is a client-centric approach. We take the time to understand your unique financial situation, goals, and aspirations. By fostering long-term relationships built on trust and transparency, we strive to be more than just financial service providers – we aim to be your reliable partner on your financial journey."
        
      />
      <InfoSectionLight
        image={Image2}
        id="discover"
        subtitle=""
        title="Expertise You Can Trust."
        text="Backed by a team of skilled financial advisors, analysts, and planners, we bring a wealth of knowledge and expertise to the table. Our professionals stay abreast of industry trends, regulatory changes, and market developments to provide you with the most up-to-date and informed financial advice."
        
      />
      <Services />
      <InfoSectionLight
        image={Image1}
        id="#"
        subtitle=""
        title="Your Financial Success, Our Priority"
        text="Whether you're an individual looking to secure your financial future or a business aiming for sustainable growth, [Your Company Name] is dedicated to helping you achieve success. Discover the difference of working with a financial partner that puts your needs first.
              Thank you for considering Fin-Tech as your trusted ally in financial prosperity. We look forward to embarking on this journey with you."
        
      />
      <Footer />
    </>
  );
};
