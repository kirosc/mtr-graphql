const { RESTDataSource } = require('apollo-datasource-rest')

class TrainAPI extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = 'https://rt.data.gov.hk/v1/transport/mtr/getSchedule.php/'
  }

  async getStationSchedule(line, sta, lang = 'EN') {
    const res = await this.get('', {
      line,
      sta,
      lang
    })
    return res
  }
}

module.exports = TrainAPI
