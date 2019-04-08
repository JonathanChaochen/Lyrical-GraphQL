import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql, Mutation } from 'react-apollo';
import mutation from '../mutations/AddLyricToSong';
import fetchSong from '../queries/fetchSong';

class LyricCreate extends Component {
  static propTypes = {
    songId: PropTypes.string.isRequired
  };

  state = {
    content: ''
  };

  onSubmit = event => {
    const { content } = this.state;
    event.preventDefault();
    // this.props.mutate({ variables: { content, songId } });
  };

  render() {
    const { content } = this.state;
    const { songId } = this.props;
    return (
      <Mutation mutation={mutation}>
        {addLyric => (
          <form
            onSubmit={e => {
              e.preventDefault();
              // const { songId } = this.props;
              addLyric({ variables: { content, songId } });
              // input.value = '';
            }}
          >
            <label>Add a Lyric</label>
            <input
              value={content}
              onChange={event => this.setState({ content: event.target.value })}
            />
          </form>
        )}
      </Mutation>
    );
  }
}

export default LyricCreate;
