import React, {forwardRef} from "react";
import {makeStyles, TextField} from "@material-ui/core";



export const Input = forwardRef((props, ref) => {


    return (
        <TextField variant={'outlined'} margin={'normal'} inputRef={ref} fullWidth {...props}/>
    )
})