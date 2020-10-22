import { SurveyEntryType, SurveyTicketID } from 'src/@types';

export const ticket3: SurveyTicketID = {
  type: SurveyEntryType.Ticket,
  name: 'ticket3',
  id: 'T3',
  isEligible: (answers) => {
    const anyUnde5 = answers?.['withKids']?.['anyUnder5'];
    return anyUnde5 === 'yes';
  },
};
