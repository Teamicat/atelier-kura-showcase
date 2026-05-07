import { useState, useEffect } from 'react';
import './Countdown.css';

const Countdown = () => {
  // 設定目標時間：從現在起 5 天又 3 小時
  const [targetDate] = useState(() => {
    const date = new Date();
    date.setDate(date.getDate() + 5);
    date.setHours(date.getHours() + 3);
    return date.getTime();
  });

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="countdown-banner">
      <div className="countdown-content">
        <span className="countdown-text">Offre de lancement Printemps</span>
        <div className="timer">
          <span className="timer-item">{timeLeft.days}j</span>
          <span className="timer-item">{timeLeft.hours}h</span>
          <span className="timer-item">{timeLeft.minutes}m</span>
          <span className="timer-item">{timeLeft.seconds}s</span>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
