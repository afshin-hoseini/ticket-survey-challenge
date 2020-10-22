import React, { FC } from 'react';
import { TicketComponentProps } from '../../@types';
import { RoutesViewer } from '../RoutesViewer';
import './styles.css';
import { TicketHeaderComponent } from './TicketHeader';

export const TicketComponent: FC<TicketComponentProps> = ({ className = '' }) => {
  return (
    <div className={`--ticket-container ${className}`}>
      <TicketHeaderComponent />
      <div className="tck-perforation">
        <div className="hole-left"></div>
        <div className="cut-line-container"></div>
        <div className="hole-right"></div>
      </div>
      <div className="tck-details">
        <div className="tck-routes">
          <RoutesViewer />
        </div>
        <div className="tck-answers"></div>
      </div>
      <Clip />
    </div>
  );
};

const Clip = () => (
  <svg height={0}>
    <defs>
      <clipPath id="perforation-clip-left">
        <path d="m 0 0 a 5 5 0 0 1 0 20 h 10 v -20 h -10 z" />
      </clipPath>

      <clipPath id="perforation-clip-right">
        <path d="m 10 0 a 5 5 0 0 0 0 20 h -10 v -20 z" />
      </clipPath>
    </defs>
  </svg>
);

//m 0 0 a 30 15 0 0 1 0 20 h 20 v -20 h -20
