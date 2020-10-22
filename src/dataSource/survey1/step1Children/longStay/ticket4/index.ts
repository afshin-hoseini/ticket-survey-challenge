import { SurveyEntryType, SurveyTicketID } from 'src/@types';

export const ticket4: SurveyTicketID = {
  type: SurveyEntryType.Ticket,
  name: 'ticket4',
  id: 'T4',
  isEligible: (answers) => {
    const haveBike = answers?.['longStay']?.['haveBike'];
    return haveBike === 'no';
  },
};
