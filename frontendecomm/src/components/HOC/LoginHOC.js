import React, { useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const LoginHOC = (OriginalComponent) => {
  function NewComponent(props) {
    const userLogin = useSelector((state) => state.userLogin);
    const navigate = useNavigate();
    const { userInfo } = userLogin;
    useEffect(() => {
      if (!userInfo) {
        navigate("/");
      }
    }, [userInfo, navigate]);
    if (userInfo) return <OriginalComponent {...props} />;
    return null;
  }
  return NewComponent;
};
export default LoginHOC;
