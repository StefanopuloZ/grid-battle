import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalFonts from '../fonts/fonts';
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
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalFonts />
        <GlobalStyle />
        <PageWrapper>
          <Switch>
            <Route exact path={routes.about} component={Help} />
            <Route exact path={routes.battle} component={Battle} />
            <Route exact path={routes.home} component={Home} />
            <Route>
              <h1>Page not found</h1>
            </Route>
          </Switch>
        </PageWrapper>
      </ThemeProvider>
    </Router>
  );
}

export default App;
