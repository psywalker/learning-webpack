import React from 'react';
import { LastLocationProvider } from 'react-router-last-location';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Boards from '../components/Boards.jsx';
import Test from '../components/Test.jsx';

const Main = () => (
    <BrowserRouter basename='/'>
        <LastLocationProvider>
            <div>
                <Switch>
                    <Route path="/" exact component={Boards}/>
                    <Route path="/test" component={Test}/>
                </Switch>
            </div>
      </LastLocationProvider>
    </BrowserRouter>)

  export default Main;