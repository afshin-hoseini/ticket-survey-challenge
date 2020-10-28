import React, { FC, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { TicketComponentProps } from '../../@types';
import { RoutesViewer } from '../RoutesViewer';
import './styles.css';
import { TicketHeaderComponent } from './TicketHeader';

export const TicketComponent: FC<TicketComponentProps> = ({
  className = '',
  ticket,
  onExpandRequested,
  isExpanded,
}) => {
  const onExpand = useCallback(() => ticket && onExpandRequested?.(ticket.id), [onExpandRequested, ticket]);
  const bodyRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!bodyRef.current) return;
    bodyRef.current.style.maxHeight = `${bodyRef.current.scrollHeight}px`;
  }, [isExpanded]);

  const expandClassName = isExpanded ? 'expanded' : 'collapsed';

  return (
    <div className={`--ticket-container ${className} ${expandClassName}`}>
      <TicketHeaderComponent ticket={ticket} onClick={onExpand} className={expandClassName} isExpanded={isExpanded} />

      <div ref={bodyRef} className={`tck-body ${isExpanded ? 'expanded' : 'collapsed'}`}>
        <TicketPerforation />
        <div className="tck-details">
          <RoutesViewer routes={ticket?.routes} />
        </div>
      </div>

      <Clip />
    </div>
  );
};

const TicketPerforation = () =>
  useMemo(
    () => (
      <div className="tck-perforation">
        <div className="hole-left"></div>
        <div className="cut-line-container"></div>
        <div className="hole-right"></div>
      </div>
    ),
    []
  );
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
