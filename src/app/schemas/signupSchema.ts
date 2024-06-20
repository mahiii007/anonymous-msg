import { z } from "zod";

export const usernameValidation = z
  .string()
  .min(3, "username must contain atleast 3 charcters")
  .max(20, "username should not contain not more than 20 charcters");
export const passwordValidation = z.string().regex(
  new RegExp(`^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$
`),
  `Password must contain at least 8 charcters, one uppercase, one lowercase, one digit, one special character (e.g., !@#$%^&*)`
);

export const emailValidation = z
  .string()
  .regex(
    new RegExp(`^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$`),
    "Invalid email"
  );
export const signupSchema = z.object({
  username: usernameValidation,
  password: passwordValidation,
  email: emailValidation,
});
