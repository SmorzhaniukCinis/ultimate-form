import React from "react";
import {Checkbox, FormControlLabel, TextField, Typography} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';
import {MainContainer} from "./MainContainer";
import {Form} from "./Form";
import {Input} from "./Input";
import {useForm} from "react-hook-form";
import {PrimaryButton} from "./PrimaryButton";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from 'yup';
import { useNavigate } from "react-router-dom";
import {parsePhoneNumberFromString} from "libphonenumber-js";
import {FileInput} from "./FileInput";


export const Step3 = () => {

    const {control, handleSubmit} = useForm()

    const onSubmit = () => {

    }

    return (
        <MainContainer>
            <Typography component={'h2'} variant={'h5'}>
                Step 3
            </Typography>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <FileInput name="files" control={control}/>
                <PrimaryButton type={'submit'}>Next</PrimaryButton>
            </Form>
        </MainContainer>
    )
}