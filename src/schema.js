import { gql } from 'apollo-server'

export const typeDefs = gql`
  enum lines {
    AEL
    TCL
    WRL
    TKL
  }

  enum stations {
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

  enum languages {
    EN
    TC
  }

  type Query {
    status: Int!
    message: String!
    url: String
    curr_time: String!
    sys_time: String!
    isdelay: String!
  }

  type Direction {
      trains: [Train]
  }

  type Train {
    eta: Int!
    platform: Int!
    destination: String!
    sequence: Int!
  }
`