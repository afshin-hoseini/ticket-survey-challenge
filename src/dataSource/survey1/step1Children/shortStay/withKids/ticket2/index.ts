import { SurveyEntryType, SurveyTicketID } from 'src/@types';

export const ticket2: SurveyTicketID = {
  type: SurveyEntryType.Ticket,
  name: 'ticket2',
  id: 'T2',
  isEligible: (answers) => {
    const anyUnde5 = answers?.['withKids']?.['anyUnder5'];
    return anyUnde5 === 'no';
  },
};
