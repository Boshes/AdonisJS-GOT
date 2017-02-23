'use strict'
const List = use('App/Model/List')

class ListController {
  * show (request, response){
    const characters = yield List.all()

    yield response.sendView('welcome', {characters: characters.toJSON()})
  }

}

module.exports = ListController
