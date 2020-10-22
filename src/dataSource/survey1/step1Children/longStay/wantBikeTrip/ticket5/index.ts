import { SurveyEntryType, SurveyTicketID } from 'src/@types';

export const ticket5: SurveyTicketID = {
  type: SurveyEntryType.Ticket,
  name: 'ticket5',
  id: 'T5',
  isEligible: (answers) => {
    const haveBike = answers?.['wantBikeTrip']?.['bikeTrip'];
    return haveBike === 'no';
  },
};
