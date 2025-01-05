import { Table } from '@radix-ui/themes'
import { categories } from './categories'

const ExpenseList = () => {
  return (
    <div>
      <Table.Root>
        <Table.Header>
          <Table.Row>
            {categories.map(c => (
              <Table.ColumnHeaderCell key={c}>{c}</Table.ColumnHeaderCell>
            ))}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>array</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>
    </div>
  )
}

export default ExpenseList
