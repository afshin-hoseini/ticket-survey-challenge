import { Ticket } from 'src/@types';

export type TicketComponentProps = {
  ticket?: Ticket;
  className?: string;
  onCancelClicked?: () => void;
  onBuyClicked?: () => void;
};
