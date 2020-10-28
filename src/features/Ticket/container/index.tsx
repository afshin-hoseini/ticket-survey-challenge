import React, { FC, useMemo } from 'react';
import { SurveyEntryType, SurveyTicketID } from 'src/@types';
import { ticketDataset } from 'src/dataSource/tickets';
import { useTicketSell } from 'src/features/TicketSellContext';
import { TicketAndDetails } from '../components/TicketAndDetails';
import { createProcessedQnA } from '../utils';

export const Ticket: FC = () => {
  const { currentEntry, surveyAnswer, survey, prevEntries, reset } = useTicketSell();

  const tickets = useMemo(() => {
    if (!currentEntry || currentEntry.type !== SurveyEntryType.Ticket) return undefined;

    const entry = currentEntry as SurveyTicketID;
    const ticketIds = Array.isArray(entry.id) ? entry.id : [entry.id];
    return ticketIds.map((id) => ticketDataset[id as keyof typeof ticketDataset]);
  }, [currentEntry]);

  const proccessedQna = useMemo(() => createProcessedQnA(survey!, surveyAnswer!, prevEntries!, 0), [
    prevEntries,
    survey,
    surveyAnswer,
  ]);

  if (tickets) return <TicketAndDetails tickets={tickets} answers={proccessedQna} reset={reset} />;
  return null;
};
