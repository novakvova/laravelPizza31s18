import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component, Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
const Home = React.lazy(() => import("./components/Home"));
const Register = React.lazy(() => import("./components/auth/Register"));
const Login = React.lazy(() => import("./components/auth/Login"));

const loading = () => (
    <div className="animated fadeIn pt-3 text-center">Loading...</div>
);

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                </div>
                <div className="container">
                    <Suspense fallback={<div>Загрузка...</div>}>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route
                                exact
                                path="/register"
                                component={Register}
                            />
                            <Route exact path="/login" component={Login} />
                        </Switch>
                    </Suspense>
                </div>
            </BrowserRouter>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));
