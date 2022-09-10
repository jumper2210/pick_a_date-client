import React, { useState } from 'react'
import { CustomButton } from '../../utils/custom/CustomButton'
import { CustomInput } from '../../utils/custom/CustomInput'
import { Formik, Form, Field, FormikHelpers } from 'formik'
import { useDispatch } from 'react-redux'
import * as Yup from 'yup'
import styled from 'styled-components'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker/DateTimePicker'
import dayjs, { Dayjs } from 'dayjs'
import TextField from '@mui/material/TextField'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../../state'
import axios from 'axios'
import { apiUrl } from '../../utils/helpers/constants'

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 4rem;
`

const StyledButton = styled(CustomButton)`
  width: 50%;
  margin: 1.2rem 0 2.5rem;
  border-radius: 0.6rem;
`
interface FormValues {
  firstName: string
  lastName: string
  email: string
  date: Date
}

const EventSchema = Yup.object().shape({
  firstName: Yup.string().required('Your first name is required!'),
  lastName: Yup.string().required('Your last name is required!'),
  email: Yup.string()
    .email('Email address is invalid!')
    .required('Email address is required!'),
  date: Yup.date().required('You must provide date!'),
})

const initialValues: FormValues = {
  firstName: '',
  lastName: '',
  email: '',
  date: new Date(),
}

export const EventFormSchema = () => {
  const [submitBtn, setSubmitBtn] = useState({
    content: 'Send',
    color: 'violet',
  })
  const [value, setValue] = useState<Dayjs | null>(dayjs())
  const dispatch = useDispatch()

  const clearButton = () => {
    setSubmitBtn({ content: 'Send message', color: 'violet' })
  }
  const { createEvent } = bindActionCreators(actionCreators, dispatch)

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Formik
        initialValues={initialValues}
        validationSchema={EventSchema}
        onSubmit={(
          values,
          { setSubmitting, resetForm }: FormikHelpers<FormValues>
        ) => {
          const sendEvent = async () => {
            createEvent(values)
            try {
              await axios({
                url: apiUrl,
                method: 'POST',
                data: values,
              })

              setSubmitting(false)
              setSubmitBtn({
                content: 'All good! Data is properly stored in DB!',
                color: 'bluViolet',
              })
              resetForm()
              setTimeout(clearButton, 2500)
            } catch (err) {
              setSubmitting(false)
              setSubmitBtn({ content: 'Something went wrong!', color: 'red' })
              setTimeout(clearButton, 1500)
            }
          }
          sendEvent()
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <Form onSubmit={handleSubmit}>
            <Field type='hidden' name='form-name' />
            <CustomInput
              id='first-name'
              label='Your first name'
              onChangeFn={handleChange}
              onBlurFn={handleBlur}
              value={values.firstName}
              touched={touched.firstName}
              errors={errors.firstName}
              name='first-name'
            />
            <CustomInput
              id='last-name'
              label='Your last name'
              onChangeFn={handleChange}
              onBlurFn={handleBlur}
              value={values.lastName}
              touched={touched.lastName}
              errors={errors.lastName}
              name='last-name'
            />
            <CustomInput
              id='email'
              label='Your email'
              onChangeFn={handleChange}
              onBlurFn={handleBlur}
              value={values.email}
              touched={touched.email}
              errors={errors.email}
              name='email'
            />
            <DateTimePicker
              renderInput={(props) => (
                <TextField
                  sx={{
                    background: '#ffff',
                    borderRadius: '0.4rem',
                    width: '40%',
                  }}
                  {...props}
                />
              )}
              value={value}
              onChange={(newValue) => {
                setValue(newValue)
              }}
            />
            <ButtonWrapper>
              <StyledButton
                color={submitBtn.color}
                disabled={isSubmitting || submitBtn.color !== 'violet'}
              >
                {!isSubmitting && submitBtn.content}
              </StyledButton>
            </ButtonWrapper>
          </Form>
        )}
      </Formik>
    </LocalizationProvider>
  )
}
