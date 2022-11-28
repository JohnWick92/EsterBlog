import { ButtonPrimitive } from '../styles/Button'
import { useAuth } from '../context/useAuth'
import Menu from '../components/Menu'
import { useState } from 'react'
import axios from '../api/axios'
import {
  ArticleInput,
  ArticleLabel,
  Container,
  DescriptionInput,
  DescriptionLabel,
  TitleInput,
  TitleLabel,
} from '../styles/Write'

const PostInUrl = '/post/createPost'

export default function Write() {
  const authContext = useAuth()
  const [title, setTitle] = useState('')
  const [article, setArticle] = useState('')
  const [description, setDescription] = useState('')
  async function postIt() {
    try {
      await axios.post(
        PostInUrl,
        JSON.stringify({
          title: title,
          article: article,
          description: description,
          author: authContext.user?.name,
          authorId: authContext.user?.id,
        }),
        {
          headers: { 'content-type': 'application/json' },
        }
      )
    } catch (err) {}
  }
  return (
    <>
      <Menu />
      <div style={{ textAlign: 'center', padding: '35px' }}>
        <h1>Make your post</h1>
      </div>
      <Container>
        <TitleLabel>
          <p>
            Title:{' '}
            <TitleInput
              type='text'
              id='titleInput'
              placeholder='Insert here your title'
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </p>
        </TitleLabel>
        <DescriptionLabel>
          <p>
            Description:{' '}
            <DescriptionInput
              type='text'
              id='descriptionInput'
              placeholder='Describe your post in 10 words'
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
          </p>
        </DescriptionLabel>
        <ArticleLabel>
          <p>
            Your Article:{' '}
            <ArticleInput
              type='text'
              id='articleInput'
              onChange={(e) => setArticle(e.target.value)}
              value={article}
            />
          </p>
        </ArticleLabel>
        <ButtonPrimitive style={{ marginBottom: '30px' }} onClick={postIt}>
          Post IT!
        </ButtonPrimitive>
      </Container>
    </>
  )
}
