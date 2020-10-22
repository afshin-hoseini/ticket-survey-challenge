import React, { FC, useMemo } from 'react';
import { SurveyEntryType, SurveyTicketID } from 'src/@types';
import { ticketDataset } from 'src/dataSource/tickets';
import { useTicketSell } from 'src/features/TicketSellContext';
import { TicketComponent } from '../components/Ticket';

export const Ticket: FC = () => {
  const { currentEntry, surveyAnswer } = useTicketSell();

  const ticket = useMemo(() => {
    if (!currentEntry || currentEntry.type !== SurveyEntryType.Ticket) return undefined;
    return ticketDataset[(currentEntry as SurveyTicketID).id as keyof typeof ticketDataset];
  }, [currentEntry]);

  if (ticket) return <TicketComponent ticket={ticket} />;
  return null;
};
