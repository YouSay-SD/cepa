import Request from './request'

class Countries extends Request {
  getAll() {
    return this.request()
  }

  getById({ id }) {
    return this.request(`countries/${id}`)
  }
}

export default Countries