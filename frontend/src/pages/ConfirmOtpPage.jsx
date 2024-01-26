import { useState } from "react"
import { Card, Form, Button } from "react-bootstrap"
import { useSelector, useDispatch } from "react-redux"
import { useVerifyOtpMutation } from "../features/api/userApi"
import { useNavigate } from "react-router-dom"
import { setCredentials } from "../features/users/userSlice"
import toast from "react-hot-toast"

const ConfirmOtpPage = () => {
  const [otp, setOtp] = useState("")
  const { userData } = useSelector((state) => state.user)
  const [verifyOtp] = useVerifyOtpMutation()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await verifyOtp({
        hash: userData.hash,
        email: userData.email,
        otp,
      }).unwrap()

      if (res.isRegistered) {
        dispatch(setCredentials({ ...res.isRegistered, token: res.token }))

        navigate("/dashboard")
      } else {
        navigate("/createuser")
      }
      toast.success(res.message)
    } catch (error) {
      toast.error(error.data.message)
    }
  }

  return (
    <div
      style={{ height: "100vh" }}
      className='bg-light d-flex justify-content-center align-items-center'>
      <Card>
        <Card.Body>
          <h4 className='text-center mb-2'>verify otp </h4>
          <strong className='mb-1'>
            {userData?.email ? userData?.email : ""}
          </strong>

          <Form onSubmit={onSubmit}>
            <Form.Group className='mb-3'>
              <Form.Label>
                Enter otp <span className='text-danger'>*</span>
              </Form.Label>
              <Form.Control
                className='bg-light'
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder='enter otp'
              />
            </Form.Group>
            <Button
              style={{ width: "100%" }}
              variant='success'
              className='d-block'
              type='submit'>
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  )
}

export default ConfirmOtpPage
