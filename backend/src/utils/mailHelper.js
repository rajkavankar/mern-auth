import { ServerError } from "./CustomError.js"
import { transporter } from "../config/mail-transporter.js"

export const mailHelper = async (data) => {
  try {
    const info = await transporter.sendMail({
      from: data.from, // sender address
      to: data.to, // list of receivers
      subject: data.subject, // Subject line
      html: data.body, // html body
    })
  } catch (error) {
    throw new ServerError()
  }
}
