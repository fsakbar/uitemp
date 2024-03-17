import { z } from "zod";

export const AuthCredentialsValidator = z.object({
    email: z.string().email({message: 'This email not invalid, please add email with format email'}),
    password: z.string().min(8, {
        message: 'Password must be at least 8 characters long.',
    })
})

export type TAuthCrendtialsValidator = z.infer<
    typeof AuthCredentialsValidator
>