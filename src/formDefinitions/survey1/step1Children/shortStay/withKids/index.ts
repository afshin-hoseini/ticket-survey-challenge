import { SurveyEntryType, SurveyFieldType, SurveyForm } from 'src/@types';
import { ticket2 } from './ticket2';
import { ticket3 } from './ticket3';

export const withKids: SurveyForm = {
  type: SurveyEntryType.Form,
  name: 'withKids',
  fields: [
    {
      name: 'anyUnder5',
      title: 'Is any of the kids under 5 yrs?',
      description: 'For kids under 5 year you may need to carry baby stroller.',
      type: SurveyFieldType.option,
      options: [
        { label: 'No', value: 'no' },
        { label: 'Yes', value: 'yes' },
      ],
      required: true,
    },
  ],
  children: [ticket2, ticket3],
  isEligible: (answers) => {
    let kidsCount = answers?.['shortStay']?.['kidsCount'] ?? 0;
    kidsCount = isNaN(Number(kidsCount)) ? 0 : Number(kidsCount);
    return kidsCount > 0;
  },
};
