import React from 'react';
import { LastLocationProvider } from 'react-router-last-location';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Task from '../components/Task/Task';
import BoardsListContainer from '../containers/BoardsListContainer';
import '../styles/app-styles.scss';

const Main = () => (
    <BrowserRouter basename='/'>
        <LastLocationProvider>
            <div>
                <Switch>
                    <Route path="/" exact component={BoardsListContainer}/>
                    <Route path="/task" component={Task}/>
                </Switch>
            </div>
        </LastLocationProvider>
    </BrowserRouter>)

    export default Main;