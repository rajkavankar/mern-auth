import { asyncHandler } from "../utils/asyncHandler.js"
import { CustomError } from "../utils/CustomError.js"
import otpService from "../services/OtpService.js"
import { mailHelper } from "../utils/mailHelper.js"
import { getJWTtoken } from "../utils/getJWTtoken.js"
import User from "../models/users-model.js"

export const sendOtp = asyncHandler(async (req, res) => {
  const { email } = req.body
  const expire = Date.now() + otpService.ttl
  const otp = await otpService.getOtp()

  const hashedData = otpService.hashData(`${email}.${otp}.${expire}`)

  const data = {
    to: email,
    from: "support@product.com",
    subject: "Login otp for logging in",
    body: `OTP for logging is <b>${otp}</b>`,
  }

  await mailHelper(data)

  res.status(200).json({
    success: true,
    message: "Otp sent successfully",
    hash: `${hashedData}.${expire}`,
  })
})

export const verifyOtp = asyncHandler(async (req, res) => {
  const { email, otp, hash } = req.body

  const [hashOtp, expire] = hash.split(".")

  if (Date.now() > expire) {
    throw new CustomError("Otp has expired", 400)
  }

  const hashedData = otpService.hashData(`${email}.${otp}.${expire}`)

  const isRegistered = await User.findOne({ email })

  if (hashOtp !== hashedData) {
    throw new CustomError("Invalid otp", 401)
  } else {
    return res.status(200).json({
      success: true,
      isRegistered: isRegistered ? isRegistered : false,
      token: isRegistered ? getJWTtoken(isRegistered._id) : null,
      message: "Otp validated successfully",
    })
  }
})
