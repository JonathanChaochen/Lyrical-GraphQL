import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { graphql, Query } from 'react-apollo';
import fetchSong from '../queries/fetchSong';
import LyricCreate from './LyricCreate';

class SongDetail extends Component {
  render() {
    return (
      <div>
        <Link to="/">Back</Link>
        <Query query={fetchSong} variables={{ id: this.props.match.params.id }}>
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;
            return <h3>{data.song.title}</h3>;
          }}
        </Query>
        <LyricCreate />
      </div>
    );
  }
}

export default SongDetail;
