import React from 'react';
import {connect, } from 'react-redux';
import {Route, } from 'react-router-dom';
import Apps from './Apps';
import AppView from './AppView';
import {getApps,} from '../reducers/apps';
import {Loader, Segment, Dimmer, } from 'semantic-ui-react';

class FetchApps extends React.Component {

    componentDidMount() {
        this.props.dispatch(getApps());
    }

    render() {
        return(
            <>
                <Route exact path="/apps" component={Apps} />
                <Route exact path="/apps/:id" component={AppView} />
            </>
        )
    }

}

export default connect()(FetchApps);