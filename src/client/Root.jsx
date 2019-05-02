import React from 'react';
import { BrowserRouter as Router, Switch , Route } from "react-router-dom";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import routes from './routers';
import reducer from './reducer';

const store = createStore(reducer, applyMiddleware(thunk));

const Root = () => (
  <Provider store={store} >
    <Router>
      <Switch>
      {
        routes.map(router => (
          <Route 
            key={router.path || 'key'}
            exact  
            path={router.path} 
            component={router.component} 
          /> 
        ))
      }
      </Switch>
    </Router>
  </Provider>
)

export default Root;