import { PREVIEW_BY_LIKE } from '../gql/Querys'
import { useNavigate } from 'react-router-dom'
import { PreviewPosts } from '../styles/PreviewPosts'
import { usePost } from '../context/usePost'
import { useQuery } from '@apollo/client'
import Menu from '../components/Menu'
import moment from 'moment'

type postType = {
  id: string
  title: string
  description: string
  createdAt: Date
}

function get() {
  const { data, error } = useQuery(PREVIEW_BY_LIKE)
  if (error) console.log(error.message)
  return data
}

export default function Home() {
  const navigate = useNavigate()
  const postContext = usePost()
  const data = get()
  return (
    <div className='Home' style={{ textAlign: 'center', marginInline: 405 }}>
      <Menu />
      {data &&
        data.getAllByLike.map((post: postType) => (
          <PreviewPosts
            key={post.id}
            onClick={() => {
              postContext.setPost(post)
              navigate('/Post')
            }}
          >
            <div>{post.title}</div>
            <div>{post.description}</div>
            <div>{moment(post.createdAt).format('L')}</div>
          </PreviewPosts>
        ))}
    </div>
  )
}
