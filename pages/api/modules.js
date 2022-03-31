import Request from './request'

class Modules extends Request {
  getAll() {
    return this.request()
  }
}

export default Modules