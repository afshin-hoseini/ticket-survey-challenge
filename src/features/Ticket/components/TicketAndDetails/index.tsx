import React, { FC } from 'react';
import { Button } from 'src/components/Button';
import { ButtonMode } from 'src/components/Button/@types';
import { Description, Title } from 'src/components/Typography';
import { QnaPreviewComponentProps, TicketAndDetailsComponentProps } from '../../@types';
import { TicketComponent } from '../Ticket';
import './styles.css';

export const TicketAndDetails: FC<TicketAndDetailsComponentProps> = ({ answers, ticket, reset }) => {
  return (
    <div className="--tck-and-details">
      <div className="body">
        <TicketComponent ticket={ticket} />
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
