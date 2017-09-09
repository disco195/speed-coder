import styled from 'styled-components'

export const StyledTypingTest = styled.div`
  display: inline-block;
  background-color: lightgrey;
  padding: 20px;
  border-radius: 4px;
  min-width: 534.531px;
  min-height: 113.636px;
`

export const Done = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`

const Info = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
`

export const Accuracy = styled(Info)``
export const Duration = styled(Info)``
export const Speed = styled(Info)``
