import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Mutation } from 'react-apollo';
import mutation from '../mutations/LikeLyric';

export default class LyricList extends Component {
  static propTypes = {
    lyrics: PropTypes.array.isRequired
  };

  onLike = (id, likes, mutate) => {
    mutate({
      variables: { id },
      optimisticResponse: {
        __typename: 'Mutation',
        likeLyric: {
          id,
          __typename: 'LyricType',
          likes: likes + 1
        }
      }
    });
  };

  renderLyrics() {
    const { lyrics } = this.props;
    return lyrics.map(({ id, content, likes }) => (
      <li key={id} className="collection-item">
        {content}
        <Mutation mutation={mutation}>
          {mutate => (
            <div className="vote-box">
              {console.log(mutate)}
              <i
                className="material-icons"
                onClick={() => this.onLike(id, likes, mutate)}
              >
                thumb_up
              </i>
              {likes}
            </div>
          )}
        </Mutation>
      </li>
    ));
  }

  render() {
    return <ul className="collection">{this.renderLyrics()}</ul>;
  }
}
