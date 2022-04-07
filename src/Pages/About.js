import React from 'react';
import styled from 'styled-components';
import PText from '../Component/PText';
import AboutInfoItem from '../Component/AboutInfoItem';
import AboutImg from '../assets/images/AboutMe.jpg';
import ContactBanner from '../Component/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .cv__section {
    font-size: 2.2rem;
    color: var(--black);
    background-color: var(--white);
    padding: 1.2rem;
    border-radius: 8px;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .cv__section {
      font-size: 1.8rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 3rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <AboutPageStyles>
      <div className="container">
        <div className="top-section">
          <div className="left">
            <p className="about__subheading">
              Hi, I am <span>Ariful Islam</span>
            </p>
            <h2 className="about__heading">A React Web developer</h2>
            <div className="about__info">
              <PText>
                I am currently living at Chittagong, Bangladesh. It is a small
                and beautiful county at south Asia. I love to do different kinds
                of designs and creative things. And also love photography.
                <br /> <br />
                As i am currently studying in Computer Science and Engineering I
                came to know lot about tech things and I love to use them to be
                expart in developing creative things.
                <br /> <br />
                My vision is to do make the world a better place and I also love
                teaching. That is why I am trying to make learning easier by
                using my technological knowledge.
              </PText>
            </div>
            <a
              className="cv__section"
              href="https://drive.google.com/file/d/1gw3FohBghjKchI8SAkxA6LOJLLAPNCyG/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Open CV
            </a>
          </div>
          <div className="right">
            <img src={AboutImg} alt="Ariful Islam Img" />
          </div>
        </div>
        <div className="about__info__items">
          <div className="about__info__item">
            <h1 className="about__info__heading">Education</h1>
            <AboutInfoItem
              title="School"
              items={['Cumilla Cadet College, Kotbari, Cumilla']}
            />
            <AboutInfoItem
              title="College"
              items={['Cumilla Cadet College, Kotbari, Cumilla']}
            />
            <AboutInfoItem
              title="University"
              items={[
                'Chittagong University of Engineering and Technology, Raozan, Chittagong',
              ]}
            />
          </div>
          <div className="about__info__item">
            <h1 className="about__info__heading">My Skills</h1>
            <AboutInfoItem
              title="FrontEnd"
              items={['HTML', 'CSS', 'JavaScript', 'REACT']}
            />
            <AboutInfoItem title="BackEnd" items={['Node', 'Express']} />
            <AboutInfoItem
              title="Design"
              items={['Illustrator', 'Photoshop']}
            />
            <AboutInfoItem
              title="Others"
              items={['Microsoft Powerpoint', 'Microsoft Word', 'Latex']}
            />
          </div>
          <div className="about__info__item">
            <h1 className="about__info__heading">Experience</h1>
            <AboutInfoItem title="2019" items={['Intern at AnnaNovas IT']} />
          </div>
        </div>
      </div>
      <ContactBanner />
    </AboutPageStyles>
  );
}
