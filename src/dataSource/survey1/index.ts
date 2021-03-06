import { SurveyEntryType, SurveyFieldType, SurveyForm } from 'src/@types';
import { longStay } from './step1Children/longStay';
import { shortStay } from './step1Children/shortStay';

export const survey1: SurveyForm = {
  type: SurveyEntryType.Form,
  name: 'step1',
  fields: [
    {
      name: 'firstName',
      title: 'Enter your first name:',
      qnaSummaryQuestion: 'First name',
      description: 'We need it for your ticket',
      type: SurveyFieldType.textInput,
      required: true,
      placeholder: 'e.g: James',
    },
    {
      name: 'lastName',
      title: 'And your last name:',
      qnaSummaryQuestion: 'Last name',
      type: SurveyFieldType.textInput,
      required: true,
      placeholder: 'e.g: Hetfield',
    },
    {
      name: 'age',
      title: 'How old are you',
      qnaSummaryQuestion: 'Age',
      type: SurveyFieldType.numberInput,
      required: true,
      defaultValue: 23,
      validate: (value) => {
        let v = Number(value);
        v = isNaN(v) ? 0 : v;
        if (v < 18) return 'Must be older than 18';
      },
    },
    {
      name: 'stay',
      title: 'How long would you stay?',
      type: SurveyFieldType.option,
      options: [
        { label: 'Less than a week', value: 1 },
        { label: 'Around two weeks', value: 2 },
        { label: 'Around a month', value: 3 },
        { label: 'More than a month', value: 4 },
      ],
      required: true,
    },
  ],
  children: [shortStay, longStay],
};
