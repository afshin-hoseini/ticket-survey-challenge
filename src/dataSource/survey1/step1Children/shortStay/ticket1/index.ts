import { SurveyEntryType, SurveyTicketID } from 'src/@types';

export const ticket1: SurveyTicketID = {
  type: SurveyEntryType.Ticket,
  name: 'ticket1',
  id: 'T1',
  isEligible: (answers) => {
    let kidsCount = answers?.['shortStay']?.['kidsCount'] ?? 0;
    kidsCount = isNaN(Number(kidsCount)) ? 0 : Number(kidsCount);
    return kidsCount == 0;
  },
};
