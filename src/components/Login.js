import { Button } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import { auth, provider } from "../firebase";

function Login() {
  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };
  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img
          src="data:image/png;base64,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"
          alt="logo"
        />
        <h1>Sign in to the arnav_workspace</h1>
        <p>Arnav developer's community</p>
        <Button type="submit" onClick={signIn}>
          Sign in with google
        </Button>
      </LoginInnerContainer>
    </LoginContainer>
  );
}

export default Login;

const LoginContainer = styled.div`
  text-align: center;
  background-color: white;
  display: grid;
  height: 100vh;
  place-items: center;
`;

const LoginInnerContainer = styled.div`
  > img {
    object-fit: contain;
    height: 300px;
    margin-bottom: 120px;
  }

  > h1 {
    color: black;
    margin-bottom: 5px;
  }

  > button {
    color: black;
    background-color: lightgray;
    margin-top: 40px;
  }
`;
