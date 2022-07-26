import { z, ZodType } from "zod";

export function get<Schema extends ZodType>(
  url: string,
  schema: Schema
): Promise<z.infer<Schema>> {
  return fetch(url)
    .then(response => response.json())
    .then(json => schema.parse(json));
}
