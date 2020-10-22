import { RouteType, Ticket } from 'src/@types';

export default {
  code: 'JCV39',
  id: 'T4',
  title: 'Long stay without bike',
  routes: [
    {
      type: RouteType.bike,
      start: { latitude: 0.345, longitude: 0.234, name: 'street 1st' },
      end: { latitude: 0.345, longitude: 0.234, name: 'street 2nd' },
      startTime: new Date(2020, 5, 6, 10, 20),
      endTime: new Date(2020, 5, 6, 10, 50),
    },
    {
      type: RouteType.walk,
      start: { latitude: 0.345, longitude: 0.234, name: 'Square 1' },
      end: { latitude: 0.345, longitude: 0.234, name: 'Intersection 2' },
      startTime: new Date(2020, 5, 6, 10, 50),
      endTime: new Date(2020, 5, 6, 11, 30),
    },
    {
      type: RouteType.bus,
      start: { latitude: 0.345, longitude: 0.234, name: 'Station 25th' },
      end: { latitude: 0.345, longitude: 0.234, name: 'Amadeus Park' },
      startTime: new Date(2020, 5, 6, 11, 30),
      endTime: new Date(2020, 5, 6, 11, 55),
    },
  ],
} as Ticket;
