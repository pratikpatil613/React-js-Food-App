import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300,
    height:320,
    margin:10
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  
}));

const MenuCard = (props) => {
  const classes = useStyles();
  const {image, name, discription, price} = props;

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={image}
        title="Paella dish"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2" align="center">
          {name}
        </Typography>
        <Typography variant="body2"  component="p" align="center">
          {discription}
        </Typography>
        <Typography variant="button" display='block' color="primary" align="center" gutterBottom>
          {'$'}{price}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default MenuCard