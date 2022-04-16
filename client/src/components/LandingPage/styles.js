const styles = (theme) => ({
  root : {
    maxWidth: 1024,
    flexWrap: 'wrap',
    [theme.breakpoints.up('sm')] : {
      flexWrap: 'nowrap',
    },
  },
  formPage: {
    padding: '30px 42px 108px',
    flexGrow: 1,
  },
  form: {
    [theme.breakpoints.up('sm')] : {
      maxWidth: 380,
    },
    [theme.breakpoints.up('md')] : {
      paddingLeft: 55,
    },
  },
  topBar: {
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
  signInTitle: {
    marginBottom: 38,
  },
  switchButtonLink: {
    textDecoration: 'none',
  },
  adornment: {
    fontSize: 12,
    fontWeight: 600,
    color: theme.palette.primary.main,
    textDecoration: 'none',
    paddingRight: 8,
  },
  lastChild: {
    '& .MuiInput-root': {
      marginBottom: 36,
    }
  },
  lastChildLogin: {
    '& .MuiInput-root': {
      marginBottom: 61,
    }
  },
  buttonCont: {
    display: 'flex',
    justifyContent: 'center',
  }
});

export default styles;
