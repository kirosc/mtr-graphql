const { gql } = require('apollo-server');

const typeDefs = gql`
  enum Lines {
    AEL
    TCL
    WRL
    TKL
  }

  enum Stations {
    AIR
    AUS
    AWE
    ETS
    HAH
    HOK
    HUH
    KOW
    KSR
    LAK
    LHP
    LOP
    MEF
    NAC
    NOP
    OLY
    POA
    QUB
    SIH
    SUN
    TIK
    TIS
    TKO
    TSY
    TUC
    TUM
    TWW
    YAT
    YUL
  }

  enum Languages {
    EN
    TC
  }

  type Query {
    information(line: Lines, station: Stations, language: Languages): Information!
    up(line: Lines, station: Stations, language: Languages): [Train]!
    down(line: Lines, station: Stations, language: Languages): [Train]!
  }

  type Information {
    status: Int!
    message: String!
    url: String
    isdelay: String
  }

  type Train {
    eta: Int!
    platform: Int!
    destination: String!
    sequence: Int!
  }
`
module.exports = typeDefs;
