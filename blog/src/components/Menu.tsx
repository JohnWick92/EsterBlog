import { userAuthType } from '../context/Auth'
import { useAuth } from '../context/useAuth'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import axios from '../api/axios'

export default function Menu() {
  const userAuth = useAuth()
  async function auth(tokenLocal: string) {
    const authUrl = '/blogger/auth'
    try {
      const response = await axios.post(
        authUrl,
        JSON.stringify({ token: tokenLocal }),
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
        userAuth.setUser(userInfo)
      }
    } catch (err) {}
  }
  useEffect(() => {
    const tokenLocal = localStorage.getItem('token')
    if (tokenLocal != null) {
      auth(tokenLocal)
    }
  }, [])
  return (
    <div id='menuWrapper'>
      <ul>
        <li>
          <Link to={'/'}>Blog Home</Link>
        </li>
        <li>
          <Link to={'/About'}>About Me</Link>
        </li>
        <li>
          <Link to={'/Archive'}>Archive</Link>
        </li>
        {userAuth.user != undefined && userAuth.user.token != '' && (
          <li>
            <Link to={'/Write'}>Write</Link>
          </li>
        )}
        <li>
          <button>
            <svg
              width='19'
              height='19'
              viewBox='0 0 19 19'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M13.8966 7.44828C13.8966 11.0096 11.0096 13.8966 7.44828 13.8966C3.88699 13.8966 1 11.0096 1 7.44828C1 3.88699 3.88699 1 7.44828 1C11.0096 1 13.8966 3.88699 13.8966 7.44828Z'
                stroke='white'
                stroke-width='2'
                stroke-linecap='square'
              ></path>
              <path
                d='M0 0L5.58621 5.58621'
                transform='translate(12.4136 12.4141)'
                stroke='white'
                stroke-width='2'
              ></path>
            </svg>
          </button>
        </li>
      </ul>
    </div>
  )
}
