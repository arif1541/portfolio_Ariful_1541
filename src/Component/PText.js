import React from 'react';
import styled from 'styled-components';

const PStyle = styled.div`
  max-width: 600px;
  margin: 0 auto;
  font-size: 2rem;
  line-height: 1.3em;
  .pText_color {
    color: var(--white);
  }
  @media only screen and (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

export default function PText({ children }) {
  return (
    <PStyle className="para">
      <p className="pText_color">{children}</p>
    </PStyle>
  );
}
