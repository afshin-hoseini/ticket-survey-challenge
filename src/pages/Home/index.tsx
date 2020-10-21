import React, { FC } from 'react';
import './home.css';
import backgroundVideo from 'src/assets/videos/home-bkg.mp4';

/**
 * Represents the home page where the questionaire and ticket features would be shown.
 */
export const HomePage: FC = () => {
  return (
    <div className="homepage-container">
      {/* Contains the video background */}
      <div className="video-bkg-container">
        <video loop muted autoPlay className="video-bkg">
          <source src={backgroundVideo} />
        </video>
      </div>

      {/* A container holding the questionare form */}
      <div className="questionaire-container"></div>
    </div>
  );
};
