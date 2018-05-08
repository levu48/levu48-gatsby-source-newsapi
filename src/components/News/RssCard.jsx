import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const styles = {
  card: {
    maxWidth: 450,
    minWidth: 450
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
};

function RssCard(props) {
  const { classes, article } = props;
  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <Typography component="p">
            <div dangerouslySetInnerHTML={{__html: article.description}} />
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button href={article.link} size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

RssCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RssCard);