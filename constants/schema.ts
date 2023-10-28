import * as z from 'zod';

export const formCheckoutSchema = z.object({
  info: z.object({
    username: z.string(),
    phone: z.string(),
    address: z.string(),
    notes: z.string()
  }),
  payment: z.object({
    type: z.enum(['cod', 'zalo'])
  })
});
