import React, { FC } from 'react';
import './App.css';
import { TicketSellPage } from 'src/pages/TicketSellPage';
import { TicketSellProvider } from './features/TicketSellContext';
const App: FC = () => {
  return (
    <div className="App">
      <TicketSellProvider>
        <TicketSellPage />
      </TicketSellProvider>
    </div>
  );
};

export default App;
