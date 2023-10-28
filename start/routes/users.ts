import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.resource('users', 'UsersController').except(['edit', 'create'])
}).prefix('/api/v1')
