import { useEffect, useState } from 'react';

import { Header } from '../../components/Header';
import { Summary } from '../../components/Summary';
import { SearchForm } from './components/SearchForm';

import { PriceHighlight, TransactionContainer, TransactionTable } from './styles';

interface TransactionProps {
  id: number;
  description: string;
  type: 'income' | 'outcome';
  price: number;
  category: string;
  createdAd: string

}

export function Transaction() {
  const [transactions, setTransactions] = useState<TransactionProps[]>([])

  useEffect(() => {
    async function loadTransaction() {
      const api = 'http://localhost:3000/transactions/'
      const response = await fetch(api)
      const data = await response.json()

      setTransactions(data)
    }
    loadTransaction()
  }, [])


  return (
    <div>
      <Header />
      <Summary />
      <TransactionContainer>
        <SearchForm />
        <TransactionTable>
          <tbody>

            {transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td width='50%'>{transaction.description}</td>
                  <td><PriceHighlight variant={transaction.type}>{transaction.price}</PriceHighlight></td>
                  <td>{transaction.category}</td>
                  <td>{transaction.createdAd}</td>
                </tr>
              )
            })}

            <tr>
              <td width='50%'>Desenvolvimento de site</td>
              <td><PriceHighlight variant='outcome'>R$ 12.000,00</PriceHighlight></td>
              <td>Venda</td>
              <td>10/08/2022</td>
            </tr>

          </tbody>
        </TransactionTable>
      </TransactionContainer>
    </div>

  );
};