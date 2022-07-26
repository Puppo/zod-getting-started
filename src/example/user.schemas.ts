import { z } from "zod";

export const User = z.object({
  id: z.number(),
  name: z.string(),
  age: z.number(),
});

export type User = z.infer<typeof User>;

export const Users = z.array(User);
