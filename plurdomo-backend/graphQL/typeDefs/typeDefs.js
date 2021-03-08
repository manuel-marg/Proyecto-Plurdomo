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
    alicuota: Float!
    numero: Int
    nombre: String
    piso: Int
    saldo: Float
    id_propietario: Int
    id_inmueble: Int
    tipo: String!
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
    tipo: String!
    dia: Int!
    mes: Int!
    anio: Int!
    concepto: String!
    historico: Boolean!
    active: Boolean!
}

type Instrumento_pago{
    id: Int!
    tipo: String!
    referencia: String!
    monto: Float!
    dia: Int!
    mes: Int!
    anio: Int!
    id_pago: Int!
    active: Boolean!
}

type Pago{
    id: Int!
    monto: Float!
    dia: Int!
    mes: Int!
    anio: Int!
    id_factura: Int!
    pendiente: Boolean!
    pagado: Boolean!
    active: Boolean!
}

type Factura{
    id: Int!
    nombre: String! 
    gastos_comunes: String
    gastos_nocomunes: String
    deuda_total: Float
    alicuota: Float 
    saldo: Float
    id_inmueble: Int!
    dia_em: Int!
    mes_em: Int!
    anio_em: Int!
    n_factura: Int!
    historico: Boolean!
    active: Boolean!
}

type Genera_gasto{
    id_gasto: Int!
    id_inmueble: Int!
    active: Boolean!
}


type Query{
    getPropietarios: [Propietario],
    getPropietario(id: Int!): Propietario
    
    getAptos: [Inmueble]
    getAptosEdificio(id_inmueble: Int!): [Inmueble] 

    getInmuebles: [Inmueble],
    getInmueble(id: Int!): Inmueble

    getCasas: [Inmueble]

    getEdfs: [Inmueble]

    getCondominios: [Condominio],
    getCondominio(id: Int!): Condominio

    getGastos: [Gasto],
    getGasto(id: Int!): Gasto
    
    getInstrumentos: [Instrumento_pago],
    getInstrumento(id: Int!): Instrumento_pago

    getPagos: [Pago],
    getHistoricoPagos: [Pago],
    getPago(id: Int!): Pago

    getFacturas: [Factura],
    getFactura(id: Int!): Factura

    getGenerados: [Genera_gasto],
    
}


type Mutation{
    createPropietario(nombre: String!, apellido: String!, email: String!, cedula: String!, telefono: String!, clave: String!, administrador: Boolean!, active: Boolean!): Propietario!
    updatePropietario(id: Int!, nombre: String!, apellido: String!, email: String!, cedula: String!, telefono: String!, clave: String!, administrador: Boolean!, active: Boolean!): Propietario!

    createInmueble(alicuota: Float!, numero: Int, nombre: String, piso:Int, saldo: Float, id_propietario: Int, id_inmueble: Int, tipo: String!, active: Boolean!): Inmueble!
    updateInmueble(id: Int!,alicuota: Float!, numero: Int, nombre: String, piso:Int, saldo: Float, id_propietario: Int, id_inmueble: Int, tipo: String!, active: Boolean!): Inmueble!

    createCondominio(nombre: String!, municipio: String!, estado: String!, codigo_urb: String!, active: Boolean!): Condominio!
    updateCondominio(id: Int!, nombre: String!, municipio: String!, estado: String!, codigo_urb: String!, active: Boolean!): Condominio!

    createGasto(monto: Float, tipo: String!, dia: Int!, mes: Int!, anio: Int!, concepto: String!, historico: Boolean!, active: Boolean!): Gasto!
    updateGasto(id: Int!, monto: Float, tipo: String!, dia: Int!, mes: Int!, anio: Int!, concepto: String!, historico: Boolean!, active: Boolean!): Gasto!
    
    createInstrumento(tipo: String!, referencia: String!, monto: Float!, dia: Int!, mes: Int!, anio: Int!, id_pago: Int!, active: Boolean!): Instrumento_pago!
    deleteInstrumento(id: Int!): Instrumento_pago!

    createPago(monto: Float!, dia: Int!, mes: Int!, anio: Int!, id_factura: Int!, pendiente: Boolean!, pagado: Boolean!, active: Boolean!): Pago!
    updatePago(id: Int!, monto: Float!, dia: Int!, mes: Int!, anio: Int!, id_factura: Int!, pendiente: Boolean!, pagado: Boolean!, active: Boolean!): Pago!
    checkPago(id: Int!): Pago!
    uncheckPago(id: Int!): Pago!
    

    createFactura(nombre: String!,gastos_comunes: String, gastos_nocomunes: String, deuda_total: Float,alicuota: Float ,saldo: Float,id_inmueble: Int!,dia_em: Int!,mes_em: Int!, anio_em: Int!,n_factura: Int!, historico: Boolean!, active: Boolean!): Factura!
    updateFactura(id: Int!, nombre: String!,gastos_comunes: String,gastos_nocomunes: String,deuda_total: Float,alicuota: Float ,saldo: Float,id_inmueble: Int!,dia_em: Int!,mes_em: Int!, anio_em: Int!,n_factura: Int!, historico: Boolean!, active: Boolean!): Factura!    

    generarGasto(id_gasto: Int!, id_inmueble: Int!, active: Boolean!): Genera_gasto!
    deleteGenerar_Gasto(id: Int!): Genera_gasto!
}
`
module.exports = typeDefs