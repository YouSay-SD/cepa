const SERVER_URL = 'https://gestion.progresividadtributaria.com.ar/api'

class Request {
  constructor(resource) {
    this.resource = resource
  }

  request(resource = this.resource, options = {}) {
    const requestOptions = {...options}

    requestOptions.headers = new Headers({
      'Content-Type': 'application/json',
      ...options.headers
    })

    if(options.body) {
      requestOptions.body = JSON.stringify(options.body)
    }

    return fetch(`${SERVER_URL}/${resource}`, requestOptions).then(data => data.json())
  }
}

export default Request