import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import projectImg from '../assets/images/projectImg.png';

const ProjectItemStyles = styled.div`
  margin-bottom: 12rem;
  .projectItem__img {
    width: 100%;
    height: 400px;
    overflow: hidden;
    border-radius: 12px;
    display: inline-block;
    border: 3px solid var(--black);
    img {
      height: 100%;
    }
  }
  .projectItem__info {
    margin-top: 1rem;
    background-color: var(--white);
    border: 5px solid var(--milk-white);
    padding: 1rem;
  }
  .projectItem__Title {
    color: var(--black);
    font-size: 2.2rem;
  }
  .projectItem__desc {
    font-size: 1.6rem;
    font-family: 'RobotoMono Regular';
    margin-top: 1rem;
    color: var(--black);
  }

  @media only screen and (max-width: 768px) {
    .projectItem__img {
      height: 350px;
    }
  }
  .project__button {
    display: inline-block;
    font-size: 1.8rem;
    text-decoration: underline;
    margin: 2rem 0;
    color: royalblue;
  }
`;

export default function ProjectItem({
  img = projectImg,
  title = 'Project Name',
  desc = 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.',
  link,
}) {
  return (
    <ProjectItemStyles>
      <Link to="/projects" className="projectItem__img">
        <img src={img} alt="project img" />
      </Link>
      <div className="projectItem__info">
        <Link>
          <h3 className="projectItem__Title">{title}</h3>
        </Link>
        <p className="projectItem__desc">{desc}</p>
        {/* {link && (
          <a
            className="project__button"
            href={link}
            target="_blank"
            rel="noreferrer"
          >
            Open Project
          </a>
        )} */}
      </div>
    </ProjectItemStyles>
  );
}
