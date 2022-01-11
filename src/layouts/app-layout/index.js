import React from "react";
import { connect } from "react-redux";
import AppViews from "../../views/auth-views";
import { Layout, Grid, Modal, Button, Form, Input, InputNumber } from "antd";
import { LogoutOutlined } from "@ant-design/icons";
import { signOut } from "../../redux/actions/auth";
// import { createOrganization } from "../../redux/actions/Organization";

// import navigationConfig from "configs/NavigationConfig";
// import utils from "utils";
// import { useThemeSwitcher } from "react-css-theme-switcher";

const { Content } = Layout;
const { useBreakpoint } = Grid;

export const AppLayout = ({
  navCollapsed,
  navType,
  location,
  direction,
  defaultOrg,
  signOut,
  createOrganization,
  loading,
}) => {
  // const currentRouteInfo = utils.getRouteInfo(
  //   navigationConfig,
  //   location.pathname
  // );
  // const screens = utils.getBreakPoint(useBreakpoint());
  // const isMobile = screens.length === 0 ? false : !screens.includes("lg");
  // const isNavSide = navType === NAV_TYPE_SIDE;
  // const isNavTop = navType === NAV_TYPE_TOP;
  // const getLayoutGutter = () => {
  //   if (isNavTop || isMobile) {
  //     return 0;
  //   }
  //   return navCollapsed ? SIDE_NAV_COLLAPSED_WIDTH : SIDE_NAV_WIDTH;
  // };

  // const { status } = useThemeSwitcher();

  // if (status === "loading") {
  //   return <Loading cover="page" />;
  // }

  // const getLayoutDirectionGutter = () => {
  //   if (direction === DIR_LTR) {
  //     return { paddingLeft: getLayoutGutter() };
  //   }
  //   if (direction === DIR_RTL) {
  //     return { paddingRight: getLayoutGutter() };
  //   }
  //   return { paddingLeft: getLayoutGutter() };
  // };

  // const onCreateOrganization = (values) => {
  //   createOrganization({ orgName: values.orgName, rate: values.rate });
  // };

  return (
    <Layout style={{ filter: !defaultOrg ? "blur(10px)" : "" }}>
      <Layout className="app-container">
        <Layout className="app-layout">
          <div className={`app-content  "layout-top-nav" : ""}`}>
            <Content>
              <AppViews />
            </Content>
          </div>
        </Layout>
      </Layout>
    </Layout>
  );
};

const mapStateToProps = ({ theme, auth, organization }) => {
  const { navCollapsed, navType, locale } = theme;
  const { defaultOrg } = auth;
  const { loading } = organization;
  return { navCollapsed, navType, locale, defaultOrg, loading };
};

const mapDispatchToProps = {
  signOut,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(AppLayout));
