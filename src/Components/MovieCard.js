import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 345,
    height: 650,
  },
  media: {
    objectFit: 'cover'
  }
};

function MovieCard({ classes, movie_id, title, img, lang, vote, redirectToSimilar }) {
  return (
    <Card className={classes.card} onClick={redirectToSimilar(movie_id)}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={title}
          className={classes.media}
          // height="140"
          image={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${img}`}
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
  );
}

MovieCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MovieCard);
