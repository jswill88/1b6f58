import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
  Grid,
  Box,
  Typography,
  Button,
  FormControl,
  TextField,
  InputAdornment
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { SideImage, styles } from './index';

const useStyles = makeStyles(styles);

const Login = ({ user, login }) => {
  const history = useHistory();

  const classes = useStyles();

  const handleLogin = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements;
    const username = formElements.username.value;
    const password = formElements.password.value;

    await login({ username, password });
  };

  useEffect(() => {
    if (user && user.id) history.push('/home');
  }, [user, history]);

  return (
    <Grid container className={classes.root}>
      <SideImage />
      <Box className={classes.formPage}>
        <Grid container item className={classes.topBar}>
          <Typography variant="body2">Don't have an account?</Typography>
          <Link href="/register" to="/register" className={classes.switchButtonLink}>
            <Button variant="outlined">Create account</Button>
          </Link>
        </Grid>
        <form onSubmit={handleLogin} className={classes.form}>
          <Grid>
            <Grid>
              <Typography variant="h3" className={classes.signInTitle}>Welcome back!</Typography>
              <FormControl required>
                <TextField
                  aria-label="username"
                  label="Username"
                  name="username"
                  type="text"
                />
              </FormControl>
            </Grid>
            <FormControl required shrink="false" className={classes.lastChildLogin}>
              <TextField
                label="Password"
                aria-label="password"
                type="password"
                name="password"
                InputProps={{
                  endAdornment:
                    <InputAdornment position="end">
                      <a className={classes.adornment} href="/">
                        Forgot?
                      </a>
                    </InputAdornment>,
                }}
              />
            </FormControl>
            <Grid className={classes.buttonCont}> 
              <Button type="submit" variant="contained" size="large">
                Login
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Grid>
  );
};

export default Login;
