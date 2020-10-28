import { type } from 'os';
import { Route, Ticket } from 'src/@types';

export type TicketComponentProps = {
  ticket?: Ticket;
  className?: string;
  isExpanded?: boolean;
  onCancelClicked?: () => void;
  onBuyClicked?: () => void;
  onExpandRequested?: (ticketId: string) => void;
};

export type TicketHeaderComponentProps = {
  ticket?: Ticket;
  className?: string;
  isExpanded?: boolean;
  onClick?: () => void;
};

export type RoutesViewerComponentProps = {
  routes?: Route[];
  className?: string;
};

export type RouteItemViewerComponentProps = {
  route: Route;
};

export type QnA = { question: string; answer?: string };
export type TicketAndDetailsComponentProps = {
  tickets?: Ticket[];
  /** Represents processed questions and and answers */
  answers: QnA[];

  reset?: () => void;
};

export type QnaPreviewComponentProps = {
  qnas: QnA[];
};
