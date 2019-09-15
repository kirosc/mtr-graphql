const { RESTDataSource } = require('apollo-datasource-rest')

class TrainAPI extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = 'https://rt.data.gov.hk/v1/transport/mtr/getSchedule.php/'
  }

  async getStationInformation(line, sta, lang = 'EN') {
    let res = await this.get('', {
      line,
      sta,
      lang
    })
    console.log(this.trainTransformer(res.data[`${line}-${sta}`].UP))
    res = {
      status: res.status,
      message: res.message,
      url: res.url || null,
      isdelay: res.isdelay
    }
    return res
  }

  async getStationSchedule(up, line, sta, lang = 'EN') {
    let res = await this.get('', {
      line,
      sta,
      lang
    })
    let trains = up
      ? res.data[`${line}-${sta}`].UP
      : res.data[`${line}-${sta}`].DOWN

    return this.trainTransformer(trains)
  }

  trainTransformer(trains) {
    return trains.map(train => {
      return {
        eta: train.ttnt,
        platform: train.plat,
        destination: train.dest,
        sequence: train.seq
      }
    })
  }
}

module.exports = TrainAPI
