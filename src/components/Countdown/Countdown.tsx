import { useState, useEffect } from 'react';
import './Countdown.css';

const Countdown = () => {
  // 設定目標時間：現在加上 5 天 3 小時
  const [timeLeft, setTimeLeft] = useState({
    days: 5,
    hours: 3,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // 這裡我們簡化處理，直接從固定值開始每秒遞減
    // 在實際應用中通常會計算與目標 Date 的差值
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              if (days > 0) {
                days--;
              } else {
                clearInterval(timer);
                return prev;
              }
            }
          }
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

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
