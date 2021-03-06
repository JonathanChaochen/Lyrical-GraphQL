import React, { Component } from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { compose, graphql } from 'react-apollo';
import { Link } from 'react-router-dom';

import query from '../queries/fetchSongs';

const propTypes = {
  name: PropTypes.string,
  data: PropTypes.object.isRequired,
  mutate: PropTypes.func.isRequired
};

class SongList extends Component {
  onSongDelete = id => {
    this.props
      .mutate({ variables: { id } })
      .then(() => this.props.data.refetch());
  };

  renderSongs() {
    return this.props.data.songs.map(({ id, title }) => (
      <li key={id} className="collection-item">
        <Link to={`/songs/${id}`}>{title}</Link>
        <i className="material-icons" onClick={() => this.onSongDelete(id)}>
          delete
        </i>
      </li>
    ));
  }

  render() {
    const { data } = this.props;
    if (data.loading) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <ul className="collection">{this.renderSongs()}</ul>
        <Link to="/songs/new" className="btn-floating btn-large red right">
          <i className="material-icons">add</i>
        </Link>
      </div>
    );
  }
}

const mutation = gql`
  mutation DeleteSong($id: ID) {
    deleteSong(id: $id) {
      id
    }
  }
`;

const enhance = compose(
  graphql(query),
  graphql(mutation)
);

SongList.propTypes = propTypes;

export default enhance(SongList);
