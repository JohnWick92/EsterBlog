import {
  Article,
  CreatedTime,
  Header,
  NotFound,
  PostView,
  SubTitle,
  Title,
} from '../styles/Post'
import { postType } from '../context/Post'
import { usePost } from '../context/usePost'
import { useQuery } from '@apollo/client'
import { GET_POST } from '../gql/Querys'
import moment from 'moment'
import Menu from './Menu'

function getPost(postTitle?: string) {
  if (postTitle != undefined && postTitle != null) {
    const { data, error } = useQuery(GET_POST, {
      variables: {
        title: postTitle,
      },
    })
    if (error) console.log(error.message)
    return data
  }
}

export default function Post() {
  const postContext = usePost()
  const post: postType = getPost(postContext.post?.title)
  return (
    <div>
      <Menu />
      {post?.getPost == null ? (
        <NotFound>
          <h1>
            Post Not found :&#40; <br />
            Go home and acess again the post
          </h1>
        </NotFound>
      ) : (
        <PostView>
          <Header>
            <Title>{post.getPost.title}</Title>
            <SubTitle>{post.getPost.author}</SubTitle>
            <CreatedTime>
              {moment(post.getPost.createdAt).format('L')}
            </CreatedTime>
          </Header>
          <Article>
            <p>{post.getPost.article}</p>
          </Article>
        </PostView>
      )}
    </div>
  )
}
