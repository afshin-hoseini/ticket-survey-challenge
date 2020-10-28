import React, { FC, useMemo, useState } from 'react';
import { Button } from 'src/components/Button';
import { ButtonMode } from 'src/components/Button/@types';
import { Description, Title } from 'src/components/Typography';
import { QnaPreviewComponentProps, TicketAndDetailsComponentProps } from '../../@types';
import { TicketComponent } from '../Ticket';
import './styles.css';

export const TicketAndDetails: FC<TicketAndDetailsComponentProps> = ({ answers, tickets, reset }) => {
  const [expandedTicketId, setExpandedTicketId] = useState<string>(tickets?.[0]?.id || '');
  const ticketElements = useMemo(() => {
    return tickets?.map((ticket) => (
      <TicketComponent
        className="ticket-item"
        ticket={ticket}
        key={ticket.id}
        isExpanded={expandedTicketId === ticket.id}
        onExpandRequested={setExpandedTicketId}
      />
    ));
  }, [expandedTicketId, tickets]);

  return (
    <div className="--tck-and-details">
      <div className="body">
        <div className="tickets-container">{ticketElements}</div>
        <QnaPreview qnas={answers} />
      </div>

      <div className="button-container">
        <Button mode={ButtonMode.danger} onClick={reset}>
          Reset
        </Button>
      </div>
    </div>
  );
};

const QnaPreview: FC<QnaPreviewComponentProps> = ({ qnas }) => {
  return (
    <div className="--qna-preview">
      <Title className="title">Our offer is based on your answers:</Title>
      {qnas.map((qna) => (
        <div className="qna-item">
          <Description className="question">{qna.question}</Description>
          <Description>{qna.answer}</Description>
        </div>
      ))}
    </div>
  );
};
