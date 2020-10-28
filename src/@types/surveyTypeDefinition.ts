export enum SurveyFieldType {
  textInput = 'textInput',
  numberInput = 'numberInput',
  option = 'option',
  date = 'dateInput',
  time = 'timeInput',
}

export enum SurveyEntryType {
  Ticket = 'ticket',
  Form = 'form',
}

export type SurveyFieldValue = string | number | boolean;

export type SurveyAnswerMap = {
  [formName: string]: {
    [fieldName: string]: SurveyFieldValue;
  };
};

export type SurveyFieldOption = {
  label: string;
  value: string | number;
};

/**
 * Demonstrates a field of survey form
 */
export type SurveyField = {
  type: SurveyFieldType;
  name: string;
  title: string;
  description?: string;
  defaultValue?: string | number;
  placeholder?: string;

  /** Shoul be filled when type is of type `SurveyFieldType.option` */
  options?: SurveyFieldOption[];
  required: boolean;
  /** If return a string it would be counted as the error and it prevents the submission. */
  validate?: (value: SurveyFieldValue) => string | void;
  /** A friendly question for Qna summary */
  qnaSummaryQuestion?: string;
};

/** An abstract type that represent an entry of survey */
export type SurveyEntry = {
  type: SurveyEntryType;
  name: string;
  /** Determines if the entry is eligible to be presented according to given answer dictionary */
  isEligible?: (answers: SurveyAnswerMap) => boolean;
};

export type SurveyTicketID = SurveyEntry & {
  id: string | string[];
};
/** Represents a single form of questions in a questionaire */
export type SurveyForm = SurveyEntry & {
  title?: string;
  description?: string;
  fields: SurveyField[];
  children?: (SurveyForm | SurveyTicketID)[];
};
