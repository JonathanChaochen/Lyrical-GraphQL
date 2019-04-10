import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Mutation } from 'react-apollo';
import mutation from '../mutations/LikeLyric';

export default class LyricList extends Component {
  static propTypes = {
    lyrics: PropTypes.array.isRequired
  };

  onLike = (id, likeLyric) => {
    likeLyric({ variables: { id } });
  };

  renderLyrics() {
    const { lyrics } = this.props;
    return lyrics.map(({ id, content, likes }) => (
      <li key={id} className="collection-item">
        {content}
        <Mutation mutation={mutation}>
          {likeLyric => (
            <div>
              <i
                className="material-icons"
                onClick={() => this.onLike(id, likeLyric)}
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
