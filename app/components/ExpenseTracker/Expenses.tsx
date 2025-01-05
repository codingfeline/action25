'use client'

import { useState } from 'react'
import ExpenseList from '../ExpenseList'
import ExpenseFilter from './ExpenseFilter'
import ExpenseForm from './ExpenseForm'

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState([
    { id: 1, description: 'Milk', amount: 1.25, category: 'Groceries' },
    { id: 2, description: 'Cinema', amount: 19.8, category: 'Entertainment' },
    { id: 3, description: 'Starlink', amount: 75, category: 'Utilities' },
  ])
  return (
    <div className="my-2">
      <ExpenseFilter onSelectCategory={c => console.log(c)} />
      <ExpenseForm />
      <ExpenseList
        onDelete={id => setExpenses(expenses.filter(e => e.id !== id))}
        expenses={expenses}
      />
    </div>
  )
}

export default ExpenseTracker
