import React, { FC, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { SurveyAnswerMap, SurveyEntry, SurveyFieldValue } from 'src/@types';
import { TicketContextType } from './@types';
import { convertJsonToSurveyObject, getNextSurveyEntry } from './utils';

const TicketSellContext = React.createContext<TicketContextType>({});

/**
 * Deserialized survey object
 */
const survey = Object.freeze(convertJsonToSurveyObject(require('src/dataSource/survey1.json')));

export const TicketSellProvider: FC = ({ children }) => {
  const [answers, setAnswers] = useState<SurveyAnswerMap>({});
  const [currentEntry, setCurrentEntry] = useState<SurveyEntry>();
  /** Keep a track of previously passed entries for back action support */
  const [prevEntries, setPrevEntries] = useState<string[]>([]);

  /**
   * Saves current form in entries history and updates the answers satate
   */
  const submitAnswer = useCallback(
    (formName: string, values: { [k: string]: SurveyFieldValue }) => {
      const prevEntryName = currentEntry?.name;
      if (prevEntryName) {
        setPrevEntries((prevEntries) => (prevEntries || []).concat(prevEntryName));
      }
      setAnswers((prev) => ({ ...prev, [formName]: { ...values } }));
    },
    [currentEntry]
  );

  /**
   * Pops the previous form from `prevEntities` and removes corresponding answers from relevant state.
   */
  const backToPrevEntry = useCallback(() => {
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

  /** Resets the survey answers */
  const reset = useCallback(() => {
    setPrevEntries([]);
    setCurrentEntry(undefined);
    setAnswers({});
  }, []);

  /**
   * Fetches the appropriate entry, according to provided answer.
   */
  useEffect(() => {
    const nextEntry = getNextSurveyEntry(survey, answers);
    setCurrentEntry(nextEntry);
  }, [answers]);

  /** Creates a memoized context value */
  const contextValue = useMemo<TicketContextType>(
    () => ({ surveyAnswer: answers, currentEntry, survey, submitAnswer, backToPrevEntry, prevEntries, reset }),
    [answers, currentEntry, submitAnswer, backToPrevEntry, prevEntries, reset]
  );

  return <TicketSellContext.Provider value={contextValue}>{children}</TicketSellContext.Provider>;
};

export const useTicketSell = () => useContext(TicketSellContext);
