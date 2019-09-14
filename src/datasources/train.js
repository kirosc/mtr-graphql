const { RESTDataSource } = require('apollo-datasource-rest')

class TrainAPI extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = 'https://rt.data.gov.hk/v1/transport/mtr/getSchedule.php/'
  }

  async getStationSchedule(line, sta, lang = 'EN') {
    let res = await this.get('', {
      line,
      sta,
      lang
    })
    res = {
      status: res.status,
      message: res.message,
      url: res.url || null,
      isdelay: res.isdelay,
      up: res.data[`${line}-${sta}`].UP,
      down: res.data[`${line}-${sta}`].DOWN
    }

    return res
  }
}

module.exports = TrainAPI
