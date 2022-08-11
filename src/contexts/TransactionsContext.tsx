import { createContext, ReactNode, useEffect, useState } from "react"

interface Transaction {
  id: number;
  description: string;
  type: 'income' | 'outcome';
  price: number;
  category: string;
  createdAt: string
}

interface TransactionsContextType {
  transactions: Transaction[];
}

interface TransactionProviderProps {
  children: ReactNode
}
export const TransactionsContext = createContext({} as TransactionsContextType)

export function TransactionProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

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
    <TransactionsContext.Provider value={{ transactions }}>
      {children}
    </TransactionsContext.Provider>
  )
}