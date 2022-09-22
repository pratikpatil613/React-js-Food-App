import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      width:'100%'
    },
    
  }));

const TextInput = (props) => {
    const classes = useStyles();
    const { onSearch } = props;
    
    return(
        <div className={classes.root}>
            <TextField
                id="outlined-full-width"
                label="Search"
                style={{ margin: 8}}
                placeholder="type Menu's name or price"
                fullWidth
                margin="normal"
                size='small'
                InputLabelProps={{
                shrink: true,
                }}
                variant="outlined"
                onChange={onSearch}
            />
          </div>
    )
}

export default TextInput;