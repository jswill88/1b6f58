import { makeStyles } from '@material-ui/styles';
import {
  Box,
  Typography
} from '@material-ui/core';

import bubble from '../../assets/bubble.svg'

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: 'hidden',
    height: 300,
    width: '100%',
    position: 'relative',
    [theme.breakpoints.up('sm')] : {
      width: 425,
      height: '100vh',
      position: 'sticky',
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
    transform: 'translate(-50%, -50%)',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    rowGap: 40,
    width: '65%'
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

const SideImage = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>

      <img
        src="https://i.ibb.co/T0qkJrM/bg-img.png"
        alt=''
        aria-hidden='true'
        className={classes.image}
      />
      <Box className={classes.overlay}></Box>
      <Box className={classes.content}> 
        <img src={bubble} alt='bubble' className={classes.svg}/>
        <Typography className={classes.text}>
          Converse with anyone in any language
        </Typography>
      </Box>
    </Box>
  )
}

export default SideImage;