import React, { FC, useCallback, useEffect, useState } from 'react';
import { SurveyAnswerMap, SurveyEntryType, SurveyFieldValue, SurveyForm } from 'src/@types';
import { SurveyContainerProps } from '../@types';
import { SurveyFormComponent } from '../components/SurveyFormComponent';
import { survey1 } from 'src/formDefinitions/survey1';
import { getNextSurveyEntry } from '../utils';

export const Survey: FC<SurveyContainerProps> = ({ survey = survey1 }) => {
  const [answers, setAnswers] = useState<SurveyAnswerMap>({});
  const [currentForm, setCurrentForm] = useState<SurveyForm>();

  const handleSubmit = useCallback((formName: string, values: { [k: string]: SurveyFieldValue }) => {
    setAnswers((prev) => ({ ...prev, [formName]: { ...values } }));
  }, []);

  useEffect(() => {
    const nextEntry = getNextSurveyEntry(survey, answers);
    if (nextEntry?.type === SurveyEntryType.Form) {
      setCurrentForm(nextEntry as SurveyForm);
    } else {
      // We reached the ticket
    }
  }, [answers, survey]);

  return currentForm ? <SurveyFormComponent form={currentForm} onSubmit={handleSubmit} /> : null;
};
