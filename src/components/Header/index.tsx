import * as Dialog from '@radix-ui/react-dialog'
import { HeadeContainer, HeaderContent, NewTransactionButton, Trigger } from "./styles"

import logoImg from '../../assets/Logo.svg'
import { NewTransactionModal } from '../NewTransactionsModal'

function Header() {
  return (
    <HeadeContainer>
      <HeaderContent>
        <img src={logoImg} alt="Logomarca"/>
        <Dialog.Root>
          <Trigger>
            <NewTransactionButton>
              Nova transação
            </NewTransactionButton>
          </Trigger>
          
          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeadeContainer>
  )
}

export { Header }