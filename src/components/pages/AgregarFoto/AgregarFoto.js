import React from 'react'
import { Grid,Button } from '@material-ui/core';
import Controls from "../../controls/Controls";
import { useForm, Form } from '../../useForm';

import SimCardIcon from '@material-ui/icons/SimCard';

export const AgregarFoto =()=> {
    return (
        <div>
            <Form >
            <Grid container>
                <Grid item xs={6}>
                   
            
                </Grid>
                <Grid item xs={6}>
                   
                <input
          color="primary"
          accept="image/*"
          type="file"
    
          id="icon-button-file"
          style={{ display: 'none', }}
        />
        <label htmlFor="icon-button-file">
          <Button
            variant="contained"
            component="span"
            size="large"
            color="primary"
          >
            <SimCardIcon/>
          </Button>
        </label>
                 
                  

                    <div>  <Button
  variant="contained"
  component="label"
>
  Subir Imagen

  <input
    type="file"
    hidden
  />
</Button>
                    </div>
                </Grid>
            </Grid>
        </Form>
        </div>
    )
}



