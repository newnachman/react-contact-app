import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Contacts from './routes/Contacts';
import EditContact from './routes/EditContact';

const App = () => {
  return (
    <div className="container">
    <Router>
      <Switch>
        <Route exact path="/contacts" component={Contacts}></Route>
        <Route exact path="/contacts/new" component={EditContact}></Route>
        <Route exact path="/contacts/:id" component={EditContact}></Route>
        <Route exact path="/" component={Contacts}></Route>
        <Route exact path="*" component={Contacts}></Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;