import React from 'react';

import WarningImage from '../../../assets/images/warning.png';
import SoccerBallImg from '../../../assets/images/soccer_ball.png';
import DragonBoatPosterImg from '../../../assets/images/dragon_boat-poster.png';
import './index.css';

const Upcoming = () => (
  <div className="upcoming-page">
    <div>
      <div className="upcoming-page__disclaimer">
        <img alt="Comming Soon..." className="upcoming-page__icon-img" src={WarningImage} />
        <h4>
        This App is work in progress so please expect new features over the next few months
        </h4>
      </div>
    </div>
    <div className="upcoming-page__inqueries">
      <span>
       If you are interested in assisting with the development of the App please email your details to <a href="mailto:nacssayouthcommittee@gmail.com">nacssayouthcommittee@gmail.com</a>
      </span>
    </div>
    <div className="upcoming-page__dragonboat-container">
      <img className="upcoming-page__dragonboat" alt="Dragon Boat Ragatta 2018" src={DragonBoatPosterImg} />
    </div>
    <div className="upcoming-page__disclaimer">
      <img alt="Comming Soon..." className="upcoming-page__icon-img" src={SoccerBallImg} />
      <h4>
        Mini Soccer World Cup in KZN in August 2018, watch this space for further details.
      </h4>
    </div>
  </div>
);

export default Upcoming;
