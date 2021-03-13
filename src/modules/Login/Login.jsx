import { Button } from "@material-ui/core";
import styled from "styled-components";
import { auth, provider } from "../../firebase";

const Login = () => {
  const signIn = (e) => {
    e.preventDefault();

    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };
  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img
          src="https://cdn.dribbble.com/users/1238764/screenshots/5864612/slack-animation.gif"
          alt="Slack"
        />
        <h1>Sign in to the developer community</h1>
        <p>fayez.slack.com</p>
        <Button type="submit" onClick={signIn}>
          Sign in with google
        </Button>
      </LoginInnerContainer>
    </LoginContainer>
  );
};

export default Login;

const LoginContainer = styled.div`
  background-color: #f8f8f8;
  height: 100vh;
  display: grid;
  place-items: center;
`;
const LoginInnerContainer = styled.div`
  padding: 100px;
  text-align: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  > img {
    object-fit: contain;
    height: 200px;
    margin-bottom: 40px;
  }
  > button {
    margin-top: 50px;
    text-transform: uppercase;
    background-color: #0a8d48 !important;
    color: white;
  }
`;
