import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, rating, imagePath } = movie;
    return (
      <article className="movie-card">
        <div className="movie-card-body">
          <img className="movie-card-image" src={ imagePath } alt={ title } />
          <div>
            <h4 className="movie-card-title">{ title }</h4>
            <h5 className="movie-card-subtitle">{ subtitle }</h5>
            <p className="movie-card-storyline">{ storyline }</p>
          </div>
          <div className="movie-card-rating">
            <Rating rating={ rating } />
          </div>
        </div>
      </article>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
};

export default MovieCard;
