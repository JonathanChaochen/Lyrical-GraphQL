import './style/style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import SongList from './components/SongList';
import SongCreate from './components/SongCreate';
import SongDetail from './components/SongDetail';

const client = new ApolloClient({
  // By default, this client will send queries to the
  //  `/graphql` endpoint on the same host
  link: new HttpLink(),
  cache: new InMemoryCache()
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="container">
          {/* <nav>
            <ul>
              <li>
                <Link to="/">Song List</Link>
              </li>
              <li>
                <Link to="/songs/new">Song Create</Link>
              </li>
              <li>
                <Link to="/users/">Users</Link>
              </li>
            </ul>
          </nav> */}
          <Switch>
            <Route path="/" exact component={SongList} />
            <Route path="/songs/new" component={SongCreate} />
            <Route path="/songs/:id" component={SongDetail} />
          </Switch>

          {/* <Route path="/users/" component={Users} /> */}
        </div>
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector('#root'));
