import React from "react"
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
}));
export default function Imgs(props) {
  const classes = useStyles();
  console.log(props);
  return (
    <div>
      {props.link && (<Grid container spacing={3}>
        {props.link.map((item) => {
          console.log(item.link);
          return (
            <Grid>
              <Avatar className={classes.large} alt="Remy Sharp" src={item.link}/>
            </Grid>
          );
    })}
  </Grid>)}
    </div>)
}