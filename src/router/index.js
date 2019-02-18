import React from 'react';
import { LastLocationProvider } from 'react-router-last-location';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Test from '../components/Test.jsx';
import FilterBoards from '../containers/FilterBoards';

const Main = () => (
    <BrowserRouter basename='/'>
        <LastLocationProvider>
            <div>
                <Switch>
                    <Route path="/" exact component={FilterBoards}/>
                    <Route path="/test" component={Test}/>
                </Switch>
            </div>
        </LastLocationProvider>
    </BrowserRouter>)

    export default Main;