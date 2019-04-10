import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class LyricList extends Component {
  static propTypes = {
    lyrics: PropTypes.array.isRequired
  };

  onLike = id => {
    console.log(id);
  };

  renderLyrics() {
    const { lyrics } = this.props;
    return lyrics.map(({ id, content }) => (
      <li key={id} className="collection-item">
        {content}
        <i className="material-icons" onClick={() => this.onLike(id)}>
          thumb_up
        </i>
      </li>
    ));
  }

  render() {
    return <ul className="collection">{this.renderLyrics()}</ul>;
  }
}
