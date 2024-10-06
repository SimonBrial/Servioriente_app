import z from "zod";

// Password regex validation
const passwordValidation = new RegExp(
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
);

const passwordSchema = z
  .string()
  .min(8, {
    message: "La debe contener un minimo de 8 caracteres alfanumericos",
  })
  .regex(passwordValidation, {
    message:
      "El password debe contener al menos un caracter de estos: #?!@$%^&*-, numeros del 0 -9, al menos una mayuscula y una minuscula",
  });

const emailSchema = z
  .string()
  .email({
    message:
      "Correo invalido, debe cumplir con la estructura de correo <email>@<dominio>",
  });

export const loginSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});

export const createAccountSchema = z.object({
  name: z.string().min(3, { message: "El nombre es requerido" }),
  email: emailSchema,
  password: passwordSchema,
});

export const restPasswordSchema = z
  .object({
    email: emailSchema,
    password: passwordSchema,
    confirmPassword: passwordSchema,
  })
  .superRefine((inputs) => {
    if (inputs.password === "" || inputs.confirmPassword === "") {
      throw new z.ZodError([
        {
          path: ["confirmPassword"],
          message: "Las contraseñas no pueden estar vacias",
          code: "custom",
        },
      ]);
    }
    if (inputs.password !== inputs.confirmPassword) {
      throw new z.ZodError([
        {
          path: ["confirmPassword"],
          message: "Las contrañas no coinciden, verifique que sean las mismas",
          code: "custom",
        },
      ]);
    }
  });
