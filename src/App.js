import { useState, useEffect } from 'react';
import './App.css';
import Balance from './components/balance/balance.component';
import List from './components/list/list.component';
import Form from './components/form/form.component';

const App = () => {

  const [transaction, setTransaction] = useState(
      localStorage.getItem('transactions-local') ? JSON.parse(localStorage.getItem('transactions-local')) : []
  )
  const [numberOfTransactions, setNumberOfTransactions] = useState(
    localStorage.getItem('number-of-transactions-local') ? JSON.parse(localStorage.getItem('number-of-transactions-local')) : 0
  );


  useEffect(() => {
      localStorage.setItem('transactions-local', JSON.stringify(transaction))
      localStorage.setItem('number-of-transactions-local', JSON.stringify(numberOfTransactions))
      console.log("Added to local")
    }, [numberOfTransactions, transaction])


  const addTransaction = (description, amountInput) => {
    const currentState = structuredClone(transaction)
    let amount = Math.round(parseFloat(amountInput) * 1e2) / 1e2
    const isPositive = amount >= 0;
    const id = numberOfTransactions;
    currentState.push({ id, description, amount, isPositive })
    setTransaction(currentState);
    setNumberOfTransactions(numberOfTransactions + 1);
  }

  const afterRemoval = (newObj) => {
    setTransaction(newObj)
  }


  return (
    <div className='App'>
      <div className="top-bar">
        <h1>Expense Tracker</h1>
      </div>
      <div className='all-content'>
        <Balance allItems={transaction}/>

        <List allItems={transaction}
          listTitle="History"
          itemHandler={afterRemoval}
        />

        <Form onSubmitHandler={addTransaction}
          formTitle="Add New Transaction"
          label1text="Description"
          placeholder1="Describe the Transaction"
          input1class="form-input-description"
          input1type="text"
          label2text="Amount"
          placeholder2="+ for Income, - for Expense"
          input2class="form-input-amount"
          input2type="number"
          input2step="0.01"
          buttonText="Add Transaction"
        />


        

      </div>


    </div>
  )
}

export default App;
