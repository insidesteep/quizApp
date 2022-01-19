import { Layout, Row, Typography } from "antd";
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

const { Header } = Layout;
const { Text } = Typography;

const MainPage = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const { testData } = useSelector((state) => state.question);
  const dispatch = useDispatch();
  const screens = useBreakpoint();

  useEffect(() => {
    if (testData.testStatus == 1) {
      dispatch(showLoadingLastTest());
      dispatch(fetchLastTest());
    }
  }, [testData.testStatus]);

  useEffect(() => {
    if (testData.data) {
      const last = moment(+testData.data.finish_timestamp);
      const now = moment(+testData.data.now_timestamp);

      const diff = last.diff(now);

      console.log("DIFF", diff);
    }
  }, [testData.data]);

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
            <Text style={{ color: "#c8c8ca", fontWeight: 500 }}>{`${
              userInfo.lastName
            }.${userInfo.firstName
              .slice(0, 1)
              .toUpperCase()}.${userInfo.middleName
              .slice(0, 1)
              .toUpperCase()}`}</Text>
          </div>

          {userInfo &&
            (testData.testStatus == 0 || testData.testStatus == 2) && (
              <LogoutOutlined onClick={logOut} />
            )}

          {userInfo && testData.testStatus == 1 && (
            <>
              <p className="test__question-count">
                {screens.md && "Question"}{" "}
                {testData.data && testData.data.number_of_test && (
                  <>
                    <span style={{ color: "#40a9ff" }}>
                      {testData.data.number_of_test}
                    </span>{" "}
                    of 25
                  </>
                )}
              </p>
              <p className="test__time">
                00:55 {screens.md && "mins - time taken"}{" "}
                <ClockCircleOutlined style={{ color: "#40a9ff" }} />
              </p>
            </>
          )}
        </Flex>
      </Header>
      <Row align="center" style={{ height: "100%" }}>
        {userInfo && testData.testStatus == 0 && <TestIntro />}
        {userInfo && testData.testStatus == 1 && <TestProcess />}
        {userInfo && testData.testStatus == 2 && <h1>Test Zakonchen</h1>}
      </Row>
    </div>
  );
};

export default MainPage;
