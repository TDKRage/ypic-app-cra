import React from 'react';

import Card from 'react-toolbox/lib/card/Card';
import CardTitle from 'react-toolbox/lib/card/CardTitle';
import CardText from 'react-toolbox/lib/card/CardText';
import Avatar from 'react-toolbox/lib/avatar/Avatar';

import SADAGImg from '../../../assets/images/sadag-avatar.png';
import TearsImg from '../../../assets/images/tears-avatar.png';
import AidsImg from '../../../assets/images/aids-avatar.jpg';
import LifelineImg from '../../../assets/images/lifeline-avatar.png';
import GamblingImg from '../../../assets/images/gambling-avatar.png';
import AnonImg from '../../../assets/images/anon-avatar.png';


import './index.css';

const Referrals = () => (
  <div className="referrals-page">
    <Card className="referrals-card">
      <CardTitle
        avatar={<Avatar title="South African Depression and Anxiety Group" cover image={SADAGImg} />}
        title="South African Depression and Anxiety Group"
      />
      <CardText className="referrals-card-text"><a href="tel:0800205026">0800 20 50 26</a> / <a href="tel:0800708090">0800 70 80 90</a></CardText>
    </Card>
    <Card className="referrals-card">
      <CardTitle
        avatar={<Avatar title="South African Depression and Anxiety Group" cover image={SADAGImg} />}
        title="South African Depression and Anxiety Group"
        subtitle="Suicide"
      />
      <CardText className="referrals-card-text"><a href="tel:0800567567">0800 567 567</a> / <a href="tel:31393">31393 (free sms)</a></CardText>
    </Card>
    <Card className="referrals-card">
      <CardTitle
        avatar={<Avatar title="South African Depression and Anxiety Group" cover image={SADAGImg} />}
        title="South African Depression and Anxiety Group"
        subtitle="Substance Abuse"
      />
      <CardText className="referrals-card-text"><a href="tel:0800121314">0800 12 13 14</a></CardText>
    </Card>
    <Card className="referrals-card">
      <CardTitle
        avatar={<Avatar title="South African Depression and Anxiety Group" cover image={SADAGImg} />}
        title="South African Depression and Anxiety Group"
        subtitle="Cyber Bullying"
      />
      <CardText className="referrals-card-text"><a href="tel:0800212223">0800 21 22 23 (Dr Reddy)</a></CardText>
    </Card>
    <Card className="referrals-card">
      <CardTitle
        avatar={<Avatar title="Tears Foundation" cover image={TearsImg} />}
        title="Tears Foundation"
        subtitle="Sexual Abuse / Rape Crisis"
      />
      <CardText className="referrals-card-text"><a href="tel:0105905920">010 590 5920</a> / <a href="tel:*134*7355">*134*7355 (free)</a></CardText>
    </Card>
    <Card className="referrals-card">
      <CardTitle
        avatar={<Avatar title="Aids/Hiv Helpline" cover image={AidsImg} />}
        title="Aids/Hiv Helpline"
      />
      <CardText className="referrals-card-text"><a href="tel:0800012322">0800 012 322</a></CardText>
    </Card>
    <Card className="referrals-card">
      <CardTitle
        avatar={<Avatar title="Lifeline" cover image={LifelineImg} />}
        title="Lifeline"
        subtitle="Emotional well-being ( Trauma, violence, relationship issues etc) - National Counselling"
      />
      <CardText className="referrals-card-text"><a href="tel:0861322322">0861 322 322</a></CardText>
    </Card>

    <Card className="referrals-card">
      <CardTitle
        avatar={<Avatar title="South African Responsible Gambling Foundation" cover image={GamblingImg} />}
        title="South African Responsible Gambling Foundation"
        subtitle="Gambling"
      />
      <CardText className="referrals-card-text"><a href="tel:0800212223">0800 21 22 23 (Dr Reddy)</a></CardText>
    </Card>
    <Card className="referrals-card">
      <CardTitle
        avatar={<Avatar title="Al-Anon and Nar-Anon" cover image={AnonImg} />}
        title="Al-Anon and Nar-Anon"
        subtitle="Support groups for families of substance abuse users"
      />
      <CardText className="referrals-card-text"><a href="tel:0861252666">0861 2526 66 (alcoholic)</a> / <a href="tel:0881296791">088 129 6791 (drugs)</a></CardText>
    </Card>
  </div>
);

export default Referrals;
