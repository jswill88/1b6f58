import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, Avatar } from '@material-ui/core';
import { ImageMessage } from './index';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    marginBottom: 8
  },
  avatar: {
    height: 30,
    width: 30,
    marginRight: 11,
    marginTop: 6,
  },
  usernameDate: {
    fontSize: 11,
    color: '#BECCE2',
    fontWeight: 'bold',
  },
  bubble: {
    backgroundImage: 'linear-gradient(225deg, #6CC1FF 0%, #3A8DFF 100%)',
    borderRadius: '0 10px 10px 10px',
    width: 'fit-content',
    marginBottom: 4
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFFFFF',
    letterSpacing: -0.2,
    padding: 8,
  },
}));

const OtherUserBubble = ({ text, time, otherUser, attachments, textOnImage }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Avatar
        alt={otherUser.username}
        src={otherUser.photoUrl}
        className={classes.avatar}
      />
      <Box>
        <Typography className={classes.usernameDate}>
          {otherUser.username} {time}
        </Typography>
        {textOnImage(text, attachments) && 
          <Box className={classes.bubble}>
            <Typography className={classes.text}>{text}</Typography>
          </Box>
        }
        {!!attachments?.length &&
          <ImageMessage
            attachments={attachments}
            text={text}
            textOnImage={textOnImage}
            otherUser={true}
          />
        }
      </Box>
    </Box>
  );
};

export default OtherUserBubble;
