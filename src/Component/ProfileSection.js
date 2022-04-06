import React from 'react';
import styledComponents from 'styled-components';
import profile from '../assets/images/profile.png';
import Button from './Button';
import PText from './PText';
import SocialMediaArrow from '../assets/images/social-media-arrow.svg';
import ScrollDownArrow from '../assets/images/scroll-down-arrow.svg';

const ProfileStyle = styledComponents.div`
  .profile{
    height: 100vh;
    min-height: 1000px;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .profile__heading {
    font-size: 2rem;
    margin-bottom: -4rem;
    position: relative;
    span{
      display: inline-block;
      width: 100%;
    }
    .profile__name{
      font-size: 7rem;
      font-family: "Montserrat SemiBold";
      color: var(--white);
    }
  }
  .profile__img{
    max-weidth: 900px;
    width: 100%;
    height: 550px;
    margin: 0 auto;
    border: 2px solid var(--gray-1);
    
  }
  .profile__info{
    margin-top: 1rem;
    .pText_color {
      color: var(--white);
    }
  }
  .profile__social,
  .profile__scrollDown{
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: absolute;
    bottom: 20px;
    width: 50px;
  }
  .profile__social{
    left: 50px;
  }
  .profile__scrollDown{
    right: 50px;
  }
  .profile__social__indicator, 
  .profile__scrollDown{
    width: 50px;
    p{
      font-size: 1.6rem;
      transform: translateY(-70px) rotate(90deg);
      letter-spacing: 0.7rem;
      text-transform: uppercase;
      color: var(--cream-white);
    }
    img{
      max-height: 45px;
      width: 16px;
      margin: 0 auto;
      object-fit: contain;
    }
  }
  .profile__scrollDown{
    img{
      max-height: 70px;
    }
  }
  .profile__social__text{
    ul{
      li{
        margin-bottom: 1rem;
      }
      a{
        display: inline-block;
        font-size: 1.6rem;
        transform: rotate(-90deg);
        letter-spacing: 5px;
        margin-bottom: 2rem;
        color: var(--cream-white);
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .profile{
      min-height: 750px;
    }
    .profile__heading{
      font-size: 1.4rem;
      margin-bottom: -3rem;
      .profile__name{
        font-size: 4.5rem;
      }
    }
    .profile__img{
      height: 300px;
    }
    .profile__info{
      margin-top: 3rem;
    }
    .profile__social{
      left: 0px;
      bottom: -15%;
      width: 20px;
      .profile__social__indicator{
        width: 20px;
        p{
          font-size: 1.2rem;
        }
        img{
          max-height: 22px;
        }
      }
      .profile__social__text{
        ul{
          li{
            a{
              font-size: 1.2 rem;
              margin-bottom: 1rem;
            }
          }
        }
      }
    }
    .profile__scrollDown{
      right: 0;
      width: 20px;
      gap: 1ewm;
      p{
        font-size: 1.3rem;
      }
    }
  }
`;

export default function ProfileSection() {
  return (
    <ProfileStyle>
      <div className="profile">
        <div className="container">
          <h1 className="profile__heading">
            <span>Hello, This is </span>
            <span className="profile__name">Ariful Islam</span>
          </h1>
          <div className="profile__img">
            <img src={profile} alt="" />
          </div>
          <div className="profile__info">
            <PText>
              I am working as a React front-end designer and developer. I am
              currently studying in CUET. And I also love photography and
              learning new things.
            </PText>
            <Button btnLink="/projects" btnText="see my works" />
          </div>
          <div className="profile__social">
            <div className="profile__social__indicator">
              <p>Follow</p>
              <img src={SocialMediaArrow} alt="social media arrow" />
            </div>
            <div className="profile__social__text">
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/arif1541/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    FB
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/ariful-islam-b84841144/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LI
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/arif1541/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    IG
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/Arif_1541"
                    target="_blank"
                    rel="noreferrer"
                  >
                    TW
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="profile__scrollDown">
            <p>Scroll</p>
            <img src={ScrollDownArrow} alt="scroll down arrow" />
          </div>
        </div>
      </div>
    </ProfileStyle>
  );
}
