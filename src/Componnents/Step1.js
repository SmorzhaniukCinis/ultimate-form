import React from "react";
import {TextField, Typography} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';
import {MainContainer} from "./MainContainer";
import {Form} from "./Form";
import {Input} from "./Input";
import {useForm} from "react-hook-form";
import {PrimaryButton} from "./PrimaryButton";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from 'yup';
import { useNavigate } from "react-router-dom";


export const Step1 = ({getFormData, formData}) => {

    const navigate = useNavigate();

    const schema = yup.object().shape({
        firstName: yup
            .string()
            .matches(/^([^0-9]*)$/, 'First name should not contain numbers')
            .required('First name is a required field'),
        lastName: yup
            .string()
            .matches(/^([^0-9]*)$/, 'Last name should not contain numbers')
            .required('Last name is a required field')
    })

    const {register, handleSubmit, formState} = useForm({
        mode: "onBlur",
        resolver: yupResolver(schema),
        defaultValues: {firstName: formData?.firstName, lastName: formData?.lastName}
    })
    const { errors } = formState;

    const onSubmit = (data) => {
        navigate('/step2')
        getFormData(data)
    }
    return (
        <MainContainer>
            <Typography component={'h2'} variant={'h5'}>
                Step 1
            </Typography>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    helperText={errors?.firstName?.message}
                    error={!!errors?.firstName}
                    {...register("firstName")}
                    id='firstName'
                    type='text'
                    label='First Name'/>
                <Input
                    helperText={errors?.lastName?.message}
                    error={!!errors?.lastName}
                    {...register("lastName")}
                    id='lastName'
                    type='text'
                    label='Last Name' name='lastName'/>
                <PrimaryButton type={'submit'}>Next</PrimaryButton>
            </Form>
        </MainContainer>
    )
}