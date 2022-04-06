import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';

const FooterStyle = styled.div`
  padding-top: 10rem;
  background-color: var(--deep-dark);
  .container {
    display: flex;
    gap: 2rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
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
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
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
          <h1 className="footer__col1__title">Ariful Islam</h1>
          <PText>
            A React Web developer and designer from Chittagong, Bangladesh. I
            always try to make unique websites with attractive outlook.
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
                title: '+8801303878441',
                path: 'tel:+8801303878441',
              },
              {
                title: 'ariful.islam41@outlook.com',
                path: 'mailto:ariful.islam41@outlook.com',
              },
              {
                title: 'Chittagong, Bangladesh',
                path:
                  'https://www.google.com.bd/maps/@22.3581216,91.816097,17.17z',
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
                path: 'https://www.facebook.com/arif1541/',
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
      <div className="copyright">
        <div className="container">
          <PText>© 2022 - Ariful Islam | Designed by Arif_41 </PText>
        </div>
      </div>
    </FooterStyle>
  );
}
