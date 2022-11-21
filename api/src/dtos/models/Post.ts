import { ID, Field, ObjectType } from 'type-graphql'

@ObjectType()
export class Post {
  @Field(() => ID)
  id: string

  @Field()
  title: string

  @Field()
  author: string

  @Field()
  article: string

  @Field()
  authorId: string

  @Field()
  createdAt: Date
}
