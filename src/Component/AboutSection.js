import React from 'react';

import styled from 'styled-components';
import Button from './Button';
import PText from './PText';
import SectionTitle from './SectionTitle';
import reneabout from '../assets/images/reneabout.PNG';

const AboutSectionStyle = styled.div`
  padding: 3rem 0;
  .container {
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
    // height: 100vh;
  }
  .aboutSection__left,
  .aboutSection__right {
    flex: 1;
    height: relative;
  }
  .aboutSection__right {
    overflow: hidden;
    border-radius: 12px;
    display: inline-block;
    border: 5px solid var(--milk-white);
  }
  // .aboutSection__right {
  //   margin-top: 6rem;
  //   flex: 1;
  //   height: 700px;
  // }
  .section-title {
    text-align: center;
    margin-bottom: 4rem;
  }
  .para {
    text-align: justify;
    max-width: 100%;
    background-color: var(--white);
    padding: 24px 20px;
    border-radius: 12px;
    display: inline-block;
    border: 5px solid var(--milk-white);
  }
  .aboutSection__buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 2rem;
  }
  @media only screen and (max-width: 950px) {
    .aboutSection__left {
      flex: 4;
    }
    .aboutSection__right {
      flex: 3;
    }
  }
  @media only screen and (max-width: 3000px) {
    .container {
      flex-direction: column;
      text-align: center;
    }
    .aboutSection__left,
    .aboutSection__right {
      width: 100%;
    }
    .aboutSection__right {
      margin-top: 3rem;
    }
    .section-title {
      text-align: center;
    }
    .para {
      margin: 0 auto;
      margin-top: 2rem;
    }
    .aboutSection__buttons {
      flex-direction: column;
      gap: 0;
      .button-wrapper,
      a {
        width: 100%;
        text-align: center;
      }
    }
  }
`;

export default function AboutSection() {
  return (
    <AboutSectionStyle>
      <div>
        <SectionTitle
          subheading="Let us introduce ourselves"
          heading="About us"
        />
      </div>
      <div className="container">
        <div className="aboutSection__left">
          <PText>
            Rene Architects is a progressive architectural consultancy firm
            providing high-quality solutions in all aspects of architectural
            services. Our range of expertise includes interior design, landscape
            design, visualization, and construction management. To date, we have
            completed over 250 projects all over the world in a multitude of
            sectors such as residential, commercial, institutional, urban,
            hotel, and recreational. Rene Architects is committed to identifying
            our client’s individual needs and goals. Our architects then plan
            cost-effective and creative solutions to meet all the requirements
            while maintaining clear communication with our clients throughout
            the project. We take pride in delighting our clients by completing
            the projects on budget and in due time. Our team of energetic
            architects is proficient in the latest technology and innovation in
            the sector. We at Rene Architect believe design is best done as a
            collaborative process, where we are mindful of the technical and
            functional aspects as much as the design and aesthetics while always
            prioritizing our clients first. We approach each project with the
            same vigor, no matter the scale or location. Our ambition is to be
            your most trusted design and construction partner as we aim to
            create architecture that is resourceful to the community, meaningful
            to society, and enriching for the end-user.
          </PText>
          {/* <div className="aboutSection__buttons">
            <Button btnLink="/projects" btnText="Works" />
            <Button btnLink="/about" btnText="Read More" outline />
          </div> */}
        </div>
        <div className="aboutSection__right">
          <img src={reneabout} alt="" />
        </div>
      </div>
    </AboutSectionStyle>
  );
}
