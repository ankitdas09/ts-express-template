import z from "zod";

export const createUserRequestSchema = z.object({
    email: z.string().email(),
    name: z.string(),
    avatar: z.string().optional(),
});

export type ICreateUserRequestSchema = z.infer<typeof createUserRequestSchema>;
