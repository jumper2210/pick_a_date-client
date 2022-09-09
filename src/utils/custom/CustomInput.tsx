import React, { FC } from 'react'
import styled from 'styled-components'

interface CustomInputProps {
  id: string
  value: string
  label: string
  name: string
  onChangeFn: (e: React.ChangeEvent<HTMLInputElement>) => void
  onBlurFn: (e: any) => void
  touched: boolean | undefined
  errors: string | undefined
  textarea?: boolean
}

interface InputProps {
  id: string
  name: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onBlur: (e: any) => void
  value: string
  invalid: boolean
  valid: boolean
}

interface LabelProps {
  isInvalid: boolean
}

const Input = styled.div`
  position: relative;
  width: 100%;
  margin: 2.5rem 0 5rem;
`

const Label = styled.label<LabelProps>`
  position: absolute;
  top: -3.5rem;
  left: 0.5rem;
  color: #5444e0;
`

const StyledInput = styled.input<InputProps>`
  width: 100%;
  padding: 1rem 2.5rem;
  background: #15142a;
  border: 2px solid #8b4be3;
  color: #ffff;
  border-radius: 0.4rem;
  resize: none;
`

export const CustomInput: FC<CustomInputProps> = ({
  id,
  onChangeFn,
  onBlurFn,
  value,
  touched,
  errors,
  label,
}) => (
  <Input>
    <StyledInput
      type='text'
      id={id}
      name={id}
      placeholder=''
      onChange={onChangeFn}
      onBlur={onBlurFn}
      value={value}
      invalid={Boolean(touched && errors)}
      valid={Boolean(touched && !errors)}
    />
    <Label htmlFor={id} isInvalid={Boolean(touched && errors)}>
      {(errors && touched && errors) || label}
    </Label>
  </Input>
)
