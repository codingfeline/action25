import { z } from "zod";

export const ContentSchema = z.object({
  // section: z.string(),
  content: z.string().min(5, 'Content is required.'),
});

export const ContactSchema = z.object({
  name: z.string().min(3, 'Name is required.'),
  email: z.string().email('Email is required'),
  message: z.string().min(3, 'Message is required').max(300)
})