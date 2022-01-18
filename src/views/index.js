import React, { useEffect } from "react";
import {
  Route,
  Switch,
  Redirect,
  withRouter,
  useHistory,
} from "react-router-dom";
import { connect } from "react-redux";
import AppLayout from "../layouts/app-layout";
import AuthLayout from "../layouts/auth-layout";
import AppLocale from "../lang";
import { IntlProvider } from "react-intl";
import { ConfigProvider } from "antd";
import { APP_PREFIX_PATH, AUTH_PREFIX_PATH } from "../configs/AppConfig";
// import useBodyClass from "hooks/useBodyClass";
import { authorization } from "../redux/actions/auth";
import { onLocaleChange } from "../redux/actions/locale";

function RouteInterceptor({ children, isAuthenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: AUTH_PREFIX_PATH,
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export const Views = (props) => {
  const {
    localeValue,
    token,
    userInfo,
    location,
    direction,
    authorization,
    onLocaleChange,
  } = props;
  const currentAppLocale = AppLocale[localeValue];
  const history = useHistory();

  useEffect(() => {
    if (localStorage.getItem("auth_token")) {
      authorization();
    }

    if (localStorage.getItem("locale")) {
      onLocaleChange(localStorage.getItem("locale"));
    }
  }, []);

  useEffect(() => {
    if (token !== null && userInfo.role) {
      if (userInfo.role === "2") {
        history.push(`${APP_PREFIX_PATH}/dashboard`);
      }

      if (userInfo.role === "1") {
        history.push(`${APP_PREFIX_PATH}`);
      }
    }
    // if (showMessage) {
    //   setTimeout(() => {
    //     hideAuthMessage();
    //   }, 3000);
    // }
  }, [token, userInfo.role]);

  //   useBodyClass(`dir-${direction}`);

  console.log("VIEWS", token);
  return (
    <IntlProvider
      locale={currentAppLocale.locale}
      messages={currentAppLocale.messages}
    >
      <ConfigProvider locale={currentAppLocale.antd} direction={direction}>
        <Switch>
          <Route exact path="/">
            <Redirect to={APP_PREFIX_PATH} />
          </Route>
          <Route path={AUTH_PREFIX_PATH}>
            <AuthLayout direction={direction} />
          </Route>
          <RouteInterceptor path={APP_PREFIX_PATH} isAuthenticated={token}>
            <AppLayout direction={direction} location={location} />
          </RouteInterceptor>
        </Switch>
      </ConfigProvider>
    </IntlProvider>
  );
};

const mapStateToProps = ({ auth, locale }) => {
  const { token, userInfo } = auth;
  const { localeValue } = locale;

  return { token, userInfo, localeValue };
};

const mapDispatchToProps = {
  authorization,
  onLocaleChange,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Views));
