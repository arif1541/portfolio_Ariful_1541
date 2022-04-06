import React from 'react';
import styled from 'styled-components';
import { MdDesktopMac, MdCode, MdPhonelinkSetup } from 'react-icons/md';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';

const ServicesItemStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServicesSection() {
  return (
    <ServicesItemStyles>
      <div className="container">
        <SectionTitle heading="Services" subheading="what I will do for you" />

        <div className="services__allItems">
          <ServicesSectionItem
            icon={<MdDesktopMac />}
            title="Website Design"
            desc="I do UI/UX design for the website that helps website to get unique look"
          />
          <ServicesSectionItem
            icon={<MdCode />}
            title="Web Development"
            desc="I also develop the websites. I create high performance websites with blazing fast speed"
          />
          <ServicesSectionItem
            icon={<MdPhonelinkSetup />}
            title="Website Design"
            desc="I develop mobile application app with eye catching UI"
          />
        </div>
      </div>
    </ServicesItemStyles>
  );
}
