import { useState } from "react"
import { Card, Form, Button } from "react-bootstrap"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { setCredentials } from "../features/users/userSlice"
import { useRegisterUserMutation } from "../features/api/authApi"
import toast from "react-hot-toast"

const CreateUserPage = () => {
  const [name, setName] = useState("")
  const { userData } = useSelector((state) => state.user)
  const [registerUser] = useRegisterUserMutation()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await registerUser({ name, email: userData.email })
      dispatch(setCredentials({ ...res.data.user, token: res.data.token }))
      navigate("/dashboard")
      console.log(res)
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
          <h4 className='text-center mb-2'>Create user </h4>
          <strong className='mb-1'>
            {userData?.email ? userData?.email : ""}
          </strong>

          <Form onSubmit={onSubmit}>
            <Form.Group className='mb-3'>
              <Form.Label>
                Enter name <span className='text-danger'>*</span>
              </Form.Label>
              <Form.Control
                className='bg-light'
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='Enter name'
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

export default CreateUserPage
