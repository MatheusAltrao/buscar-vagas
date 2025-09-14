import z from "zod";

export const ApplicationSchema = z.object({
  description: z
    .string()
    .min(2, { message: "A descrição deve ter pelo menos 2 caracteres." })
    .max(50, { message: "A descrição deve ter no máximo 50 caracteres." }),
  githubLink: z.string().url({ message: "Insira uma URL válida do GitHub." }),
});

export type IApplicationSchema = z.infer<typeof ApplicationSchema>;
