'use strict'

const inflect = require('i')()

class ApiController {
  //Gets many /api/:resource
  * index (request,response){
    const model = this.resource(request.param('resource'))
    const query = model.query()
    const results = yield query.fetch()
    response.json(results)
  }

  // Gets 1 /api/:resource/:id
* show (request, response) {
  const model = this.resource(request.param('resource'))
  const query = model.query().where({ id: request.param('id') })
  const result = yield query.first()
  response.json(result)
}

  //Posts a new entity to a resource /api/:resource
  * store(request,response){
    const model = this.resource(request.param('resource'))
    const data = JSON.parse(request.input('model'))
    const result = yield model.create(data)
    response.json(result)
  }

  // update an entity /api/:resource/:id
  * update (request, response) {
    const model = this.resource(request.param('resource'))
    const data = JSON.parse(request.input('model'))
    const instance = yield model.find(request.param('id'))
    console.log("the data", data, "the instance", instance)
    Object.keys(instance.attributes).map((f) => {
      console.log("the f", f, "instance f", instance[f], "the data f", data[f])
      instance[f] = data[f]
    })
    const result = yield instance.save()
    response.json({ result })
  }

  // delete - DELETE /api/:resource/:id
  * destroy (request, response) {
    const model = this.resource(request.param('resource'))
    const record = yield model.find(request.param('id'))
    const result = yield record.delete()
    response.json({ result })
  }

  resource(resource){
    const _model = 'App/Model/' + inflect.classify(resource)
    const model = use(_model)
    return model
  }
}

module.exports = ApiController
