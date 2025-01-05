'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Select, TextField } from '@radix-ui/themes'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'
import { Expense } from '../validationSchemas'
import ErrorMessage from './ErrorMessage'
import ExpenseList from './ExpenseList'
import { categories } from './categories'

type ExpenseForm = z.infer<typeof Expense>

const ExpenseTracker = () => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<ExpenseForm>({
    resolver: zodResolver(Expense),
  })

  const onSubmit = handleSubmit(() => {})

  return (
    <div>
      <h2>Expense Tracker</h2>
      <form className="space-y-3">
        <TextField.Root {...register('description')} placeholder="Description" />
        <ErrorMessage>{errors.description?.message}</ErrorMessage>

        <TextField.Root
          {...register('amount', { valueAsNumber: true })}
          placeholder="Amount"
          type="number"
        />
        <ErrorMessage>{errors.amount?.message}</ErrorMessage>
        <Controller
          control={control}
          name="category"
          render={({ field }) => {
            return (
              <Select.Root {...register('category')} onValueChange={field.onChange}>
                <Select.Trigger placeholder="Category" {...register('category')} />
                <Select.Content {...register('category')}>
                  <Select.Group {...register('category')}>
                    <Select.Label {...register('category')}>Category</Select.Label>
                    {categories.map(c => (
                      <Select.Item key={c} value={c}>
                        {c}
                      </Select.Item>
                    ))}
                  </Select.Group>
                </Select.Content>
              </Select.Root>
            )
          }}
        ></Controller>
        <ErrorMessage>{errors.category?.message}</ErrorMessage>
        <Button onClick={onSubmit} className="block">
          <a href="#">Submit</a>
        </Button>
      </form>
      <ExpenseList />
    </div>
  )
}

export default ExpenseTracker
