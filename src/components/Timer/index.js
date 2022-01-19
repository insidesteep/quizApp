import { ClockCircleOutlined } from "@ant-design/icons";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Timer = ({ onStop, timestamp }) => {
  const [time, setTime] = useState(null);
  const { testData } = useSelector((state) => state.question);
  const screens = useBreakpoint();

  useEffect(() => {
    let interval = null;
    console.log(timestamp)

    if (timestamp) {
      interval = setInterval(
        () => setTime(time - 1),
        1000
      );
    }

    return () => clearInterval(interval)
  }, [time]);

  const getMinutesAndSecods = (seconds) => {
    console.log(seconds)
    let min = Math.floor(seconds / 60);
    let sec = seconds - min * 60;
    console.log(min, sec)

    if (min < 10) min = "0" + min;
    if (sec < 10) sec = "0" + sec;

    return `${min}:${sec}`;
  };

  return (
    <p className="test__time">
      {getMinutesAndSecods(time)} {screens.md && "mins - time taken"}{" "}
      <ClockCircleOutlined style={{ color: "#40a9ff" }} />
    </p>
  );
};

export default Timer;
