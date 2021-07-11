import  React from 'react';
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'


import Header from './Component/Header'

const useStyles = makeStyles((theme) => ({
  root : {
    backgroundColor : "red",
    width: "100%",
    height:"150vh"
  },
  banner : {
    backgroundColor : "purple",
    width:"100%",
    height:400
  },
  body: {
    backgroundColor : "yellow",
    width:'100%',
    height:400
  }
}))


const  App = () =>  {
 const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Header />
      <Grid container  className={classes.banner}>

      </Grid> 
      <Grid contianer className={classes.body}>

      </Grid>
    </Grid>
  );
}

export default App;
