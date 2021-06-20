import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, gql, useQuery } from '@apollo/client'
import './App.css';
import Launches from './components/Launches';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Launch from './components/Launch';

const client = new ApolloClient({
    uri: 'http://localhost:5555/graphql',
    cache: new InMemoryCache()
})

const App: React.FC = () => {
    return (
        <ApolloProvider client={client}>
            <Router>
                <div className='app container'>
                    <h1>SpaceX</h1>
                    <Route exact path='/' component={Launches} />
                    <Route path='/launch/:flight_number' component={Launch} />
                </div>
            </Router>
        </ApolloProvider>
    )

}

export default App;
