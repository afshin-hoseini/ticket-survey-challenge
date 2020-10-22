import { SurveyEntryType, SurveyFieldType, SurveyForm } from 'src/@types';
import { ticket5 } from './ticket5';
import { ticket6 } from './ticket6';

export const wantBikeTrip: SurveyForm = {
  type: SurveyEntryType.Form,
  name: 'wantBikeTrip',
  fields: [
    {
      name: 'bikeTrip',
      title: 'Do you want to have a bike trip?',
      description: 'We can help you with bike trip planning too 🚴‍♂️',
      type: SurveyFieldType.option,
      options: [
        { label: 'Yes', value: 'yes' },
        { label: 'No', value: 'no' },
      ],
      required: true,
    },
  ],
  children: [ticket5, ticket6],
  isEligible: (answers) => {
    const haveBike = answers?.['longStay']?.['haveBike'];
    return haveBike === 'yes';
  },
};
