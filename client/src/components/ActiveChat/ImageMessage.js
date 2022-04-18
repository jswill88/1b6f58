import { ImageList, ImageListItem, ImageListItemBar, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    width: 480,
    justifyContent: props => props.justifyContent,
  },
  imageItem: {
    flexShrink: 0
  },
  image: {
    borderRadius: props => props.borderRadius,
    width: 'unset',
    overflow: 'hidden'
  },
  imageText: {
    borderRadius: props => props.textboxBorderRadius,
    fontWeight: 'bold',
    letterSpacing: '-0.2px',
    background: props => props.imageTextBackground,
    height: 30,
    '& .MuiImageListItemBar-titleWrap': {
      margin: 0,
    },
    '& .MuiImageListItemBar-title': {
      fontSize: 14,
      padding: 8,
      color: props => props.imageTextColor,
    }
  },
}))

const ImageMessage = ({ attachments, text, textOnImage, otherUser }) => {
  const classes = useStyles({
    justifyContent: otherUser ? 'flex-start' : 'flex-end',
    borderRadius: otherUser ? '0 10px 10px 10px' : '10px 10px 0 10px',
    textboxBorderRadius: otherUser ? '0 0 9px 9px' : '0 0 0 10px',
    imageTextBackground: otherUser ? 'linear-gradient(225deg, #6CC1FF 0%, #3A8DFF 100%)' : '#f4f6fa',
    imageTextColor: otherUser ? '#fff' : '#91a3c0'
  });

  const getHeight = () => (!!text.length && attachments.length > 1) ? 110 : 150;
  const makeUrl = image => image.replace(
      '/upload',
      `/upload/ar_${!!text.length ? `150:${getHeight()}` : '1:1'},c_fill,h_${getHeight()},w_150`
    );

  return (
    <ImageList cols={3} gap={10} rowHeight={getHeight()} className={classes.root}>
      {attachments.map(image => 
      <ImageListItem key={image} className={classes.imageItem}>
        <img src={makeUrl(image)} alt="Message attachment" width="150" height={getHeight()} className={classes.image}></img>
        {!!text.length &&!textOnImage(text, attachments) && 
          <ImageListItemBar
            title={text}
            className={classes.imageText}
          />
        }
      </ImageListItem>
      )}
    </ImageList>
  )
}

export default ImageMessage;