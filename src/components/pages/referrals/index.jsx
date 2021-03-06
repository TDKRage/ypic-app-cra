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
        subtitle="South African Depression and Anxiety Group"
        title="Suicide"
      />
      <CardText className="referrals-card-text"><a href="tel:0800567567">0800 567 567</a> / <a href="tel:31393">31393</a>(free sms)</CardText>
    </Card>
    <Card className="referrals-card">
      <CardTitle
        avatar={<Avatar title="South African Depression and Anxiety Group" cover image={SADAGImg} />}
        subtitle="South African Depression and Anxiety Group"
        title="Substance Abuse"
      />
      <CardText className="referrals-card-text"><a href="tel:0800121314">0800 12 13 14</a></CardText>
    </Card>
    <Card className="referrals-card">
      <CardTitle
        avatar={<Avatar title="South African Depression and Anxiety Group" cover image={SADAGImg} />}
        subtitle="South African Depression and Anxiety Group"
        title="Cyber Bullying"
      />
      <CardText className="referrals-card-text"><a href="tel:0800212223">0800 21 22 23</a>(Dr Reddy)</CardText>
    </Card>
    <Card className="referrals-card">
      <CardTitle
        avatar={<Avatar title="Tears Foundation" cover image={TearsImg} />}
        subtitle="Tears Foundation"
        title="Sexual Abuse / Rape Crisis"
      />
      <CardText className="referrals-card-text"><a href="tel:0105905920">010 590 5920</a> / <a href="tel:*134*7355">*134*7355</a>(free)</CardText>
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
        title="Emotional well-being"
        subtitle="Lifeline - Trauma, violence, relationship issues etc - National Counselling"
      />
      <CardText className="referrals-card-text"><a href="tel:0861322322">0861 322 322</a></CardText>
    </Card>
    <Card className="referrals-card">
      <CardTitle
        avatar={<Avatar title="South African Responsible Gambling Foundation" cover image={GamblingImg} />}
        subtitle="South African Responsible Gambling Foundation"
        title="Gambling"
      />
      <CardText className="referrals-card-text"><a href="tel:>0800006008">0800 006 008</a></CardText>
    </Card>
    <Card className="referrals-card">
      <CardTitle
        avatar={<Avatar title="Al-Anon and Nar-Anon" cover image={AnonImg} />}
        subtitle="Al-Anon and Nar-Anon"
        title="Support groups for families of substance abuse users"
      />
      <CardText className="referrals-card-text"><a href="tel:0861252666">0861 2526 66</a>(alcoholic) / <a href="tel:0881296791">088 129 6791</a>(drugs)</CardText>
    </Card>
  </div>
);

export default Referrals;
