import { Card, Form, Button } from "react-bootstrap"
import GoogleButton from "../components/GoogleButton"
import { useState } from "react"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { useGetOtpMutation } from "../features/api/userApi"
import { setUserData } from "../features/users/userSlice"

const LoginPage = () => {
  const [email, setEmail] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [getOtp] = useGetOtpMutation()

  const onSubmit = async (e) => {
    e.preventDefault()
    if (email === "") {
      return toast.error("Please provide data")
    }

    try {
      const res = await getOtp({ email }).unwrap()
      dispatch(setUserData({ ...res, email }))
      navigate("/verifyotp")
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div
      style={{ height: "100vh" }}
      className='bg-light d-flex justify-content-center align-items-center'>
      <Card>
        <Card.Body>
          <h4 className='text-center mb-3'>Login form</h4>

          <Form onSubmit={onSubmit}>
            <Form.Group className='mb-3'>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                className='bg-light'
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='enter email for otp'
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

          <p className='text-center'>or</p>
          <GoogleButton />
        </Card.Body>
      </Card>
    </div>
  )
}

export default LoginPage
