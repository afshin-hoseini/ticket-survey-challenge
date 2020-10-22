import { SurveyAnswerMap, SurveyEntry, SurveyFieldValue } from 'src/@types';

export type TicketContextType = {
  surveyAnswer?: SurveyAnswerMap;
  survey?: SurveyEntry;
  currentEntry?: SurveyEntry;
  /** Keeps previously passed entries */
  prevEntries?: string[];
  submitAnswer?: (formName: string, values: { [k: string]: SurveyFieldValue }) => void;
  backToPrevEntry?: () => void;
  reset?: () => void;
};
