import React from 'react';
import styled from 'styled-components';

const PStyle = styled.div`
  max-width: 550px;
  margin: 0 auto;
  font-size: 1.7rem;
  line-height: 1.22em;
  .pText_color {
    color: var(--deep-dark);
  }
  @media only screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export default function PText({ children }) {
  return (
    <PStyle className="para">
      <p className="pText_color">{children}</p>
    </PStyle>
  );
}
