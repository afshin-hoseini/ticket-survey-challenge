import React, { FC } from 'react';
import { Description, Title } from 'src/components/Typography';
import { QnaPreviewComponentProps, TicketAndDetailsComponentProps } from '../../@types';
import { TicketComponent } from '../Ticket';
import './styles.css';

export const TicketAndDetails: FC<TicketAndDetailsComponentProps> = ({ answers, ticket }) => {
  return (
    <div className="--tck-and-details">
      <TicketComponent ticket={ticket} />
      <QnaPreview qnas={answers} />
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
