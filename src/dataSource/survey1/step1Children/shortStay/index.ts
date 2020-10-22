import { SurveyEntryType, SurveyFieldType, SurveyForm } from 'src/@types';
import { ticket1 } from './ticket1';
import { withKids } from './withKids';

export const shortStay: SurveyForm = {
  type: SurveyEntryType.Form,
  name: 'shortStay',
  fields: [
    {
      name: 'kidsCount',
      title: 'How many kids are with you?',
      description: 'There are discount for kids under 12 years old.',
      type: SurveyFieldType.numberInput,
      required: true,
      defaultValue: '0',
    },
  ],
  children: [ticket1, withKids],
  isEligible: (answers) => {
    let stay = answers?.['step1']?.['stay'];
    stay = isNaN(Number(stay)) ? 0 : Number(stay);
    return stay <= 2;
  },
};
