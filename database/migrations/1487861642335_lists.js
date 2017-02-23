'use strict'

const Schema = use('Schema')

class ListsTableSchema extends Schema {

  up () {
    this.create('lists', (table) => {
      table.increments()
      table.string('stageName')
      table.string('realName')
      table.timestamps()
    })
  }

  down () {
    this.drop('lists')
  }

}

module.exports = ListsTableSchema
