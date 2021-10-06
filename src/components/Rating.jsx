import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../index.css';

class Rating extends Component {
  render() {
    const { rating } = this.props;
    return (
      <div className="rating">
        { rating }
        &nbsp;
        <img
          className="icons-img"
          src="../icons/white-24dp/1x/outline_star_border_white_24dp.png"
          alt="outline-star-border"
        />
      </div>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;
