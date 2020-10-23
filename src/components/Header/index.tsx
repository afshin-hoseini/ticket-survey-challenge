import React, { FC } from 'react';
import { Title } from 'src/components/Typography';
import './styles.css';

export const Header: FC = () => {
  return (
    <div className="--header-container">
      <Title className="title">Ticket Offer App</Title>
    </div>
  );
};
