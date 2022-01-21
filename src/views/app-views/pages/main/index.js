import { Layout, Row, Typography, Progress } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import Flex from "../../../../components/Flex";
import { ClockCircleOutlined, LogoutOutlined } from "@ant-design/icons";
import TestProcess from "./TestProcess";
import TestIntro from "./TestIntro";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../../../../redux/actions/auth";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import Loader from "../../../../components/Loader";
import { useEffect } from "react";
import {
  showLoadingLastTest,
  fetchLastTest,
} from "../../../../redux/actions/question";
import moment from "moment";
import Timer from "../../../../components/Timer";
import TestResult from "./TestResult";
import IntlMessage from "../../../../components/IntlMessage";
import AuthLang from "../../../../configs/LangConfigs/auth";

const { Header } = Layout;
const { Text } = Typography;

const setLocale = (isLocaleOn, localeKey, values = {}) =>
  isLocaleOn ? (
    <IntlMessage id={localeKey} values={values} />
  ) : (
    localeKey.toString()
  );

const MainPage = ({ localization = true }) => {
  const { userInfo } = useSelector((state) => state.auth);
  const { testData } = useSelector((state) => state.question);
  const dispatch = useDispatch();
  const screens = useBreakpoint();

  useEffect(() => {
    if (
      testData.testStatus == 1 ||
      testData.testStatus == 2 ||
      testData.testStatus == 3
    ) {
      dispatch(showLoadingLastTest());
      dispatch(fetchLastTest());
    }
  }, [testData.testStatus]);

  const logOut = () => {
    dispatch(signOut());
  };

  if (testData.loading || testData.loadingLast) {
    return <Loader />;
  }

  return (
    <div className="test">
      <Header style={{ padding: "0 1rem" }}>
        <Flex alignItems="center" justifyContent="space-between">
          <div style={{ display: "flex", alignItems: "center" }}>
            <Avatar size="large" style={{ marginRight: "0.5rem" }} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Text style={{ color: "#c8c8ca", fontWeight: 500 }}>{`${
                userInfo.lastName
              }.${userInfo.firstName
                .slice(0, 1)
                .toUpperCase()}.${userInfo.middleName
                .slice(0, 1)
                .toUpperCase()}`}</Text>
              <Text style={{ fontSize: "12px", color: "#fa8c16" }}>
                {userInfo.subjectName}
              </Text>
            </div>
          </div>

          {userInfo &&
            (testData.testStatus == 0 ||
              testData.testStatus == 2 ||
              testData.testStatus == 3) && <LogoutOutlined onClick={logOut} />}

          {userInfo && testData.testStatus == 1 && testData.data && (
            <>
              <p className="test__question-count">
                {" "}
                {testData.data && testData.data.number_of_test && (
                  <>
                    {setLocale(localization, AuthLang.test.step, {
                      questionNum: (
                        <span style={{ color: `#40a9ff` }}>
                          {testData.data.number_of_test}
                        </span>
                      ),
                    })}
                  </>
                )}
              </p>
              <Timer
                timestamp={
                  testData.data.finish_timestamp - testData.data.now_timestamp
                }
              />
            </>
          )}
        </Flex>
      </Header>
      <Row align="center" style={{ height: "100%" }}>
        {userInfo && testData.testStatus == 0 && <TestIntro />}
        {userInfo && testData.testStatus == 1 && <TestProcess />}
        {userInfo && (testData.testStatus == 2 || testData.testStatus == 3) && (
          <TestResult />
        )}
      </Row>
    </div>
  );
};

export default MainPage;
