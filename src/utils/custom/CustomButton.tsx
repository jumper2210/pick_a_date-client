import styled, { css } from 'styled-components'

interface CustomButtonProps {
  readonly color?: string
  readonly disabled?: Boolean
}

export const CustomButton = styled.button<CustomButtonProps>`
  text-decoration: none;
  text-transform: uppercase;
  padding: 1rem;
  border-radius: 1rem;
  color: #ffff;
  font-size: 1.6rem;
  background: #8b4be3;
  cursor: pointer;
  ${({ color }) =>
    color === 'violet' &&
    css`
      border-color: #5444e0;
      background: #5444e0;
    `}
  ${({ disabled }) =>
    disabled === true &&
    css`
      cursor: not-allowed;
    `}
`
