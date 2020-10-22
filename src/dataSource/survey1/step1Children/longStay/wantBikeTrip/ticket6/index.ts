import { SurveyEntryType, SurveyTicketID } from 'src/@types';

export const ticket6: SurveyTicketID = {
  type: SurveyEntryType.Ticket,
  name: 'ticket6',
  id: 'T6',
  isEligible: (answers) => {
    const haveBike = answers?.['wantBikeTrip']?.['bikeTrip'];
    return haveBike === 'yes';
  },
};
