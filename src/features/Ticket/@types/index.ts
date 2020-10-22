import { Route, Ticket } from 'src/@types';

export type TicketComponentProps = {
  ticket?: Ticket;
  className?: string;
  onCancelClicked?: () => void;
  onBuyClicked?: () => void;
};

export type TicketHeaderComponentProps = {
  ticket?: Ticket;
  className?: string;
};

export type RoutesViewerComponentProps = {
  routes?: Route[];
  className?: string;
};

export type RouteItemViewerComponentProps = {
  route: Route;
};
