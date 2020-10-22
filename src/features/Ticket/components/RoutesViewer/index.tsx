import React, { FC, useMemo } from 'react';
import { Route, RouteType } from 'src/@types';
import { RouteItemViewerComponentProps, RoutesViewerComponentProps } from '../../@types';
import './styles.css';
import bikeIcon from 'src/assets/icons/bx-cycling.svg';
import busIcon from 'src/assets/icons/bx-bus.svg';
import trainIcon from 'src/assets/icons/bx-cycling.svg';
import walkIcon from 'src/assets/icons/bx-walk.svg';
import rightArrow from 'src/assets/icons/bx-right-arrow.svg';
import { Description } from 'src/components/Typography';

const routeTypeIconMap = {
  [RouteType.bike]: bikeIcon,
  [RouteType.bus]: busIcon,
  [RouteType.subway]: trainIcon,
  [RouteType.walk]: walkIcon,
};

const defaultRoutes: Route[] = [
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
];
export const RoutesViewer: FC<RoutesViewerComponentProps> = ({ className, routes = defaultRoutes }) => {
  return (
    <div className={`--tck-rv ${className}`}>
      {routes.map((route, index) => (
        <RouteItemViewer route={route} key={index + ''} />
      ))}
    </div>
  );
};

const RouteItemViewer: FC<RouteItemViewerComponentProps> = ({ route }) => {
  const startTimeStr = useMemo(() => `${route.startTime.getHours()}:${route.startTime.getMinutes()}`, [
    route.startTime,
  ]);

  const endTimeStr = useMemo(() => `${route.endTime.getHours()}:${route.endTime.getMinutes()}`, [route.endTime]);

  return (
    <div className="--tck-rv-item">
      <img className="rv-icon" src={routeTypeIconMap[route.type]} alt={route.type} />
      <div className="rv-details">
        <div className="rv-coords">
          <Description>{route.start.name || 'Undefined place'}</Description>
          <img className="to-arrow" src={rightArrow} alt="toArrow" width="16" height="16" />
          <Description>{route.end.name || 'Undefined place'}</Description>
        </div>

        <div className="rv-times">
          <Description className="start time">{startTimeStr}</Description>
          <Description className="end time">{endTimeStr}</Description>
        </div>
      </div>
    </div>
  );
};
