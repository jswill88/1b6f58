import {
  Grid,
  FormControl,
  TextField,
  InputAdornment,
  FormHelperText,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  formControl: {
    '& .MuiInput-root': {
      marginBottom: props => props.marginBottom,
    }
  },
  adornment: {
    fontSize: 12,
    fontWeight: 600,
    color: theme.palette.primary.main,
    textDecoration: 'none',
    paddingRight: 8,
  },
})); 

const Input = ({ label, type, name, errorText, adornmentText, minLength, marginBottom }) => {
  const classes = useStyles({ marginBottom });

  return (
    <Grid>
      <FormControl required error={!!errorText} className={classes.formControl}>
        <TextField
          aria-label={label.toLowerCase()}
          label={label}
          name={name || label.toLowerCase()}
          type={type}
          InputProps={{
            endAdornment: adornmentText && 
              <InputAdornment position="end">
                <a className={classes.adornment} href="/">
                  {adornmentText}
                </a>
              </InputAdornment>,
            minLength
          }}
        />
        <FormHelperText>
          {errorText}
        </FormHelperText>
      </FormControl>
    </Grid>
  )
}

export default Input;