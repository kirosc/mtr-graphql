module.exports = {
  Query: {
    information: async (
      _source,
      { line, station, language},
      { dataSources }
    ) => dataSources.trainAPI.getStationSchedule(line, station, language)
  }
}
