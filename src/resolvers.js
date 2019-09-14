module.exports = {
  Query: {
    information: async (_, { line, station, language }, { dataSources }) =>
      dataSources.trainAPI.getStationSchedule(line, station, language),
    up: async (_, { line, station, language }, { dataSources }) =>
      dataSources.trainAPI.getStationSchedule(line, station, language)
  }
}
