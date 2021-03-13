import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Chat from "./modules/Chat/Chat";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import Login from "./modules/Login/Login";
import Loader from "./components/Loader/Loader";
function App() {
  const [user, loading] = useAuthState(auth);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Router>
          {!user ? (
            <Login />
          ) : (
            <>
              <Header />
              <AppBody>
                <Sidebar />
                <Switch>
                  <Route exact path="/" component={Chat} />
                </Switch>
              </AppBody>
            </>
          )}
        </Router>
      )}
    </>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
