import {
  Typography,
  Grid,
  makeStyles
} from '@material-ui/core';

import { ButtonContainer } from './index';

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up('sm')] : {
      maxWidth: 490,
    },
    [theme.breakpoints.up('md')] : {
      paddingLeft: 42,
      paddingRight: 68,
      margin: '0 auto'
    },
    [theme.breakpoints.up('lg')] : {
      maxWidth: 600,
    },
  },
  title: {
    marginBottom: props => props.titleMargin,
    [theme.breakpoints.up('lg')] : {
      fontSize: 42,
    },
  },
}))

const TitledForm = ({ children, submitFunction, title, buttonText, titleMargin }) => {
  const classes = useStyles({titleMargin});
  return (
    <form onSubmit={submitFunction} className={classes.root}>
      <Grid>
        <Typography variant="h3" className={classes.title}>{title}</Typography>
        {children}
        <ButtonContainer>{buttonText}</ButtonContainer>
    </Grid>
  </form>
  );
}

export default TitledForm;