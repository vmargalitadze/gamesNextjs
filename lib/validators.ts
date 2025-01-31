import { z } from "zod";
import { formatNumberWithDecimal } from "./utils";

const currency = z
  .string()
  .refine(
    (value) => /^\d+(\.\d{2})?$/.test(formatNumberWithDecimal(Number(value))),
    'Price must have exactly two decimal places'
  );

export const insertProductSchema = z.object({

    name: z.string().min(3, "Name must be at least 3 characters"),
    slug: z.string().min(3, "Slug must be at least 3 characters"),
    category: z.string().min(3, "Category must be at least 3 characters"),
    images: z.array(z.string()).min(1, "At least one image "),
    developer: z.string().min(3, "Developer must be at least 3 characters"),
    publisher: z.string().min(3, "Publisher must be at least 3 characters"),
    description: z.string().min(10, "Description must be at least 10 characters"),
    genre: z.string().min(3, "genre must be at least 3 characters"),
    platform: z.string().min(2, "platform must be at least 2 characters"),


    isFeatured: z.boolean(),
    releaseDate: z.date(),
    price: currency,

})

export const updateProductSchema = insertProductSchema.extend({
    id: z.string().min(1, 'Id is required'),
  });
  
  // Schema for signing users in
  export const signInFormSchema = z.object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
  });
  
  export const signUpFormSchema = z.object({
    name: z.string().min(3,'Name must be at least 3 characters'),
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    confirmPassword: z.string().min(6, 'Confirm Password must be at least 6 characters'),
  }).refine( (data) => data.password === data.confirmPassword, {
    message:'passwords dont match', path:['confirmPassword']
  }
    )