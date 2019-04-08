import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { graphql, Query } from 'react-apollo';
import fetchSong from '../queries/fetchSong';
import LyricCreate from './LyricCreate';
import ErrorBoundary from './ErrorBoundary';
import LyricList from './LyricList';
/* eslint react/forbid-prop-types: 0 */
class SongDetail extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired
  };

  render() {
    // console.log(this.props.match);
    return (
      <ErrorBoundary>
        <div>
          <Link to="/">Back</Link>
          <Query
            query={fetchSong}
            variables={{ id: this.props.match.params.id }}
          >
            {({ loading, error, data }) => {
              if (loading) return <p>Loading...</p>;
              if (error) return <p>Error :(</p>;
              if (!data.song) return <p>Loading...</p>;

              return <h3>{data.song.title}</h3>;
            }}
          </Query>
          <LyricList />
          <LyricCreate songId={this.props.match.params.id} />
        </div>
      </ErrorBoundary>
    );
  }
}

export default SongDetail;
