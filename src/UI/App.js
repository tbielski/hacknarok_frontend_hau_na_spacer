import NavBar from "./NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Footer from "./Footer";
import Posts from "./Posts/PostsManager";
import Profile from "./profile/Profile";

function App() {
    return (
        <div className="App">
            <Router>
                <NavBar />
                <Switch>
                    <Route path="/" exact>
                        <Posts />
                    </Route>
                    <Route path="/konto" exact>
                        <SignIn />
                    </Route>
                    <Route path="/konto/zarejestruj">
                        <SignUp />
                    </Route>
                    <Route path="/profil">
                        <Profile />
                    </Route>
                </Switch>
            </Router>
            {/* <Footer/> */}
        </div>
    );
}
export default App;