import { ButtonPrimitive } from '../styles/Button'
import { SignInDiv } from '../styles/SignInDiv'
import { userAuthType } from '../context/Auth'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/useAuth'
import Menu from '../components/Menu'
import { useState } from 'react'
import axios from '../api/axios'

const signInUrl = '/blogger/signIn'

export default function Auth() {
  const authContext = useAuth()
  const navigate = useNavigate()
  async function login() {
    try {
      const response = await axios.post(
        signInUrl,
        JSON.stringify({ email, password }),
        {
          headers: { 'content-type': 'application/json' },
        }
      )
      if (response.data) {
        const userInfo: userAuthType = {
          id: response.data.id,
          name: response.data.name,
          token: response.data.token,
          email: response.data.email,
        }
        if (userInfo.token) {
          localStorage.setItem('token', userInfo.token)
        }
        authContext.setUser(userInfo)
        navigate('/Write')
      }
    } catch (err) {}
  }
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <div>
      <Menu />
      <SignInDiv>
        <p>
          <label style={{ marginRight: 15 }} htmlFor='email'>
            email:
          </label>
          <input
            autoComplete='off'
            style={{ color: 'black' }}
            type='text'
            name='email'
            onChange={(e) => setEmail(e.target.value)}
          />
        </p>
        <br />
        <p>
          <label style={{ marginRight: 15 }} htmlFor='password'>
            Password:
          </label>
          <input
            style={{ color: 'black' }}
            type='password'
            name='password'
            onChange={(e) => setPassword(e.target.value)}
          />
        </p>
        <br />
        <ButtonPrimitive onClick={login}>Login</ButtonPrimitive>
        <ButtonPrimitive onClick={authContext.logout}>Logout</ButtonPrimitive>
      </SignInDiv>
    </div>
  )
}
