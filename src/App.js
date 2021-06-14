import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <h1>HOME</h1>
            </Route>
            <Route exact path="/favorite">
              <h1>2</h1>
            </Route>
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
