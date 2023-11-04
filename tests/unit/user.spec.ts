import { test } from '@japa/runner'

test.group('Users Create and Update', () => {
  // Write your test here
  test('Create', async ({ client }) => {
    const response = await client.post('api/v1/users').json({
      name: 'John Doe',
      address: '7917 Miller Park Apt. 410',
      date_of_birth: '1977-07-10T01:37:30.719Z',
      description: 'Lorem ipsum dolor sit amet',
    })

    response.assertBodyContains({
      message: String,
      data: {
        id: Number,
        name: 'John Doe',
        address: String,
        date_of_birth: '1977-07-10T01:37:30.719Z',
        description: 'Lorem ipsum dolor sit amet',
      },
    })

    response.assertStatus(201)
  })
})
