import React from "react";
import {Checkbox, FormControlLabel, Typography} from "@material-ui/core";
import {MainContainer} from "./MainContainer";
import {Form} from "./Form";
import {Input} from "./Input";
import {useForm} from "react-hook-form";
import {PrimaryButton} from "./PrimaryButton";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from 'yup';
import {parsePhoneNumberFromString} from "libphonenumber-js";
import {useNavigate} from "react-router-dom";


export const Step2 = ({getFormData, formData}) => {

    const navigate = useNavigate();

    const schema = yup.object().shape({
        email: yup.string().email('Email should have correct format').required('Email is a required field')
    })

    const {register, handleSubmit, formState, watch} = useForm({
        mode: "onBlur",
        resolver: yupResolver(schema),
        defaultValues: {email: formData?.email, hasPhone: formData?.hasPhone, phoneNumber: formData?.phoneNumber}
    })
    const {errors} = formState;

    const onSubmit = (data) => {
        navigate('/step3')
        getFormData(data)
    }
    const normalizePhoneNumber = (value) => {
        const phoneNumber = parsePhoneNumberFromString(value)
        if (!phoneNumber) {
            return value
        }
        return phoneNumber.formatInternational()
    }

    const hasPhone = watch('hasPhone')
    return (
        <MainContainer>
            <div>wq</div>
            <Typography component={'h2'} variant={'h5'}>
                Step 2
            </Typography>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    helperText={errors?.email?.message}
                    error={!!errors?.email}
                    {...register("email")}
                    id='email'
                    required
                    type='email'
                    label='Email'/>

                <FormControlLabel control={
                    <Checkbox defaultValue={formData?.hasPhone} defaultChecked={formData?.hasPhone}
                              color={'primary'} {...register("hasPhone")} />
                } label={'Do you have a phone'}/>
                {
                    hasPhone && (
                        <Input
                            {...register("phoneNumber")}
                            id='phoneNumber'
                            onChange={(event) => {
                                event.target.value = normalizePhoneNumber(event.target.value)
                            }}
                            type='tel'
                            label='Phone number'/>
                    )
                }
                <PrimaryButton type={'submit'}>Next</PrimaryButton>
            </Form>
        </MainContainer>
    )
}