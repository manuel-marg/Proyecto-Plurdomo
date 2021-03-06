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

type Condominio{
    id: Int!
    nombre: String!
    municipio: String!
    estado: String!
    codigo_urb: String!
    active: Boolean!
}

type Gasto{
    id: Int!
    monto: Float
    dia: Int!
    mes: Int!
    anio: Int!
    concepto: String!
    active: Boolean!
}

type Query{
    getPropietarios: [Propietario],
    getPropietario(id: Int!): Propietario
    
    getAptos: [Inmueble]

    getInmuebles: [Inmueble],
    getInmueble(id: Int!): Inmueble

    getCasas: [Inmueble]

    getEdfs: [Inmueble]

    getCondominios: [Condominio],
    getCondominio(id: Int!): Condominio

    getGastos: [Gasto],
    getGasto(id: Int!): Gasto
}


type Mutation{
    createPropietario(nombre: String!, apellido: String!, email: String!, cedula: String!, telefono: String!, clave: String!, administrador: Boolean!, active: Boolean!): Propietario!
    updatePropietario(id: Int!, nombre: String!, apellido: String!, email: String!, cedula: String!, telefono: String!, clave: String!, administrador: Boolean!, active: Boolean!): Propietario!

    createInmueble(alicuota: Float, numero: Int, nombre: String, piso:Int, saldo: Float, id_propietario: Int, id_inmueble: Int, tipo: String!, active: Boolean!): Inmueble!
    updateInmueble(id: Int!,alicuota: Float, numero: Int, nombre: String, piso:Int, saldo: Float, id_propietario: Int, id_inmueble: Int, tipo: String, active: Boolean!): Inmueble!

    createCondominio(nombre: String!, municipio: String!, estado: String!, codigo_urb: String!, active: Boolean!): Condominio!
    updateCondominio(id: Int!, nombre: String!, municipio: String!, estado: String!, codigo_urb: String!, active: Boolean!): Condominio!

    createGasto(monto: Float, dia: Int!, mes: Int!, anio: Int!, concepto: String!, active: Boolean!): Gasto!
    updateGasto(id: Int!, monto: Float, dia: Int!, mes: Int!, anio: Int!, concepto: String!, active: Boolean!): Gasto!
}
`
module.exports = typeDefs