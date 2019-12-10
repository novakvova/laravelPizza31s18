import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './components/Header';
import RegisterPage from './components/auth/Register';


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                </div>
                <div className="container">
                    <RegisterPage />
                </div>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))