import { Button, Table } from '@radix-ui/themes'

interface Expense {
  id: number
  description: string
  amount: number
  category: string
}

interface Props {
  expenses: Expense[]
  onDelete: (id: number) => void
}

const ExpenseList = ({ expenses, onDelete }: Props) => {
  if (expenses.length === 0) return null
  return (
    <div>
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>ID</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Description</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Amount</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Category</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {expenses.map(e => (
            <Table.Row key={e.id}>
              <Table.Cell>{e.id}</Table.Cell>
              <Table.Cell>{e.description}</Table.Cell>
              <Table.Cell>{e.amount}</Table.Cell>
              <Table.Cell>{e.category}</Table.Cell>
              <Table.Cell>
                <Button onClick={() => onDelete(e.id)}>
                  <a href="#">Delete</a>
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
          <Table.Row>
            <Table.Cell colSpan={2}></Table.Cell>
            <Table.Cell>{expenses.reduce((acc, e) => e.amount + acc, 0)}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>
    </div>
  )
}

export default ExpenseList
