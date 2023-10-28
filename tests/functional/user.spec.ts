import { test } from '@japa/runner'
import Database from '@ioc:Adonis/Lucid/Database'

test.group('Users list', (group) => {
  /**
   * @todo handle for all test units
   */
  group.each.setup(async () => {
    await Database.beginGlobalTransaction('sqlite')
    return () => Database.rollbackGlobalTransaction('sqlite')
  })
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
  test('gets a user given an ID', async ({ client }) => {
    const response = await client.get('api/v1/users/2')

    response.assertBodyContains({
      message: String,
      data: {
        id: 2,
        name: String,
        description: String,
        date_of_birth: String,
      },
    })

    response.assertStatus(200)
  })
})
