import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Box,
  Grid,
  makeStyles,
} from '@material-ui/core';
import {
  Login,
  Signup,
  SideImage,
  TopBar,
} from "./index";

const useStyles = makeStyles((theme) => ({
  root : {
    flexWrap: 'wrap',
    [theme.breakpoints.up('sm')] : {
      flexWrap: 'nowrap',
    },
  },
  formPage: {
    padding: '30px 42px 108px',
    flexGrow: 1,
  },
}));

const LandingPage = ({ user, cb, isLogin }) => {
  const classes = useStyles();
  const history = useHistory();

  const topBarInfo = {
    text: isLogin ? "Don't have an account?" : "Already have an account?",
    link: isLogin ? "/register" : "/login",
    buttonText: isLogin ? "Create account" : "Login",
  }

  useEffect(() => {
    if (user && user.id) history.push('/home');
  }, [user, history]);


  return (
    <Grid container className={classes.root}>
      <SideImage
        text={isLogin ? 'Converse with anyone in any language' : 'Converse with anyone with any language' }
      />
      <Box className={classes.formPage}>
        <TopBar {...topBarInfo} />
        {isLogin ? 
          <Login login={cb} /> : 
          <Signup register={cb} />}
      </Box>
    </Grid>
  );
}

export default LandingPage;
