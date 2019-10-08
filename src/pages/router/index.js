import React from 'react'
import {
    HashRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom';
import Home from '../home';
import Page1 from '../page1';
import Page2 from '../page2';

export default class IRouter extends React.Component {
    render() {
        return (
            <Router >
                <div>
                    <Link to="/">主页面 </Link>
                    <Link to="/page1">页面1 </Link>
                    <Link to="/page2">页面2 </Link>

                    <Switch >
                        < Route exact path="/" component={Home} />
                        < Route path="/page1" component={Page1} />
                        < Route path="/page2" component={Page2} />
                    </Switch>
                </div>
            </Router>
        );
    }
}