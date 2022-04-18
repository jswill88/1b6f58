import { useState } from "react";
import {
  Button,
  Modal,
  Grid,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { ImageInput } from "./index";

const useStyles = makeStyles(() => ({
  card: {
    width: 'calc(100% - 40px)',
    maxWidth: 500,
    minHeight: 200,
    background: '#fff',
    position: "absolute",
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    gap: 12,
    padding: 40
  },
  openButton: {
    marginBottom: 16,
  },
  closeButton: {
    position: 'absolute',
    top: 5,
    right: 5
  }
}))

const ImageDialog = ({ attachments, setAttachments }) => {
  const classes = useStyles();
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  return (
    <>
      <Grid container alignItems="baseline">
        <Button
          onClick={toggleModal}
          className={classes.openButton}
        >Add Images</Button>
        {!!attachments.length && 
          <Typography>
            {attachments.length} Image{attachments.length > 1 && 's'} attached
          </Typography>
        }
      </Grid>
      <Modal
        open={modalOpen}
        onClose={handleClose}
      >
        <Grid
          container
          direction="column"
          alignItems="flex-start"
          justifyContent="center"
          className={classes.card}
        >
          <Button className={classes.closeButton} onClick={handleClose}>Close</Button>
          <Grid item>
            <Typography variant="h5" className={classes.title}>Upload images</Typography>
          </Grid>
          <Grid item>
            <ImageInput
              setAttachments={setAttachments}
            />
          </Grid>
        </Grid>
      </Modal>
    </>
  );
}

export default ImageDialog;