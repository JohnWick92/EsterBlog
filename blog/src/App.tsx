import { globalCss } from '@stitches/react'
import { AuthProvider } from './context/Auth'
import { PostProvider } from './context/Post'
import { AppRoutes } from './Routes'

export default function App() {
  const globalStyles = globalCss({
    html: {
      color: '#D9D9D9',
      fontSize: 18,
    },
    body: {
      margin: 0,
      padding: 0,
      backgroundColor: '#292727',
    },
  })
  globalStyles()

  return (
    <AuthProvider>
      <PostProvider>
        <AppRoutes />
      </PostProvider>
    </AuthProvider>
  )
}
