import { ID, Field, InputType } from 'type-graphql'

@InputType()
export class PostInput {
  @Field()
  title: string

  @Field()
  author: string

  @Field()
  article: string

  @Field()
  authorId: string

  @Field()
  description: string

  @Field()
  like: number

  @Field()
  createdAt: Date
}
