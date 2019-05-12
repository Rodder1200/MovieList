import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 400,
    height: '100%'
  },
  media: {
    objectFit: 'cover'
  }
};

const defaultProps = {
  classes: {},
  movie_id: 0,
  vote: 0,
  title: '',
  img: '',
  lang: '',
  type: ''
};

const propTypes = {
  classes: PropTypes.object.isRequired,
  movie_id: PropTypes.number.isRequired,
  vote: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  lang: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

const MovieCard = ({ classes, movie_id, title, img, lang, vote, type }) => {
  const handleClick = e => {
    if (type === 'similar') {
      e.preventDefault();
    }
  };
  return (
    <NavLink to={`/similar/${movie_id}`} onClick={handleClick}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={title}
            className={classes.media}
            image={`https://image.tmdb.org/t/p/w400${img}`}
            title={title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography component="p">Language: {lang}</Typography>
            {/* didn`t found an country of origin field, in return used vote_average */}
            <Typography component="p">Avarage vote: {vote}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </NavLink>
  );
};

MovieCard.defaultProps = defaultProps;
MovieCard.propTypes = propTypes;

export default withStyles(styles)(MovieCard);
