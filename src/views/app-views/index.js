import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loader from "../../components/Loader.js";
// import Loading from "components/shared-components/Loading";
import { APP_PREFIX_PATH } from "../../configs/AppConfig";

export const AppViews = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route
          exact
          path={`${APP_PREFIX_PATH}`}
          component={lazy(() => import(`./pages/main`))}
        />

        <Route
          path={`${APP_PREFIX_PATH}/dashboard`}
          component={lazy(() => import(`./pages/dashboard`))}
        />

        <Redirect
          from={`${APP_PREFIX_PATH}`}
          to={`${APP_PREFIX_PATH}/dashboard`}
        />
      </Switch>
    </Suspense>
  );
};

export default React.memo(AppViews);
