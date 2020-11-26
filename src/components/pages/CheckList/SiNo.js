import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

export default function CheckList() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    si: false,
    no: false,
    
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { si, no,  } = state;
  const error = [si, no].filter((v) => v).length !== 2;

  return (
    <div className={classes.root}>
 
      <FormControl  component="fieldset" className={classes.formControl}>
        <FormLabel component="legend"></FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={si} onChange={handleChange} name="si" />}
            label="Si"
          />
        </FormGroup>
        <FormHelperText></FormHelperText>
      </FormControl>
      <FormControl   component="fieldset" className={classes.formControl}>
        <FormLabel component="legend"></FormLabel>
        <FormGroup>
          <FormControlLabel
           value="end"  
            control={<Checkbox checked={no} onChange={handleChange} name="no" />}
            label="No"
            labelPlacement="end"
          />
        </FormGroup>
        <FormHelperText></FormHelperText>
      </FormControl>
      
    </div>
  );
}