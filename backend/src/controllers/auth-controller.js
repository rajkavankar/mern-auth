import { asyncHandler } from "../utils/asyncHandler.js"
import { ServerError } from "../utils/CustomError.js"
import User from "../models/users-model.js"
import { getJWTtoken } from "../utils/getJWTtoken.js"

export const authUser = asyncHandler(async (req, res) => {
  const { name, email } = req.body

  const user = await User.findOne({ email })

  if (user) {
    return res.status(200).json({
      success: true,
      user,
      token: getJWTtoken(user._id),
    })
  } else {
    const createdUser = await User.create({
      name,
      email,
    })

    if (createdUser) {
      return res.status(201).json({
        success: true,
        user: createdUser,
        token: getJWTtoken(createdUser._id),
      })
    } else {
      throw new ServerError()
    }
  }
})

export const getPProfile = asyncHandler(async (req, res) => {
  const { user } = req

  return res.status(200).json({
    success: true,
    user,
  })
})
