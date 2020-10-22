import React, { FC, useCallback, useEffect, useState } from 'react';
import {
  SurveyAnswerMap,
  SurveyEntry,
  SurveyEntryType,
  SurveyFieldValue,
  SurveyForm,
  SurveyTicketID,
} from 'src/@types';
import { SurveyContainerProps } from '../@types';
import { SurveyFormComponent } from '../components/SurveyFormComponent';
import { survey1 } from 'src/formDefinitions/survey1';
import { getNextSurveyEntry } from '../utils';

export const Survey: FC<SurveyContainerProps> = ({ survey = survey1 }) => {
  const [answers, setAnswers] = useState<SurveyAnswerMap>({});
  const [currentEntry, setCurrentEntry] = useState<SurveyEntry>();
  /** Keep a track of previously passed entries for back action support */
  const [prevEntries, setPrevEntries] = useState<string[]>([]);

  const handleSubmit = useCallback(
    (formName: string, values: { [k: string]: SurveyFieldValue }) => {
      const prevEntryName = currentEntry?.name;
      if (prevEntryName) {
        setPrevEntries((prevEntries) => (prevEntries || []).concat(prevEntryName));
      }
      setAnswers((prev) => ({ ...prev, [formName]: { ...values } }));
    },
    [currentEntry]
  );

  const handlePrevStep = useCallback(() => {
    setPrevEntries((prevEntries) => {
      if (prevEntries.length === 0) return prevEntries;

      const entries = [...prevEntries];
      const entryToRemove = entries.pop();

      if (entryToRemove) {
        setAnswers((prev) => {
          const newAnswers = { ...prev };
          delete newAnswers[entryToRemove];
          return newAnswers;
        });
      }

      return entries;
    });
  }, []);

  /**
   * Fetches the next entry according to provided answer.
   */
  useEffect(() => {
    const nextEntry = getNextSurveyEntry(survey, answers);
    setCurrentEntry(nextEntry);
  }, [answers, survey]);

  if (currentEntry?.type === SurveyEntryType.Ticket)
    return <span>Ticket ID = {(currentEntry as SurveyTicketID).id}</span>;
  if (currentEntry?.type === SurveyEntryType.Form)
    return (
      <SurveyFormComponent
        form={currentEntry as SurveyForm}
        onSubmit={handleSubmit}
        onBack={prevEntries.length > 0 ? handlePrevStep : undefined}
      />
    );
  return null;
};
