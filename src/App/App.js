import React from 'react';
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from 'react-router-dom';
import PageWrapper from './PageWrapper';
import Home from '../pages/home';
import Help from '../pages/help';
import Battle from '../pages/battle';
import { GlobalStyle } from './GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from '../theme';
import routes from './routes';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Router>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <PageWrapper>
            <Switch>
              <Route path={routes.about} component={Help} />
              <Route path={routes.battle} component={Battle} />
              <Route exact path={routes.home} component={Home} />
              <Route>
                <h1>Page not found</h1>
              </Route>
            </Switch>
          </PageWrapper>
        </ThemeProvider>
      </Router>
    </BrowserRouter>
  );
}

export default App;
