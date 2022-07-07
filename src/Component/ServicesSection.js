import React from 'react';
import styled from 'styled-components';
import { MdAccessibility, MdPhonelinkSetup } from 'react-icons/md';
import { RiCommunityFill } from 'react-icons/ri';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';

const ServicesItemStyles = styled.div`
  padding: 18rem 0;
  .services__allItems {
    display: flex;
    gap: 5rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 900px) {
    .services__allItems {
      flex-direction: column;
      max-width: 400px;
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
        <SectionTitle heading="Services" subheading="what we will do for you" />

        <div className="services__allItems">
          <ServicesSectionItem
            icon={<MdAccessibility />}
            title="Architectural Consultancy"
            desc="I do UI/UX design for the website that helps website to get unique look"
          />
          <ServicesSectionItem
            icon={<RiCommunityFill />}
            title="Interior Construction"
            desc="I also develop the websites. I create high performance websites with blazing fast speed"
          />
          <ServicesSectionItem
            icon={<MdPhonelinkSetup />}
            title="Visualization"
            desc="I develop mobile application app with eye catching UI"
          />
        </div>
      </div>
    </ServicesItemStyles>
  );
}
