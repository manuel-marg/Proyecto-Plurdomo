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
    active: Boolean!
}

type Inmueble{
    id: Int!
    alicuota: Float!
    saldo: Int!
    id_propietario: Int
    active: Boolean!
}

type Apto{
    id: Int!
    nro: Int!
    piso: Int!
    id_edf: Int!
    id_inmueble: Int!
    active: Boolean!
}

type Casa{
    id: Int!
    nombre: String!
    nro: Int!
    id_inmueble: Int!
    active: Boolean!
}

type Edf{
    id: Int!
    nombre: String!
    active: Boolean!
}

type Query{
    getPropietarios: [Propietario],
    getPropietario(id: Int!): Propietario
    
    getAptos: [Apto],
    getApto(id: Int!): Apto

    getInmuebles: [Inmueble],
    getInmueble(id: Int!): Inmueble

    getCasas: [Casa],
    getCasa(id: Int!): Casa

    getEdfs: [Edf],
    getEdf(id: Int!): Edf
}


type Mutation{
    createPropietario(nombre: String!, apellido: String!, email: String!, cedula: String!, telefono: String!, clave: String!, active: Boolean!): Propietario!
    updatePropietario(id: Int!, nombre: String!, apellido: String!, email: String!, cedula: String!, telefono: String!, clave: String!, active: Boolean!): Propietario!

    createInmueble(alicuota: Float!, saldo: Int!, id_propietario: Int, active: Boolean!): Inmueble!
    updateInmueble(id: Int!, alicuota: Float!, saldo: Int!, id_propietario: Int, active: Boolean!): Inmueble!

    createApto(nro: Int!, piso: Int!, id_edf: Int!, id_inmueble: Int!, active: Boolean!): Apto!
    updateApto(id: Int!, nro: Int!, piso: Int!, id_edf: Int!, id_inmueble: Int!, active: Boolean!): Apto!

    createCasa(nombre: String!, nro: Int!, id_inmueble: Int!, active: Boolean!): Casa!
    updateCasa(id: Int!, nombre: String!, nro: Int!, id_inmueble: Int!, active: Boolean!): Casa!

    createEdf(nombre: String!, active: Boolean!): Edf!
    updateEdf(id: Int!, nombre: String!, active: Boolean!): Edf!
}
`
module.exports = typeDefs