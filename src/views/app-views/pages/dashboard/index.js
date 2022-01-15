import { Switch, Route, Link, Redirect } from "react-router-dom";
import { Layout, Menu, Row, Typography } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  BarsOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import CreateQuestion from "./create-question";
import { APP_PREFIX_PATH } from "../../../../configs/AppConfig";
import Flex from "../../../../components/Flex";
import { useSelector } from "react-redux";

const { Header, Sider, Content } = Layout;
const { Paragraph } = Typography;

const DashboardPage = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { userInfo } = useSelector((state) => state.auth);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="dashboard">
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="2" icon={<PlusOutlined />}>
              Add question
              <Link to={`${APP_PREFIX_PATH}/dashboard/create-question`} />
            </Menu.Item>
            <Menu.Item key="1" icon={<BarsOutlined />}>
              Test questions
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
              <Paragraph style={{ margin: 0 }} type="secondary">
                {`${userInfo.lastName}.${userInfo.firstName.slice(0,1).toUpperCase()}.${userInfo.middleName.slice(0,1).toUpperCase()}`}
              </Paragraph>
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
