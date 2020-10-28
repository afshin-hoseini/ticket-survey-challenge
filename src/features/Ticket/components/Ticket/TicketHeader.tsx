import React, { FC } from 'react';
import { TicketHeaderComponentProps } from '../../@types';
import qrCodeImage from 'src/assets/images/qrcode.png';
import { Description, Title } from 'src/components/Typography';
import { FontColor } from 'src/components/Typography/@types';

export const TicketHeaderComponent: FC<TicketHeaderComponentProps> = ({
  className = '',
  ticket,
  onClick,
  isExpanded,
}) => {
  return (
    <div className={`tck-header ${className}`} onClick={onClick}>
      <img src={qrCodeImage} alt="QrCode" width="60" height="60" />
      <div className="code-and-title">
        <Title className="code">{ticket?.code || 'HM84'}</Title>
        <Description className="title">{ticket?.title || 'Stairway To Heaven'}</Description>
        {!isExpanded && <Description color={FontColor.warning}>Click to expand</Description>}
      </div>
    </div>
  );
};
