module.exports = {
  Query: {
    information: async (_, { line, station, language }, { dataSources }) =>
      dataSources.trainAPI.getStationInfo(line, station, language),
    up: async (_, { line, station, language }, { dataSources }) =>
      dataSources.trainAPI.getStationSchedule(true, line, station, language),
    down: async (_, { line, station, language }, { dataSources }) =>
      dataSources.trainAPI.getStationSchedule(false, line, station, language)
  }
}
