'use strict'

class Product {
  get rules () {
    return {
      name: "required",
    }
  }

  async fails (errorMessages) {
    return this.ctx.response.send(errorMessages)
  }
}

module.exports = Product
