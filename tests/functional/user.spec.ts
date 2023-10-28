import { test } from '@japa/runner'

test.group('Users list', () => {
  test('gets a paginated list of users', async ({ client }) => {
    const response = await client.get('api/v1/users')

    response.assertBodyContains({
      meta: {},
      data: [],
    })

    response.assertStatus(200)
  })
})

test.group('Users Show', () => {
  test('gets a user given an Id', async ({ client }) => {
    const response = await client.get('api/v1/users/2')

    response.assertBodyContains({
      message: String,
      data: {
        id: Number,
        name: String,
        description: String,
        date_of_birth: String,
      },
    })

    response.assertStatus(200)
  })
})
