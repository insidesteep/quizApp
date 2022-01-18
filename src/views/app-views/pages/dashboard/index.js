import { Switch, Route, Link, Redirect } from "react-router-dom";
import { Layout, Menu, Row, Tooltip, Typography } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  BarsOutlined,
  PlusOutlined,
  EyeOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import CreateQuestion from "./create-question";
import { APP_PREFIX_PATH } from "../../../../configs/AppConfig";
import Flex from "../../../../components/Flex";
import { useDispatch, useSelector } from "react-redux";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import PreviewQuestions from "./preview-question";
import { signOut } from "../../../../redux/actions/auth";

const { Header, Sider, Content } = Layout;
const { Paragraph } = Typography;

const DashboardPage = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { userInfo } = useSelector((state) => state.auth);
  const screens = useBreakpoint();
  const dispatch = useDispatch();

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  const logOut = () => {
    dispatch(signOut());
  };

  return (
    <div className="dashboard">
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          collapsedWidth={!screens["md"] ? 0 : 80}
        >
          <div className="logo"></div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1" icon={<BarsOutlined />}>
              Test savollari
              <Link to={`${APP_PREFIX_PATH}/dashboard/create-question`} />
            </Menu.Item>
            <Menu.Item key="2" icon={<EyeOutlined />}>
              Oldindan ko'rish
              <Link to={`${APP_PREFIX_PATH}/dashboard/preview-questions`} />
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className={`site-layout ${collapsed && "collapsed"}`}>
          <Header className="site-layout-background" style={{ padding: 0 }}>
            <Flex
              alignItems="center"
              justifyContent="space-between"
              style={{ paddingRight: "24px" }}
            >
              <div className="trigger" onClick={toggle}>
                {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              </div>
              <Paragraph
                style={{ margin: 0, textTransform: "uppercase" }}
                type="secondary"
              >
                {userInfo.subjectName}
              </Paragraph>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Paragraph
                  style={{ margin: 0, marginRight: ".5rem" }}
                  type="secondary"
                >
                  {`${userInfo.lastName}.${userInfo.firstName
                    .slice(0, 1)
                    .toUpperCase()}.${userInfo.middleName
                    .slice(0, 1)
                    .toUpperCase()}`}
                </Paragraph>
                <Tooltip title="Выход">
                  <LogoutOutlined
                    style={{ color: "#1890ff", cursor: "pointer" }}
                    onClick={logOut}
                  />
                </Tooltip>
              </div>
            </Flex>
          </Header>
          <Content style={{ overflowY: "auto" }}>
            <div
              className="site-layout-background"
              style={{
                margin: "24px 16px",
                padding: 24,
                minHeight: 280,
              }}
            >
              <Row align="center">
                <Switch>
                  <Route
                    path={`${APP_PREFIX_PATH}/dashboard/create-question`}
                    component={CreateQuestion}
                  />
                  <Route
                    path={`${APP_PREFIX_PATH}/dashboard/preview-questions`}
                    component={PreviewQuestions}
                  />
                  <Redirect
                    from={`${APP_PREFIX_PATH}/dashboard`}
                    to={`${APP_PREFIX_PATH}/dashboard/create-question`}
                  />
                </Switch>
              </Row>
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default DashboardPage;
