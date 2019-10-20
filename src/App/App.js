import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PageWrapper from './PageWrapper';
import Home from '../pages/home';
import Help from '../pages/help';
import Battle from '../pages/battle';
import {GlobalStyle} from './GlobalStyle';

function App() {
    return (
        <Router>
            <GlobalStyle />
            <PageWrapper>
                <Switch>
                    <Route exact path="/help" component={Help}/>
                    <Route exact path="/battle" component={Battle}/>
                    <Route exact path="/" component={Home}/>
                    <Route>
                        <h1>Page not found</h1>
                    </Route>
                </Switch>
            </PageWrapper>
        </Router>
    );
}

export default App;
