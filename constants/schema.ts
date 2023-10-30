import * as z from 'zod';
import { PaymentType } from './enums';

export const formCheckoutSchema = z.object({
  info: z.object({
    username: z.string(),
    phone: z.string(),
    address: z.string(),
    notes: z.string()
  }),
  payment: z.object({
    type: z.enum([PaymentType.COD, PaymentType.ZALO])
  })
});
