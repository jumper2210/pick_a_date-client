import React, { useState } from 'react'
import { CustomButton } from '../../utils/custom/CustomButton'
import { CustomInput } from '../../utils/custom/CustomInput'
import { Formik, Form, Field, FormikHelpers } from 'formik'
import * as Yup from 'yup'
import styled from 'styled-components'

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
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

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={EventSchema}
      onSubmit={(
        values,
        { setSubmitting, resetForm }: FormikHelpers<FormValues>
      ) => {
        const sendEvent = async () => {}
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
  )
}
