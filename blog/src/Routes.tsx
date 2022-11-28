import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Archive from './Pages/Archive'
import Post from './components/Post'
import About from './Pages/About'
import Write from './Pages/Write'
import Home from './Pages/Home'
import Auth from './Pages/Auth'

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path='/Archive' element={<Archive />} />
        <Route path='/SignIn' element={<Auth />} />
        <Route path='/About' element={<About />} />
        <Route path='/Write' element={<Write />} />
        <Route path='/Post' element={<Post />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
  )
}
