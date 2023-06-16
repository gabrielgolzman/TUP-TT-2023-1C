import React, { useContext, useRef, useState } from "react";

import "./Login.css";
import { useNavigate } from "react-router";
import { AuthenticationContext } from "../services/authentication/authentication.context";
import ToggleTheme from "../ui/ToggleTheme";
import { ThemeContext } from "../services/theme/theme.context";
import useTranslate from "../custom/translations/useTranslate";
import ComboLanguage from "../ComboLanguage/ComboLanguage";
import useWindowSize from "../custom/windowSize/useWindowSize";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState([
    { text: "Email no puede ser vacio", isError: false },
    { text: "Password no puede ser vacio", isError: false },
  ]);

  const { handleLogin } = useContext(AuthenticationContext);
  const { theme } = useContext(ThemeContext);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const navigation = useNavigate();

  const { width, height } = useWindowSize();
  const translate = useTranslate();

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  // const passwordChangeHandler = (e) => {
  //   setPassword(e.target.value);
  // };

  const signInHandler = () => {
    if (email.length === 0) {
      emailRef.current.focus();
      emailRef.current.style.borderColor = "red";
      emailRef.current.style.outline = "none";
      const newErrors = [...errors];
      newErrors[0].isError = true;
      setErrors(newErrors);
      return;
    }

    if (passwordRef.current.value.length === 0) {
      passwordRef.current.focus();
      const newErrors = [...errors];
      newErrors[1].isError = true;
      setErrors(newErrors);
      return;
    }

    handleLogin(email);
    navigation("/home");
  };

  return (
    <div className="login-container">
      <div className={`login-box ${theme === "dark" && "login-box-dark"}`}>
        <p>Width: {width}</p>
        <p>Height: {height}</p>
        <ComboLanguage />
        <h4 className={`${email.length === 0 && "red-text"}`}>
          {translate("welcome")}
        </h4>
        <div className="input-container">
          <input
            className="input-control"
            placeholder="Email"
            type="email"
            onChange={emailChangeHandler}
            value={email}
            ref={emailRef}
          />
        </div>
        {errors[0].isError && <p>{errors[0].text}</p>}
        <div className="input-container">
          <input
            className="input-control"
            placeholder={translate("password")}
            type="password"
            ref={passwordRef}
          />
        </div>
        {errors[1].isError && <p>{errors[1].text}</p>}
        <button onClick={signInHandler} className="signin-button" type="button">
          {translate("login")}
        </button>
        <ToggleTheme />
      </div>
    </div>
  );
};

export default Login;
