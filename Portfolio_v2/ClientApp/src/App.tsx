import * as React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import GitHubData from './components/GitHubRepositories';
import Resume from './components/Resume';

import './custom.css'

export default () => (
    <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/Projects/:username?' component={GitHubData} />
        <Route path='/Resume' component={Resume} />
    </Layout>
);
