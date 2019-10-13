import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PageWrapper from './PageWrapper';
import './App.scss';

function App() {
    return (
        <Router>
            <PageWrapper>
                <Switch>
                    <Route path="/about">
                        <h1>About</h1>
                    </Route>
                    <Route path="/users">
                        <h1>Users</h1>
                    </Route>
                    <Route path="/">
                        <h1>Home</h1>
                    </Route>
                </Switch>
            </PageWrapper>
        </Router>
    );
}

export default App;
