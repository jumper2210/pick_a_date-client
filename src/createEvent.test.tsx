/* eslint-disable testing-library/prefer-screen-queries */
// Unfortunately I didn't have enough time to test it. I have a ts/es6 modules/is setting error.

import React from 'react'
import { render, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { EventFormSchema } from './components/eventFormSchema/EventFormSchema'

describe('CompanyForm tests 🙂', () => {
  it('should correct handle a submit', async () => {
    const handleSubmit = jest.fn()

    const { getByLabelText, findByTestId } = render(<EventFormSchema />)

    const firstName = getByLabelText('Your first name')
    const lastName = getByLabelText('Your last name')
    const email = getByLabelText('Your email')
    const submitButton = await findByTestId('submit-btn')

    userEvent.type(firstName, 'firsName')
    userEvent.type(lastName, 'lastName')
    userEvent.type(email, 'email')

    userEvent.click(submitButton)

    await waitFor(() =>
      expect(handleSubmit).toHaveBeenCalledWith({
        firstName,
        lastName,
        email,
        date: new Date(),
      })
    )
  })

  it('Should show an error due to lack of content of labels.', async () => {
    const { findByTestId, getByText } = render(<EventFormSchema />)

    let firstNameError, lastNameError, emailError

    const submitButton = await findByTestId('submit-btn')

    userEvent.click(submitButton)

    await waitFor(() => {
      firstNameError = getByText('First name is required')
      lastNameError = getByText('First name is required')
      emailError = getByText('Email address is invalid!')
    })

    expect(firstNameError).toBeNull()
    expect(lastNameError).toBeNull()
    expect(emailError).toBeNull()
  })
})
