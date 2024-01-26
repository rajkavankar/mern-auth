import dotenv from "dotenv"
dotenv.config()

export const config = {
  PORT: Number(process.env.PORT),
  NODE_ENV: String(process.env.NODE_ENV),
  MONGO_URI: String(process.env.MONGO_URI),
  OTP_HASH: String(process.env.OTP_HASH),
  JWT_SECRET: String(process.env.JWT_SECRET),
  JWT_EXPIRY: String(process.env.JWT_EXPIRY),
  SMTP_HOST: String(process.env.SMTP_HOST),
  SMTP_PORT: Number(process.env.SMTP_PORT),
  SMTP_USER: String(process.env.SMTP_USER),
  SMTP_PASSWORD: String(process.env.SMTP_PASSWORD),
}
