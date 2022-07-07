import React from 'react';
import ProfileSection from '../Component/ProfileSection';
import AboutSection from '../Component/AboutSection';
import ServicesSection from '../Component/ServicesSection';
import ProjectSection from '../Component/ProjectSection';
// import ContactBanner from '../Component/ContactBanner';

export default function Home() {
  return (
    <div>
      <ProfileSection />
      <AboutSection />
      <ServicesSection />
      <ProjectSection />
      {/* <ContactBanner /> */}
    </div>
  );
}
