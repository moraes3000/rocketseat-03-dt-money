import { useContext } from 'react';
import { TransactionsContext } from '../../contexts/TransactionsContext';

import { SummaryCard, SummaryContainer } from './styles';
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react';

export function Summary() {
  const { transactions } = useContext(TransactionsContext)
  console.log(transactions)
  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entrada</span>
          <ArrowCircleUp size={32} color='#00b373' />
        </header>
        <strong>R$ 17.000,00</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color='#f75a68' />
        </header>
        <strong>R$ 60,00</strong>
      </SummaryCard>

      <SummaryCard variant='green'>
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color='#fff' />
        </header>
        <strong>R$ 17.000,00</strong>
      </SummaryCard>

    </SummaryContainer>
  );
};