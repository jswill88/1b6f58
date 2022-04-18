import { makeStyles } from '@material-ui/styles';
import {
  Box,
  Typography,
  Grid
} from '@material-ui/core';

import { bubble, bgImage } from '../../assets'

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: 'hidden',
    display: 'none',
    [theme.breakpoints.up('sm')] : {
      width: 425,
      height: '100vh',
      position: 'sticky',
      display: 'block',
      top: 0,
      left: 0
    }
  },
  image: {
    objectFit: 'cover',
    width: '100%',
    objectPosition: 'center',
    [theme.breakpoints.up('sm')] :{
      minHeight: '100vh',
    }
  },
  overlay: {
    position: 'absolute',
    inset: 0,
    backgroundImage: 'linear-gradient(180deg, #3A8DFF 0%, #86B9FF 100%)',
    mixBlendMode: 'normal',
    opacity: .85,
  },
  content: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -81%)',
    color: '#fff',
    rowGap: 40,
    width: '80%',
    [theme.breakpoints.up('md')]: {
      width: '65%'
    }
  },
  svg: {
    height: 66,
    width: 67,
  },
  text: {
    fontSize: 26,
    lineHeight: 40/26,
    textAlign: 'center'
  }
}));

const SideImage = ({text}) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <img
        src={bgImage}
        alt='Friends sitting and laughing'
        aria-hidden='true'
        className={classes.image}
      />
      <Box className={classes.overlay}></Box>
      <Grid className={classes.content} direction="column" alignItems="center" container>
        <Grid item>
          <img src={bubble} alt='bubble' className={classes.svg}/>
        </Grid>
        <Grid item>
          <Typography className={classes.text}>
            {text}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  )
}

export default SideImage;