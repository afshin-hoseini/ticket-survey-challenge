import React, { FC, useMemo } from 'react';
import { SurveyEntryType, SurveyTicketID } from 'src/@types';
import { ticketDataset } from 'src/dataSource/tickets';
import { useTicketSell } from 'src/features/TicketSellContext';
import { TicketComponent } from '../components/Ticket';
import { TicketAndDetails } from '../components/TicketAndDetails';
import { createProcessedQnA } from '../utils';

export const Ticket: FC = () => {
  const { currentEntry, surveyAnswer, survey, prevEntries, reset } = useTicketSell();

  const ticket = useMemo(() => {
    if (!currentEntry || currentEntry.type !== SurveyEntryType.Ticket) return undefined;
    return ticketDataset[(currentEntry as SurveyTicketID).id as keyof typeof ticketDataset];
  }, [currentEntry]);

  const proccessedQna = useMemo(() => createProcessedQnA(survey!, surveyAnswer!, prevEntries!, 0), [
    prevEntries,
    survey,
    surveyAnswer,
  ]);

  if (ticket) return <TicketAndDetails ticket={ticket} answers={proccessedQna} reset={reset} />;
  return null;
};
