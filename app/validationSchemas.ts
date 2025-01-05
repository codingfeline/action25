import { z } from "zod";
import { categories } from './components/categories';

export const ContentSchema = z.object({
  // section: z.string(),
  content: z.string().min(5, 'Content is required.'),
});

export const ContactSchema = z.object({
  name: z.string().min(3, 'Name is required.'),
  email: z.string().email('Email is required'),
  message: z.string().min(3, 'Message is required').max(300),
  phone: z.string().min(11, 'Phone is required')
})

export const Expense = z.object({
  description: z.string().min(5, 'Description is required'),
  amount: z.number({ invalid_type_error: 'Amount is required 2' }).min(0.01),
  category: z.enum(categories, { errorMap: () => ({ message: 'Category is required' }) })
})
// category: z.string().min(5, 'Category required')