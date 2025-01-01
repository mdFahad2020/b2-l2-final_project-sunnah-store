import moment from "moment";
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
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
          <span className="block text-4xl font-bold shadow-xl px-5 py-2 mb-3">{timeLeft.days}</span>
          <span className="font-bold">Days</span>
        </div>
        <div>
          <span className="block text-4xl font-bold shadow-xl px-5 py-2 mb-3">{timeLeft.hours}</span>
          <span className="font-bold">Hours</span>
        </div>
        <div>
          <span className="block text-4xl font-bold shadow-xl px-5 py-2 mb-3">{timeLeft.minutes}</span>
          <span className="font-bold">Minutes</span>
        </div>
        <div>
          <span className="block text-4xl font-bold shadow-xl px-5 py-2 mb-3">{timeLeft.seconds}</span>
          <span className="font-bold">Seconds</span>
        </div>
      </div>
    </div>
  );
};

export default OfferTimer;
