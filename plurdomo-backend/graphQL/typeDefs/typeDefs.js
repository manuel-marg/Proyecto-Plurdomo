const { gql } = require('apollo-server-express')

const typeDefs = gql `

type Propietario{
    id: Int!
    nombre: String!
    apellido: String!
    email: String!
    active: Boolean!
}

type Query{
    getPropietarios: [Propietario],
    getPropietario(id: Int!): Propietario
}


type Mutation{
    createPropietario(nombre: String!, apellido: String!, email: String!, active: Boolean!): Propietario!
}
`
module.exports = typeDefs