import { Field, InputType } from 'type-graphql'

@InputType()
export class BloggerSignIn {
  @Field()
  password: string

  @Field()
  email: string
}
