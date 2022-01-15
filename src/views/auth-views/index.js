import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loader from "../../components/Loader.js";
// import Loading from "components/shared-components/Loading";
import { AUTH_PREFIX_PATH } from "../../configs/AppConfig";

export const AuthViews = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route
          exact
          path={`${AUTH_PREFIX_PATH}`}
          component={lazy(() => import(`./pages/auth`))}
        />
        <Route
          path={`${AUTH_PREFIX_PATH}/successful-registration`}
          component={lazy(() => import(`./pages/successful-registration`))}
        />
        {/* <Route
          path={`${AUTH_PREFIX_PATH}/login-1`}
          component={lazy(() => import(`./authentication/login-1`))}
        />
        <Route
          path={`${AUTH_PREFIX_PATH}/login-2`}
          component={lazy(() => import(`./authentication/login-2`))}
        />
        <Route
          path={`${AUTH_PREFIX_PATH}/register-1`}
          component={lazy(() => import(`./authentication/register-1`))}
        />
        <Route
          path={`${AUTH_PREFIX_PATH}/register-2`}
          component={lazy(() => import(`./authentication/register-2`))}
        />
        <Route
          path={`${AUTH_PREFIX_PATH}/forgot-password`}
          component={lazy(() => import(`./authentication/forgot-password`))}
        />
        <Route
          path={`${AUTH_PREFIX_PATH}/error-1`}
          component={lazy(() => import(`./errors/error-page-1`))}
        />
        <Route
          path={`${AUTH_PREFIX_PATH}/error-2`}
          component={lazy(() => import(`./errors/error-page-2`))}
        /> */}
        <Redirect from={`${AUTH_PREFIX_PATH}`} to={`${AUTH_PREFIX_PATH}`} />
      </Switch>
    </Suspense>
  );
};

export default AuthViews;
