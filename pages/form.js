import React from 'react'
import FormControl from '@material-ui/core/FormControl';
import { InputLabel, Input,FormHelperText,Box } from "@material-ui/core";

function form() {
    return (
        <div>
            
  <InputLabel htmlFor="my-input">Description</InputLabel>
  <Input id="my-input" 
  style ={{width: '100%'}}
  aria-describedby="my-helper-text" variant='outlined'/>
  
        </div>
    )
}

export default form
