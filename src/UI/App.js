import NavBar from './NavBar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import SignIn from './SignIn';
import SignUp from './SignUp';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/konto" exact>
            <SignIn />
          </Route>
          <Route path ="/konto/zarejestruj">
            <SignUp />
          </Route>
        </Switch>
      </Router>
      {/* <Footer/> */}
      
    </div>
  );
}

export default App;
