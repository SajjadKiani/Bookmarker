import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/Style.css'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Routes} from "./routers";
import {AuthProvider} from "./contexts/Auth";

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <Switch>
              <AuthProvider>
                  {Routes.map((props,i) => {
                        return <Route {...props} key={i} />
                  })}
              </AuthProvider>
          </Switch>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
