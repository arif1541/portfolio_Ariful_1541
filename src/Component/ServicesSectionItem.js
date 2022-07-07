import React from 'react';
import { MdDesktopMac } from 'react-icons/md';
import styled from 'styled-components';
import PText from './PText';

const ItemStyles = styled.div`
  text-align: center;
  border: 6px solid var(--milk-white);
  padding: 20px 20px;
  .servicesItem__icon {
    svg {
      width: 3.5rem;
    }
  }
  .servicesItem__title {
    font-size: 3rem;
    font-family: 'Montserrat SemiBold';
    color: var(--black);
  }
  .para {
    margin-top: 2rem;
  }
`;

export default function ServicesSectionItem({
  icon = <MdDesktopMac />,
  title = 'web design',
  desc = 'skjd sjds sjdhsj alkasnj alaks alskdlka alksdkljl alksior duisd',
}) {
  return (
    <ItemStyles>
      <div className="servicesItem__icon">{icon}</div>
      <div className="servicesItem__title">{title}</div>
      <PText>{desc}</PText>
    </ItemStyles>
  );
}
