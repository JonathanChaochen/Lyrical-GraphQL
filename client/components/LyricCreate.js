import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Mutation } from 'react-apollo';
import mutation from '../mutations/AddLyricToSong';

class LyricCreate extends Component {
  static propTypes = {
    songId: PropTypes.string.isRequired
  };

  state = {
    content: ''
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
              this.setState({ content: '' });
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
