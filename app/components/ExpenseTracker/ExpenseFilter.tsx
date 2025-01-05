import { Select } from '@radix-ui/themes'
import { categories } from '../categories'

interface Props {
  onSelectCategory: (category: string) => void
}

// type ExpenseFilterForm = z.infer<typeof Expense>

const ExplenseFilter = ({ onSelectCategory }: Props) => {
  const handleValueChange = (value: string) => {
    // console.log('Selected value:', value) // Log or use the selected value
    onSelectCategory(value)
  }
  // const { control } = useForm<ExpenseFilterForm>({ resolver: zodResolver(Expense) })
  return (
    // <Controller
    //   control={control}
    //   name="category"
    //   render={({ field }) => {
    //     return (
    <Select.Root onValueChange={handleValueChange}>
      <Select.Trigger placeholder="Category" />
      <Select.Content>
        <Select.Group>
          <Select.Label>Categories</Select.Label>
          {categories.map(c => (
            <Select.Item key={c} value={c}>
              {c}
            </Select.Item>
          ))}
        </Select.Group>
      </Select.Content>
    </Select.Root>
    //     )
    //   }}
    // ></Controller>
  )
}

export default ExplenseFilter
