const { gql } = require('apollo-server');

const typeDefs = gql`
type Query {
  letters: [Letter]!
  ost: [Ost]
  intense: [Intense]
  letter(id: ID!): [Letter]
  randomPerson: [Person]!
}
type Letter {
  id: ID!
  title: String
  send_place: String
  dest_place: String
  date: String
  sender: String
  receiver: String
  content: String
}
type Person {
  name: String
  surname: String
  email: String
}
type Term {
  name: String
  id: String
}

type File {
  name: String
  url: String
  id: String
}


type Geometry {
  value: String
  type: String
}

type Contact {
  value: String
  type: String
}

type Intense {
  name: String
  descrizione: String
  tappe: [Tappa]
  periodoStart: String
  periodoEnd: String
  distanza: Int
  dislivelloPositivo: Int
  dislivelloNegativo: Int
  altezzaMassima: Int
  altezzaMinima: Int
  altezzaStart: Int
  altezzaEnd: Int
  mezziTrasporto: [Term]
  durataPercorso: Int
  pendenzaMax: Int
  allegati: [File]
  immagine: File
  geometry: Geometry
  locale: String
}

type Tappa {
  name: String
  descrizione: String
  durataPercorso: Int
  ost: [Ost]
  locale: String
}

type MezzoVal
{
  type: String
  value: String
}

type Ost {
  name: String
  descrizione: String
  type: String
  identificativoCatasto: String
  identificativo: String
  lunghezza: Int
  pendenza: Int
  dislivelloSalita: Int
  dislivelloDiscesa: Int
  tempoPercorrenza: [MezzoVal]
  gradoProtezione: Int
  percorrenza: String
  visitabile: Boolean
  fruizione: [Term]
  tipologia: [Term]
  tematica: [Term]
  statoFondo: [Term]
  tipoFondo: [Term]
  presenzaSegnaletica: [Term]
  accessibilitaDisabili: [Term]
  riconoscimenti: [Term]
  rete: [Term]
  ambito: [Term]
  esposizioneRischi: [Term]
  gradoDifficolta: [MezzoVal]
  contatti: [Contact]
  allegati: [File]
  immagine: File
  geometry: Geometry
  locale: String
}





`

module.exports = typeDefs;