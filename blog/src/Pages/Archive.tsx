import { PreviewPosts } from '../styles/PreviewPosts'
import { PREVIEW_BY_DATE } from '../gql/Querys'
import { useNavigate } from 'react-router-dom'
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
  const { data, error } = useQuery(PREVIEW_BY_DATE)
  if (error) console.log(error.message)
  return data
}

export default function Archive() {
  const navigate = useNavigate()
  const postContext = usePost()
  const data = get()
  return (
    <div className='Archive' style={{ textAlign: 'center', marginInline: 405 }}>
      <Menu />
      {data &&
        data.getAllByDate.map((post: postType) => (
          <PreviewPosts
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
