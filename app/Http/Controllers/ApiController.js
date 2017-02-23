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

  //Posts a new entity to a resource
  * store(request,response){
    const model = this.resource(request.param('resource'))
    const data = request.input('model')
    console.log("lol", data)
    const lol = {
      stageName: "lol",
      realName: "derp"
    }
    console.log("data", data, "\nlol ", lol)
    const result = yield model.create(data)
    // const result = yield model.create(lol)
    response.json(result)
  }

  resource(resource){
    const _model = 'App/Model/' + inflect.classify(resource)
    const model = use(_model)
    return model
  }
}

module.exports = ApiController
