import User from 'App/Models/User'
import Factory from '@ioc:Adonis/Lucid/Factory'

export default Factory.define(User, ({ faker }) => {
  return {
    name: faker.person.fullName(),
    address: faker.location.streetAddress(true),
    // date_of_birth: faker.date.birthdate(),
    description: faker.word.words(),
  }
}).build()
