import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom';

import song from './song';

const propTypes = {
  mutate: PropTypes.func.isRequired
};

class SongCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    };
  }

  handleOnchange = event => {
    this.setState({ title: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();
    const { mutate, history } = this.props;
    const { title } = this.state;
    mutate({
      variables: {
        title
      }
    }).then(() => history.push('/'));
  };

  render() {
    const { title } = this.state;
    return (
      <div>
        <Link to="/">Back</Link>
        <h4>Create a New Song</h4>
        <form onSubmit={this.onSubmit}>
          <label>Song Title:</label>
          <input value={title} onChange={this.handleOnchange} />
        </form>
      </div>
    );
  }
}

SongCreate.propTypes = propTypes;

const mutation = gql`
  mutation AddSong($title: String) {
    addSong(title: $title) {
      title
    }
  }
`;

export default graphql(mutation)(SongCreate);
