'use strict'

const characters = require('../../resources/fixtures/seed.js').characters
const List = use('App/Model/List')
const Factory = use('Factory')

class ListSeeder {

  * run () {
    // run model/database factories here
    for(let character of characters){
      yield List.create(character)
    }
    return
  }
}

module.exports = ListSeeder
