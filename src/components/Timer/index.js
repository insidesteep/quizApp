import { ClockCircleOutlined } from "@ant-design/icons";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLastTest } from "../../redux/actions/question";
import IntlMessage from "../IntlMessage";

const setLocale = (isLocaleOn, localeKey) =>
  isLocaleOn ? <IntlMessage id={localeKey} /> : localeKey.toString();

const Timer = ({ timestamp, localization = true }) => {
  const [time, setTime] = useState(null);
  const { testData } = useSelector((state) => state.question);
  const screens = useBreakpoint();
  const dispatch = useDispatch();

  useEffect(() => {
    let interval = null;

    if (time >= 0) {
      interval = setInterval(() => setTime(time - 1), 1000);
    } else {
      dispatch(fetchLastTest());
    }

    return () => clearInterval(interval);
  }, [time]);

  useEffect(() => {
    if (timestamp) {
      setTime(timestamp);
    }
  }, [timestamp]);

  const getMinutesAndSecods = (seconds) => {
    console.log(seconds);
    let min = Math.floor(seconds / 60);
    let sec = seconds - min * 60;
    console.log(min, sec);

    if (min < 10) min = "0" + min;
    if (sec < 10) sec = "0" + sec;

    return `${min}:${sec}`;
  };

  return (
    <p className="test__time">
      {getMinutesAndSecods(time)}{" "}
      {screens.md && setLocale(localization, "test.timer")}{" "}
      <ClockCircleOutlined style={{ color: "#40a9ff" }} />
    </p>
  );
};

export default Timer;
