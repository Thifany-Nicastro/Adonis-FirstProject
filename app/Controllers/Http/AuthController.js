'use strict'

class AuthController {
    async loginForm ({ request, response, view }) {
        return view.render('auth.login')
    }

    async login ({ request, response, auth }) {
        const { email, password } = request.all()
        await auth.attempt(email, password)

        return response.redirect('/products')
    }

    async registerForm ({ request, response, view }) {
        return view.render('auth.register')
    }

    show ({ auth, params }) {
        if (auth.user.id !== Number(params.id)) {
          return 'You cannot see someone else\'s profile'
        }
        return auth.user
    }

    async logout ({ request, response, auth }) {
        await auth.logout()

        return response.redirect('/login')
    }
}

module.exports = AuthController
