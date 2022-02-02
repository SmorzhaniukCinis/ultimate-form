import React from "react";
import {Typography} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import {MainContainer} from "./MainContainer";
import {Form} from "./Form";
import {Input} from "./Input";

const useStyles = makeStyles((theme=>({
    root: {
        fontFamily: 'Permanent Marker',
        margin: theme.spacing(3, 0, 2),
        textAlign: 'center',
        fontSize: '40px',
        color: 'deeppink',
        textShadow: '1px 1px darkmagenta'
    }
})))

export const Step1 = () => {
    const styles = useStyles()
  return(
     <MainContainer>
         <Typography component={'h2'} variant={'h5'}>
             Step 1
         </Typography>
         <Form>
            <Input/>
         </Form>
     </MainContainer>
  )
}