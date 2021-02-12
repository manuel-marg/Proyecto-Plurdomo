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
    id_propietario: Int!
    piso: Int!
    id_edf: Int!
    alicuota: Int!
    saldo: Int!
    gastos: String!
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

    createApto(id_propietario: Int!, piso: Int!, id_edf: Int!, alicuota: Int!, saldo: Int!, gastos: String!, active: Boolean!): Apto!
}
`
module.exports = typeDefs