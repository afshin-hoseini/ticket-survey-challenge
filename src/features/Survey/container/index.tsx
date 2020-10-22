import React, { FC, useCallback, useEffect, useState } from 'react';
import { SurveyAnswerMap, SurveyEntryType, SurveyFieldValue, SurveyForm, SurveyTicketID } from 'src/@types';
import { SurveyContainerProps } from '../@types';
import { SurveyFormComponent } from '../components/SurveyFormComponent';
import { survey1 } from 'src/formDefinitions/survey1';
import { getNextSurveyEntry } from '../utils';

export const Survey: FC<SurveyContainerProps> = ({ survey = survey1 }) => {
  const [answers, setAnswers] = useState<SurveyAnswerMap>({});
  const [currentForm, setCurrentForm] = useState<SurveyForm>();
  const [ticket, setTicket] = useState<SurveyTicketID>();

  const handleSubmit = useCallback((formName: string, values: { [k: string]: SurveyFieldValue }) => {
    setAnswers((prev) => ({ ...prev, [formName]: { ...values } }));
  }, []);

  useEffect(() => {
    const nextEntry = getNextSurveyEntry(survey, answers);
    if (nextEntry?.type === SurveyEntryType.Form) {
      setCurrentForm(nextEntry as SurveyForm);
    } else {
      setTicket(nextEntry as SurveyTicketID);
    }
  }, [answers, survey]);

  if (ticket) return <span>Ticket ID = {ticket.id}</span>;
  if (currentForm) return <SurveyFormComponent form={currentForm} onSubmit={handleSubmit} />;
  return null;
};
