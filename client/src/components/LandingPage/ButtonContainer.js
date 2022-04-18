import {
  Grid,
  Button,
  makeStyles
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
  }
}))

const ButtonContainer = ({ children }) => {
  const classes = useStyles();

  return(
  <Grid className={classes.root}>
    <Button type="submit" variant="contained" size="large">
      {children}
    </Button>
  </Grid>
  )
}

export default ButtonContainer;