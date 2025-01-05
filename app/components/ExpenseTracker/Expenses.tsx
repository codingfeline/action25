'use client'

import { useState } from 'react'
import ExpenseList from '../ExpenseList'
import ExpenseFilter from './ExpenseFilter'
import ExpenseForm from './ExpenseForm'

const ExpenseTracker = () => {
  const [selectedCategory, setCategory] = useState('')
  const [expenses, setExpenses] = useState([
    { id: 1, description: 'Milk', amount: 1.25, category: 'Groceries' },
    { id: 2, description: 'Cinema', amount: 19.8, category: 'Entertainment' },
    { id: 3, description: 'Starlink', amount: 75, category: 'Utilities' },
  ])

  const visibleExpenses =
    selectedCategory === 'All Categories'
      ? expenses
      : expenses.filter(cat => cat.category === selectedCategory)

  return (
    <div className="my-2">
      <ExpenseFilter onSelectCategory={c => setCategory(c)} />
      <ExpenseForm
        onSubmit={expense =>
          setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
        }
      />
      <ExpenseList
        onDelete={id => setExpenses(expenses.filter(e => e.id !== id))}
        expenses={visibleExpenses}
      />
    </div>
  )
}

export default ExpenseTracker
