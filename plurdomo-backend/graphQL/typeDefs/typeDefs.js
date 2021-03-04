const { gql } = require('apollo-server-express')

const typeDefs = gql `

type Propietario{
    id: Int!
    nombre: String!
    apellido: String!
    email: String!
    cedula: String!
    telefono: String!
    clave: String!
    administrador: Boolean!
    active: Boolean!
}

type Inmueble{
    id: Int!
    alicuota: Float
    numero: Int
    nombre: String
    piso: Int
    saldo: Float
    id_propietario: Int
    id_inmueble: Int
    tipo: String
    active: Boolean!
}


type Query{
    getPropietarios: [Propietario],
    getPropietario(id: Int!): Propietario
    
    getAptos: [Inmueble],
    getApto(id: Int!): Inmueble

    getInmuebles: [Inmueble],
    getInmueble(id: Int!): Inmueble

    getCasas: [Inmueble],
    getCasa(id: Int!): Inmueble

    getEdfs: [Inmueble],
    getEdf(id: Int!): Inmueble
}


type Mutation{
    createPropietario(nombre: String!, apellido: String!, email: String!, cedula: String!, telefono: String!, clave: String!, administrador: Boolean!, active: Boolean!): Propietario!
    updatePropietario(id: Int!, nombre: String!, apellido: String!, email: String!, cedula: String!, telefono: String!, clave: String!, administrador: Boolean!, active: Boolean!): Propietario!

    createInmueble(alicuota: Float, numero: Int, nombre: String, piso:Int, saldo: Float, id_propietario: Int, id_inmueble: Int, tipo: String!, active: Boolean!): Inmueble!
    updateInmueble(id: Int!,alicuota: Float, numero: Int, nombre: String, piso:Int, saldo: Float, id_propietario: Int, id_inmueble: Int, tipo: String, active: Boolean!): Inmueble!
}
`
module.exports = typeDefs