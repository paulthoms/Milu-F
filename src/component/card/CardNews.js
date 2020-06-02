import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: "100%",
    borderRadius: "none",
  },
  flex: {
      display: "flex",
      width: "100%"
  },
  img: {
      width: "139px",
      height: "104px"
  },
  content: {
    textAlign: "start",
    paddingLeft: "10px"
  }
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <div className = {classes.flex} >
        <img
        className = {classes.img}
          src="images/slide1.jpg"
        />
        <div className = {classes.content} >
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species...
          </Typography>
        </div>
      </div>
    </Card>
  );
}