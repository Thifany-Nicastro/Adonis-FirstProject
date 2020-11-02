'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

Route.group(() => {
    Route.get('login', 'AuthController.loginForm')
    Route.post('login', 'AuthController.login')

    Route.get('register', 'AuthController.registerForm')
}).middleware(['guest'])

Route.group(() => {
    Route.resource('products', 'ProductController').validator(new Map([
        [['products.store'], ['Product']]
    ]))
}).middleware(['auth'])

Route.get('logout', 'AuthController.logout')

Route.get('show', 'AuthController.show')