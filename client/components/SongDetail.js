import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { graphql, Query } from 'react-apollo';
import fetchSong from '../queries/fetchSong';

class SongDetail extends Component {
  render() {
    return (
      <div>
        <Link to="/">Back</Link>
        <h3>Song Detail</h3>
        <Query query={fetchSong} variables={{ id: this.props.match.params.id }}>
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;
            return <p>{data.song.title}</p>;
          }}
        </Query>
      </div>
    );
  }
}

export default SongDetail;
