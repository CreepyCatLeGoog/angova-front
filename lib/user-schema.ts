import { TypeOf, object, string } from "zod";

export const createUserSchema = object({
  name: string({ required_error: "Name is required" }).min(
    1,
    "Name is required"
  ),
  email: string({ required_error: "Email is required" })
    .min(1, "Email is required")
    .email("Invalid email"),
  photo: string().optional(),
  password: string({ required_error: "Password is required" })
    .min(1, "Password is required")
    .min(8, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"),
  passwordConfirm: string({
    required_error: "Please confirm your password",
  }).min(1, "Please confirm your password"),
}).refine((data) => data.password === data.passwordConfirm, {
  path: ["passwordConfirm"],
  message: "Passwords do not match",
});

export const loginUserSchema = object({
  email: string({ required_error: "Email is required" })
    .min(1, "Email is required")
    .email("Invalid email or password"),
  password: string({ required_error: "Password is required" }).min(
    1,
    "Password is required"
  ),
});

export const contactFormSchema = object({
  username: string().min(2, {
        message: "Le nom d'utilisateur doit comporter au moins 2 caractères.",
      }),
      mail: 
        string()
        .min(1, { message: "Ce champ doit être rempli." })
        .email("Le courrier doit être un mail valide"),
     
      message: string().min(10, {
        message: "Le message doit comporter au moins 10 caractères.",
      }),
});

export type LoginUserInput = TypeOf<typeof loginUserSchema>;
export type CreateUserInput = TypeOf<typeof createUserSchema>;
export type ContactFormInput = TypeOf<typeof contactFormSchema>;
