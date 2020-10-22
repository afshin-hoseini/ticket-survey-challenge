export * from './surveyTypeDefinition';

export enum RouteType {
  walk = 'walk',
  bike = 'bike',
  bus = 'bus',
  subway = 'subway',
}

export type Coordinate = {
  latitude: number;
  longitude: number;
  name?: string;
};
export type Route = {
  type: RouteType;
  start: Coordinate;
  end: Coordinate;
  startTime: Date;
  endTime: Date;
};

export type Ticket = {
  id: string;
  title: string;
  code: string;
  description?: string;

  routes?: Route[];
};
