import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';

const FooterStyle = styled.div`
  padding-top: 10rem;
  padding-bottom: 4rem;
  background-color: var(--black);
  .container {
    display: flex;
    gap: 2rem;
  }
  .pText_color {
    color: var(--white);
    font-size: 1.8rem;
    margin-bottom: 1rem;
    text-align: right;
    margin-right: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__inv {
    display: none;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: -1;
  }
  .footer__col1__title {
    font-size: 3.7rem;
    margin-bottom: 1rem;
    text-align: right;
    margin-right: 3rem;
    color: var(--milk-white);
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 810px) {
    padding-top: 5rem;
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1__title {
      max-width: 100%;
      text-align: center;
    }
    .pText_color {
      font-size: 1.6rem;
      margin-bottom: 1rem;
      text-align: center;
    }
    .P .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">RENE ARCHITECTS</h1>
          <PText>
            Rene Architects is a progressive architectural consultancy firm
            providing high-quality solutions in all aspects of architectural
            services.
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            Links={[
              {
                title: 'Home',
                path: '/',
                type: 'Link',
              },
              {
                title: 'About',
                path: '/about',
                type: 'Link',
              },
              {
                title: 'Projects',
                path: '/projects',
                type: 'Link',
              },
              {
                title: 'Contact',
                path: '/contact',
                type: 'Link',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            Links={[
              {
                title: '+8801521485348',
                path: 'tel:+8801521485348',
              },
              {
                title: 'renearchitects@gmail.com',
                path: 'mailto:renearchitects@gmail.com',
              },
              {
                title: 'Chittagong, Bangladesh',
                path:
                  'https://www.google.com/maps/place/RENE+Architects/@22.3467779,91.8358348,17z/data=!4m12!1m6!3m5!1s0x30ad27a80e47b709:0xe5872a07c5800a54!2sRENE+Architects!8m2!3d22.3467779!4d91.8380235!3m4!1s0x30ad27a80e47b709:0xe5872a07c5800a54!8m2!3d22.3467779!4d91.8380235',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="Social Links"
            Links={[
              {
                title: 'Facebook',
                path: 'https://www.facebook.com/renearchitects',
              },
              {
                title: 'Instagram',
                path: 'https://www.instagram.com/arif_1541/',
              },
              {
                title: 'Twitter',
                path: 'https://twitter.com/Arif_1541',
              },
            ]}
          />
        </div>
      </div>
      {/* <div className="copyright">
        <div className="container">
          <PText>© 2022 - Ariful Islam | Designed by Arif_41 </PText>
        </div>
      </div> */}
    </FooterStyle>
  );
}
