import { z } from "zod"

export const getOtpSchema = z.object({
  email: z
    .string({
      required_error: "Email is required",
    })
    .email({ message: "Enter a valid email" }),
})

export const verifyOtpSchema = z.object({
  email: z
    .string({
      required_error: "Email is missing",
    })
    .email({ message: "Enter a valid email" }),
  hash: z.string({
    required_error: "hash is missing",
  }),
  otp: z.string({
    required_error: "otp is missing",
  }),
})

export const authSchema = z.object({
  email: z
    .string({
      required_error: "Email is missing",
    })
    .email({ message: "Enter a valid email" }),
  name: z.string({
    required_error: "Name is missing",
  }),
})
