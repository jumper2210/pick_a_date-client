import React from 'react'
import styled from 'styled-components'
import { EventFormSchema } from '../../components/eventFormSchema/EventFormSchema'

const Wrapper = styled.section`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: #15142a;
`
const InnerWrapper = styled.div`
  display: flex;
  width: 95vw;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 2rem;
  box-shadow: 0px -1px 26px 10px rgba(0, 0, 0, 0.51);
`
const Title = styled.h4`
  color: #ffff;
  text-transform: uppercase;
  font-family: 'Kalam', cursive;
  font-size: 2.7rem;
  text-align: center;
`
const TitleWrapper = styled.div`
  width: 100%;
  padding: 3.5rem 0 5rem 0;
`
const ContentWrapper = styled.div`
  width: 100%;
  max-width: 50%;
`

export const Home = () => {
  return (
    <Wrapper id='contact'>
      <InnerWrapper>
        <ContentWrapper>
          <TitleWrapper>
            <Title>Welcome stranger!</Title>
          </TitleWrapper>
          <EventFormSchema />
        </ContentWrapper>
      </InnerWrapper>
    </Wrapper>
  )
}
