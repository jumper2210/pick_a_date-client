import styled, { css } from 'styled-components'

interface Props {
  readonly color?: string
}

export const CustomButton = styled.button<Props>`
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
`
