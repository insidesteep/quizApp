import React from "react";
import {Route } from "react-router-dom";
import AuthViews from "../../views/auth-views";
// import Loading from 'components/shared-components/Loading';
// import { useThemeSwitcher } from "react-css-theme-switcher";

export const AuthLayout = () => {
  // const { status } = useThemeSwitcher();

  //   if (status === 'loading') {
  //     return <Loading cover="page" />;
  //   }

  return (
    <div className="auth-container">
      <Route path="" component={AuthViews} />
    </div>
  );
};

export default AuthLayout;
