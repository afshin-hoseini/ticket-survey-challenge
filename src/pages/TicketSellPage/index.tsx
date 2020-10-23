import React, { FC } from 'react';
import './styles.css';
import backgroundVideo from 'src/assets/videos/home-bkg.mp4';
import { TicketOffer } from 'src/features/TicketOffer';

/**
 * Represents the home page where the questionaire and ticket features would be shown.
 */
export const TicketSellPage: FC = () => {
  return (
    <div className="ticket-sell-main-container">
      {/* Contains the video background */}
      <div className="video-bkg-container">
        <video loop muted autoPlay className="video-bkg">
          <source src={backgroundVideo} />
        </video>
      </div>

      <div className="content-holder">
        {/* A container holding the Ticket offer feature */}
        <div className="questionaire-container">
          <TicketOffer />
        </div>
      </div>
    </div>
  );
};
