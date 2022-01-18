import { Layout, Row, Typography } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import Flex from "../../../../components/Flex";
import { ClockCircleOutlined, LogoutOutlined } from "@ant-design/icons";
import TestProcess from "./TestProcess";
import TestIntro from "./TestIntro";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../../../../redux/actions/auth";

const { Header } = Layout;
const { Text } = Typography;

const MainPage = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(signOut());
  };

  return (
    <div className="test">
      <Header>
        <Flex alignItems="center" justifyContent="space-between">
          <div style={{ display: "flex", alignItems: "center" }}>
            <Avatar size="large" style={{ marginRight: "0.5rem" }} />
            <Text type="secondary">{`${userInfo.lastName}.${userInfo.firstName
              .slice(0, 1)
              .toUpperCase()}.${userInfo.middleName
              .slice(0, 1)
              .toUpperCase()}`}</Text>
          </div>

          <LogoutOutlined onClick={logOut} />
          {/* <p className="test__question-count">
            Question <span style={{ color: "#40a9ff" }}>1</span> of 30
          </p>
          <p className="test__time">
            00:55 mins - time taken{" "}
            <ClockCircleOutlined style={{ color: "#40a9ff" }} />
          </p> */}
        </Flex>
      </Header>
      <Row align="center" style={{ height: "100%" }}>
        {/* <TestIntro /> */}
        <TestProcess />
      </Row>
    </div>
  );
};

export default MainPage;
