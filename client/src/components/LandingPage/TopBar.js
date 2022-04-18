import {
  Grid,
  Typography,
  Button,
  makeStyles
} from "@material-ui/core";

import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: 'center',
    columnGap: 30,
    rowGap: 12,
    flexWrap: 'nowrap',
    marginBottom: 24,
    justifyContent: 'space-between',
    [theme.breakpoints.up('sm')] : {
      justifyContent: 'flex-end',
    },
    [theme.breakpoints.up('md')] : {
      marginBottom: 84,
    },
  },
  link: {
    textDecoration: 'none',
  },
}));

const TopBar = ({ text, link, buttonText}) => {

  const classes = useStyles();

  return (
    <Grid container item className={classes.root}>
      <Typography variant="body2">{text}</Typography>
      <Link href={link} to={link} className={classes.link}>
        <Button variant="outlined">{buttonText}</Button>
      </Link>
    </Grid>
  );
}

export default TopBar;