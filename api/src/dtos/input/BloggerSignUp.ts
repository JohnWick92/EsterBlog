import { ID, Field, InputType } from 'type-graphql'

@InputType()
export class BloggerSignUp {
  @Field()
  name: string

  @Field()
  password: string

  @Field()
  email: string
}
