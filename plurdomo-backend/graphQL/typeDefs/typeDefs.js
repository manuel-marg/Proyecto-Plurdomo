const { gql } = require('apollo-server-express')

const typeDefs = gql `

type Propietario{
    id: Int!
    nombre: String!
    apellido: String!
    email: String!
    active: Boolean!
}

type Apto{
    id: Int!
    owner: String!
    piso: Int!
    edf: String!
    active: Boolean!
}

type Query{
    getPropietarios: [Propietario],
    getPropietario(id: Int!): Propietario
    
    getAptos: [Apto],
    getApto(id: Int!): Apto
}


type Mutation{
    createPropietario(nombre: String!, apellido: String!, email: String!, active: Boolean!): Propietario!
    updatePropietario(id: Int!, nombre: String!, apellido: String!, email: String!, active: Boolean!): Propietario!

    createApto(owner: String!, piso: Int!, edf: String!, active: Boolean!): Apto!
}
`
module.exports = typeDefs