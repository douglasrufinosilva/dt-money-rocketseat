import * as Dialog from '@radix-ui/react-dialog'
import styled from 'styled-components'

export const HeadeContainer = styled.header`
  background-color: ${props => props.theme['gray-900']};
  padding: 2.5rem 0 7.5rem;
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Trigger = styled(Dialog.Trigger)`
  border: 0;
  background-color: transparent;
  border-radius: 6px;
`

export const NewTransactionButton = styled.span`
  display: flex;
  align-items: center;
  height: 50px;
  border: 0;
  background-color: ${props => props.theme['green-500']};
  color: ${props => props.theme['white']};
  font-weight: bold;
  padding: 0 1.25rem;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color .2s;

  &:hover {
    background-color: ${props => props.theme['green-700']};

  }
`