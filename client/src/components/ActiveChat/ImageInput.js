import { FormControl, makeStyles, TextField } from '@material-ui/core';
import axios from 'axios';

const useStyles = makeStyles(() => ({
  input: {
    '& .MuiInputBase-root::after': {
      display: 'none'
    },
    '& .MuiInputBase-root::before': {
      display: 'none'
    },
    '& .MuiInput-input': {
      height: 36.5,
    },
    '& .MuiInput-input::-webkit-file-upload-button': {
      marginRight: 8,
      border: 'none',
      backgroundColor: '#fff',
      color: 'rgba(0, 0, 0, 0.87)',
      padding: '6px 16px',
      minWidth: 64,
      boxSizing: 'border-box',
      transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
      fontFamily: 'Open Sans, sans-serif',
      fontWeight: 'bold',
      lineHeight: 1.75,
      borderRadius: 4,
      letterSpacing: 0,
      textTransform: 'none',
      cursor: 'pointer',
    },
    '& .MuiInput-input::-webkit-file-upload-button:hover' : {
      backgroundColor: 'rgba(0, 0, 0, 0.04)',
    }
  }
}))

const axiosInstance = axios.create({
  baseURL: `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/image/upload/`
});

const ImageInput = ({ setAttachments }) => {

  const classes = useStyles();

  const handleFile = async (event) => {
    if(!event.target.files.length) return;

    const responses = await Promise.all(
      Array.from(event.target.files).map(file => {
        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", process.env.REACT_APP_UPLOAD_PRESET);
        data.append("cloud_name", process.env.REACT_APP_CLOUD_NAME);
        return axiosInstance.post('/', data);  
      }))
      let imgUrls = responses.map(response => response.data.secure_url);

    setAttachments(current => [...current, ...imgUrls]);
  }
  return (
    <FormControl>
      <TextField
        type="file"
        name="image"
        onChange={handleFile}
        inputProps={{
          multiple: true,
          accept: 'image/*'
        }}
        className={classes.input}
        >
      </TextField>
    </FormControl>
  )
}
export default ImageInput;