import { ID, Field, ObjectType } from 'type-graphql'

@ObjectType()
export class Blogger {
  @Field(() => ID)
  id: string

  @Field()
  name: string

  @Field()
  password?: string

  @Field()
  email: string

  @Field()
  token?: string
}
