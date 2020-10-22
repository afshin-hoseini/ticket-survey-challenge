import { SurveyEntryType, SurveyFieldType, SurveyForm } from 'src/@types';

export const longStay: SurveyForm = {
  type: SurveyEntryType.Form,
  name: 'longStay',
  fields: [
    {
      name: 'haveBike',
      title: 'Do you have a bike with you?',
      description: 'We can help you with bike specific vehicles.',
      type: SurveyFieldType.option,
      options: [
        { label: 'Yes', value: 'yes' },
        { label: 'No', value: 'no' },
      ],
      required: true,
    },
  ],
  children: [],
  isEligible: (answers) => {
    let stay = answers?.['step1']?.['stay'];
    stay = isNaN(Number(stay)) ? 0 : Number(stay);
    return stay > 2;
  },
};
