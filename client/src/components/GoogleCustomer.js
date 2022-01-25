import React, { useContext, useState } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { Context } from "../context/Context";

const GoogleCustomer = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState(false);

  const { dispatch } = useContext(Context);
  const loginSuccess = (res) => {
    dispatch({ type: "LOGIN_SUCCESS", payload: res.profileObj });
    console.log(res.profileObj);
    setIsLoggedIn(true);
  };
  const loginFailure = (res) => {
    console.log(res);
    setError(true);
    dispatch({ type: "LOGIN_FAILURE" });
  };
  const logout = () => {
    dispatch({ type: "LOGOUT" });
    setIsLoggedIn(false);

    alert("You have been SignedOut Successfully!");
  };
  const clientId =
    "104981463303-gpdc5bpcfibmc5ner2dm2ip686ku737t.apps.googleusercontent.com";
  return (
    <div>
      <h5 className="titleLogin">
        Or sign-in using your existing account with...
      </h5>
      <div className="googleLogin">
        {isLoggedIn ? (
          <GoogleLogout
            clientId={clientId}
            onLogoutSuccess={logout}
          ></GoogleLogout>
        ) : (
          <GoogleLogin
            clientId={clientId}
            onSuccess={loginSuccess}
            onFailure={loginFailure}
            cookiePolicy={"single_host_origin"}
          />
        )}
        {error && (
          <span style={{ color: "red", marginTop: "10px" }}>
            Something went wrong!
          </span>
        )}
      </div>
    </div>
  );
};

export default GoogleCustomer;
