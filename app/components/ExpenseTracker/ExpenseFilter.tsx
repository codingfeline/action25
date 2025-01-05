import { Select } from '@radix-ui/themes'
import { categories } from '../categories'

interface Props {
  onSelectCategory: (category: string) => void
}

const ExplenseFilter = ({ onSelectCategory }: Props) => {
  return (
    <Select.Root onValueChange={value => onSelectCategory(value)}>
      <Select.Trigger placeholder="Category" />
      <Select.Content>
        <Select.Group>
          <Select.Label>Categories</Select.Label>
          <Select.Item value="All Categories">All Categories</Select.Item>
          {categories.map(c => (
            <Select.Item key={c} value={c}>
              {c}
            </Select.Item>
          ))}
        </Select.Group>
      </Select.Content>
    </Select.Root>
  )
}

export default ExplenseFilter
