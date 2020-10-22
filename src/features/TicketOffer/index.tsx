import React, { FC } from 'react';
import { SurveyEntryType } from 'src/@types';
import { Survey } from '../Survey/container';
import { Ticket } from '../Ticket/container';
import { useTicketSell } from '../TicketSellContext';

/**
 * It decides what to be shown based on ticket sell context state.
 */
export const TicketOffer: FC = () => {
  const { currentEntry } = useTicketSell();
  if (!currentEntry) return null;
  if (currentEntry.type === SurveyEntryType.Form) return <Survey />;
  if (currentEntry.type === SurveyEntryType.Ticket) return <Ticket />;

  return null;
};
