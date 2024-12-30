import moment from "moment";
import { useEffect, useState } from "react";

const OfferTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  function calculateTimeLeft(targetDate) {
    const now = moment();
    const target = moment(targetDate);
    const duration = moment.duration(target.diff(now));

    if (duration.asMilliseconds() <= 0) return null;

    return {
      days: Math.floor(duration.asDays()),
      hours: duration.hours(),
      minutes: duration.minutes(),
      seconds: duration.seconds(),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      const updateTime = calculateTimeLeft(targetDate);
      setTimeLeft(updateTime);
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if(!timeLeft) {
    return <div className="text-red-500">The offer has started!</div>
  }
  return (
    <div className="bg-[#00BF63] text-white p-4 rounded-lg shadow-md text-center">
      <h2 className="text-2xl font-bold mb-2">Upcoming Offer</h2>
      <div className="flex justify-center gap-6">
        <div>
          <span className="block text-4xl font-bold">{timeLeft.days}</span>
          <span>Days</span>
        </div>
        <div>
          <span className="block text-4xl font-bold">{timeLeft.hours}</span>
          <span>Hours</span>
        </div>
        <div>
          <span className="block text-4xl font-bold">{timeLeft.minutes}</span>
          <span>Minutes</span>
        </div>
        <div>
          <span className="block text-4xl font-bold">{timeLeft.seconds}</span>
          <span>Secomds</span>
        </div>
      </div>
    </div>
  );
};

export default OfferTimer;
