import React, { FC } from 'react';
import { SurveyEntryType, SurveyForm } from 'src/@types';
import { SurveyContainerProps } from '../@types';
import { SurveyFormComponent } from '../components/SurveyFormComponent';
import { useTicketSell } from 'src/features/TicketSellContext';

export const Survey: FC<SurveyContainerProps> = ({}) => {
  const { backToPrevEntry, currentEntry, submitAnswer, prevEntries } = useTicketSell();

  const canDoBackAction = (prevEntries?.length ?? 0) > 0;

  if (currentEntry?.type === SurveyEntryType.Form)
    return (
      <SurveyFormComponent
        form={currentEntry as SurveyForm}
        onSubmit={submitAnswer}
        onBack={canDoBackAction ? backToPrevEntry : undefined}
      />
    );
  return null;
};
