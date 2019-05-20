const { MockList } = require('graphql-tools');
const mocks = {
  Int: () => Math.floor(Math.random() * 2000),
  Float: () => 22.1,
  String: () => 'Lorem ipsum dolor sit',
  ID: () => Math.floor(Math.random() * 2000),
  Query: () => ({
    letter: () => new MockList(3)
  }),
  Intense: () => generateRandomIntense(),
  Tappa: () => generateRandomTappa(),
  Geometry: () => generateRandomGeometry(),
  Ost: () => generateRandomOst()
};

function randomDate(start, end) {
  let date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  var dd = date.getDate();
  var mm = date.getMonth() + 1; //January is 0!

  var yyyy = date.getFullYear();
  if (dd < 10) {
    dd = '0' + dd;
  }
  if (mm < 10) {
    mm = '0' + mm;
  }
  let str = dd + '/' + mm + '/' + yyyy;
  return str;
}


function generateRandomIntense() {
  let intense = fakeDataIntense[Math.floor(Math.random() * (fakeDataIntense.length - 1))];
  intense.periodoStart = randomDate(new Date(2019, 0, 1), new Date(2019, 12, 1));
  intense.periodoEnd = randomDate(new Date(2019, 0, 1), new Date(2019, 12, 1));
  return intense;
}


function generateRandomTappa() {
  let tappa = fakeTappe[Math.floor(Math.random() * (fakeTappe.length - 1))];
  tappa.durataPercorso = Math.floor(Math.random() * 48);
  return tappa;
}

function generateRandomOst() {
  let ost = fakeOst[Math.floor(Math.random() * (fakeOst.length - 1))];
  ost.durataPercorso = Math.floor(Math.random() * 48);
  return ost;
}

const fakeDataIntense = [
  {
    "name": "Dalla chiesa de La Solitudine al Redentore",
    "descrizione": "<p>Con partenza dalla chiesa de <em>La Solitudine</em>, il sentiero 101 consente di raggiungere, <strong>in costante ma non difficile salita</strong>, la statua del <em>Redentore</em>, attraverso incantevoli lembi di foresta, tra massi granitici dalle forme inconsuete e antiche tracce dell’uomo. Il percorso <strong>rappresentava la principale via d’accesso alle parti più alte del Monte</strong> prima della realizzazione dell’attuale strada asfaltata. &nbsp;&nbsp;Le <strong>croci di ferro infisse sulla roccia</strong>&nbsp;che si incontrano lungo il cammino&nbsp;ci ricordano l’<strong>itinerario seguito dai</strong>&nbsp;<strong>pellegrini</strong> che nel 1901&nbsp;accompagnarono in processione la statua del Redentore sino all’attuale posizione con vista panoramica sulla città. &nbsp;<strong>Il sentiero interseca in più punti la strada provinciale</strong>, consentendo di percorrere anche solo singole sezioni del tracciato: in tali attraversamenti occorrerà prestare particolare attenzione al traffico automobilistico, generalmente a bassa intensità.</p>\r\n"
  },
  {
    "name": "Is Cannoneris - Monte Nieddu (201)",
    "descrizione": "<p>Il sentiero parte dai pressi della <em>Casa Forestale</em> di<em> Is Cannoneris</em> (717 m s.l.s.).</p>\r\n\r\n<p>Dopo &nbsp;un primo tratto in decisa discesa, procede seguendo ciò che resta di un'antica carrareccia immersa nel bosco fitto. Costeggierai a metà del cammino il&nbsp;<em>Canale de is Canargius&nbsp;</em>per poi risalire ripidamente, &nbsp;incrociando &nbsp;un'antica mulattiera di carbonai verso&nbsp;<em>S’arcu ‘e S’Arrideli</em> (431 m s.l.s.)</p>\r\n\r\n<p>La parte più gradevole del percorso è rappresentato da un tratto finale assai panoramico che riporta a fondo valle, passando per i resti della <em>dispensa di Porcileddu </em>(210 m s.l.m.).</p>\r\n\r\n<p>&nbsp;</p>\r\n",
  }, {
    "name": "Perdu Melis - Mitza Fanebas (205)",
    "descrizione": "<p>Da Cagliari, in automobile, seguire la Statale 195 per Pula, girare dopo 12 km per la dorsale consortile (in direzione Macchiareddu) e imboccare la seconda strada ovest per proseguire fino alla chiesa campestre di S. Lucia. Di qui seguire la segnaletica WWF fino ad arrivare al Centro visite di \"Sa Canna\".</p>\r\n\r\n<p>Proseguire nella strada bianca - per circa 6 km - verso la Foresteria di <em>Perdu Melis</em> (304 m s.l.s.). Lasciata l'auto nel parcheggio antistante alla foresteria, seguire il percorso 205: dopo pochi metri, lasciando sulla destra il sentiero 203, è possibile trovare la sorgente di <em>Mitza su Suergiu</em> (450 m s.l.m).</p>\r\n\r\n<p>Si prosegue per il sentiero in salita fino ad arrivare al punto più alto del percorso S'arcu Su Suergiu. Scendendo - dopo circa 50 minuti di cammino - il sentiero si allarga divenendo una pista che conduce all'area pic-nic di<em> Mitza Fanebas</em>, area attrezzata con tavoli, punti fuoco e sorgente.</p>\r\n\r\n<p>Proseguendo lungo il sentiero si raggiunge la Strada Provinciale n. 1.</p>\r\n\r\n<p><em><strong>Il percorso è fruibile a piedi, in mountain-bike, a cavallo ed è adatto a chi pratica il nordic walking</strong></em>. Le aree attraversate sono ricche di fauna: non è difficile scorgere cinghiali.<br />\r\n&nbsp;</p>\r\n",
  },
  {
    "name": "Is Cannoneris - Monte Nieddu (201)",
    "descrizione": "<p>Il sentiero parte dai pressi della <em>Casa Forestale</em> di<em> Is Cannoneris</em> (717 m s.l.s.).</p>\r\n\r\n<p>Dopo &nbsp;un primo tratto in decisa discesa, procede seguendo ciò che resta di un'antica carrareccia immersa nel bosco fitto. Costeggierai a metà del cammino il&nbsp;<em>Canale de is Canargius&nbsp;</em>per poi risalire ripidamente, &nbsp;incrociando &nbsp;un'antica mulattiera di carbonai verso&nbsp;<em>S’arcu ‘e S’Arrideli</em> (431 m s.l.s.)</p>\r\n\r\n<p>La parte più gradevole del percorso è rappresentato da un tratto finale assai panoramico che riporta a fondo valle, passando per i resti della <em>dispensa di Porcileddu </em>(210 m s.l.m.).</p>\r\n\r\n<p>&nbsp;</p>\r\n",
  }
];
const fakeTappe = [
  {
    "name": "Dalla chiesa de La Solitudine al Redentore",
    "descrizione": "<p>Con partenza dalla chiesa de <em>La Solitudine</em>, il sentiero 101 consente di raggiungere, <strong>in costante ma non difficile salita</strong>, la statua del <em>Redentore</em>, attraverso incantevoli lembi di foresta, tra massi granitici dalle forme inconsuete e antiche tracce dell’uomo. Il percorso <strong>rappresentava la principale via d’accesso alle parti più alte del Monte</strong> prima della realizzazione dell’attuale strada asfaltata. &nbsp;&nbsp;Le <strong>croci di ferro infisse sulla roccia</strong>&nbsp;che si incontrano lungo il cammino&nbsp;ci ricordano l’<strong>itinerario seguito dai</strong>&nbsp;<strong>pellegrini</strong> che nel 1901&nbsp;accompagnarono in processione la statua del Redentore sino all’attuale posizione con vista panoramica sulla città. &nbsp;<strong>Il sentiero interseca in più punti la strada provinciale</strong>, consentendo di percorrere anche solo singole sezioni del tracciato: in tali attraversamenti occorrerà prestare particolare attenzione al traffico automobilistico, generalmente a bassa intensità.</p>\r\n",
  },
  {
    "name": "Is Cannoneris - Monte Nieddu (201)",
    "descrizione": "<p>Il sentiero parte dai pressi della <em>Casa Forestale</em> di<em> Is Cannoneris</em> (717 m s.l.s.).</p>\r\n\r\n<p>Dopo &nbsp;un primo tratto in decisa discesa, procede seguendo ciò che resta di un'antica carrareccia immersa nel bosco fitto. Costeggierai a metà del cammino il&nbsp;<em>Canale de is Canargius&nbsp;</em>per poi risalire ripidamente, &nbsp;incrociando &nbsp;un'antica mulattiera di carbonai verso&nbsp;<em>S’arcu ‘e S’Arrideli</em> (431 m s.l.s.)</p>\r\n\r\n<p>La parte più gradevole del percorso è rappresentato da un tratto finale assai panoramico che riporta a fondo valle, passando per i resti della <em>dispensa di Porcileddu </em>(210 m s.l.m.).</p>\r\n\r\n<p>&nbsp;</p>\r\n",
  }, {
    "name": "Perdu Melis - Mitza Fanebas (205)",
    "descrizione": "<p>Da Cagliari, in automobile, seguire la Statale 195 per Pula, girare dopo 12 km per la dorsale consortile (in direzione Macchiareddu) e imboccare la seconda strada ovest per proseguire fino alla chiesa campestre di S. Lucia. Di qui seguire la segnaletica WWF fino ad arrivare al Centro visite di \"Sa Canna\".</p>\r\n\r\n<p>Proseguire nella strada bianca - per circa 6 km - verso la Foresteria di <em>Perdu Melis</em> (304 m s.l.s.). Lasciata l'auto nel parcheggio antistante alla foresteria, seguire il percorso 205: dopo pochi metri, lasciando sulla destra il sentiero 203, è possibile trovare la sorgente di <em>Mitza su Suergiu</em> (450 m s.l.m).</p>\r\n\r\n<p>Si prosegue per il sentiero in salita fino ad arrivare al punto più alto del percorso S'arcu Su Suergiu. Scendendo - dopo circa 50 minuti di cammino - il sentiero si allarga divenendo una pista che conduce all'area pic-nic di<em> Mitza Fanebas</em>, area attrezzata con tavoli, punti fuoco e sorgente.</p>\r\n\r\n<p>Proseguendo lungo il sentiero si raggiunge la Strada Provinciale n. 1.</p>\r\n\r\n<p><em><strong>Il percorso è fruibile a piedi, in mountain-bike, a cavallo ed è adatto a chi pratica il nordic walking</strong></em>. Le aree attraversate sono ricche di fauna: non è difficile scorgere cinghiali.<br />\r\n&nbsp;</p>\r\n",
  },
  {
    "name": "Is Cannoneris - Monte Nieddu (201)",
    "descrizione": "<p>Il sentiero parte dai pressi della <em>Casa Forestale</em> di<em> Is Cannoneris</em> (717 m s.l.s.).</p>\r\n\r\n<p>Dopo &nbsp;un primo tratto in decisa discesa, procede seguendo ciò che resta di un'antica carrareccia immersa nel bosco fitto. Costeggierai a metà del cammino il&nbsp;<em>Canale de is Canargius&nbsp;</em>per poi risalire ripidamente, &nbsp;incrociando &nbsp;un'antica mulattiera di carbonai verso&nbsp;<em>S’arcu ‘e S’Arrideli</em> (431 m s.l.s.)</p>\r\n\r\n<p>La parte più gradevole del percorso è rappresentato da un tratto finale assai panoramico che riporta a fondo valle, passando per i resti della <em>dispensa di Porcileddu </em>(210 m s.l.m.).</p>\r\n\r\n<p>&nbsp;</p>\r\n",
  }
];

function generateRandomGeometry() {
  let random = Math.random() * 1000;
  if( random > 500 ){
    return fakePoint[Math.floor(Math.random() * fakePoint.length )];
  }else{
    return fakePoint[Math.floor(Math.random() * fakePoint.length )];
  }
}

const fakeOst = [
  {
    "name": "Gutturu Mannu - Caserma Gambarusssa",
    "descrizione": "<p>La Foresta Demaniale di Gutturu Mannu è situata nella parte sud della provincia di Cagliari.&nbsp;<br />\r\nL'intera foresta è compresa nella proposta di Parco naturale del Sulcis ai sensi della L.R. 31/89 in quanto&nbsp;‘Esteso areale occidentale del cervo sardo. Massicci granitici del Paleozoico dalla tormentata morfologia con valloni alternati a pianori. Vette elevate oltre i mille metri. Ricchissimo di boschi di lecci con frequenza di tassi e agrifogli negli anfratti più remoti; sughere, corbezzoli, filliree arborescenti e lentischi. Macchia mediterranea con erica e corbezzolo arborescente. Importante sotto l’aspetto faunistico per le migrazioni stagionali del cervo sardo e del cinghiale. Presenti anche la volpe, il gatto selvatico sardo, la martora, la beccaccia, il colombaccio e picchi rossi. Dubbia presenza del daino. Insediamenti minerari (Pantaleo) e insediamenti archeologici e di antica cultura contadina’.&nbsp;<br />\r\nInoltre ricade nell’area S.I.C. I.T.B. 001105 –‘Foresta di Monte Arcosu’ per circa il 70% della sua superficie e per gran parte della sua superficie nell’ Oasi permanente di protezione faunistica ‘Gutturu Mannu - Monte Arcosu’ come da decreti n°102 del 20.07.78 e n°1240 del 15.11.88.&nbsp;<br />\r\n&nbsp;</p>\r\n",
  },
  {
    "name": "Chiesa S. Lucia di Uta",
    "descrizione": "<p>La Chiesa di Santa Lucia, in territorio comunale di Uta, è una piccola chiesetta campestre ubicata lungo la strada provinciale Capoterra-Santadi allo sbocco del cono alluvionale del Rio Santa Lucia.</p>\r\n\r\n<p>La località di Santa Lucia è adiacente ad una delle aree di maggior interesse ambientale della Sardegna meridionale. È infatti ubicata all'ingresso del costituendo Parco del Sulcis, a pochi chilometri dalla Riserva WWF di Monte Arcosu e dalla Foresta Demaniale di Gutturu Mannu e con esse rappresenta una delle tradizionali mete di villeggiatura in occasione delle gite di fuori porta dai centri abitati più vicini (Uta, Capoterra, Assemini, Elmas, Cagliari).</p>\r\n",
  }, {
    "name": "Cala del Turco",
    "descrizione": "<p>Si trova lungo il versante costiero, in un itinerario&nbsp;lungo la scogliera e&nbsp;le numerose piccole falesie, percoso dal sentiero B-003 <em>da Porto Ferro alle Prigionette.</em></p>\r\n\r\n<p>Si tratta di una piccola cala, scarsamente frequentata per via della non agevole accessibilità. Risulta caratterizzata da file di rocce rossastre e grigie&nbsp;che si protendono in mare. La piccola spiaggia è caratterizzata da un fondo di ciottoli, che si affacciano nel&nbsp;mare smeraldino. Il fondale è di media profondità e prevalentemente roccioso. La cala è protetta da due piccole scogliere di rocce rossastre circondate da macchia mediterranea. Rientra nell'area del <strong><em>Parco Regionale Naturale di Porto Conte</em></strong>.</p>\r\n",
  }, {
    "name": "Foresta demaniale di Pantaleo",
    "descrizione": "<p><span>Inserita nel territorio delimitato dalla legge quadro L.R.n. 31/1989 la foresta di Pantaleo, estesa per&nbsp;1600 ha, è un oasi di protezione faunistica dove è operante il divieto dell’esercizio della caccia. Un’area che presenta caratteri di elevata naturalità, che l’uomo, pur attraverso il suo uso e utilizzo, è riuscito a “mantenere” e rispettare nel tempo. Da ricordare (chi volesse sul posto potrà avere ulteriori e più dettagliate notizie) che, dal 1872 al 1951, Pantaleo è diventata sede di industria boschiva e chimica.&nbsp;</span><br />\r\n<span>Tra gli edifici, alcuni sono stati ristrutturati come sede operativa di cantiere e/o complesso, altri stanno per esserlo, armonizzando gli interventi in sinergia con altri soggetti pubblici e/o privati&nbsp;</span>da utilizzarsi per fini didattici e turistico ricettivi. Sono in essere alcune importanti iniziative come il Progetto miele, il Progetto vigneto, il Progetto Cabriles.</p>\r\n\r\n<p>E' presente anche un centro visite incentarto sulle peculiarità naturalistiche del luogo e sulla presenza in passato dell'industria chimica.</p>\r\n\r\n<p>&nbsp;<span>E', inoltre, presente l’allevamento della lepre sarda (lepus capensis mediterraneus W.) dove sono mediamente presenti 150/200 individui. Ottimi i risultati ottenuti per la conoscenza della specie, esclusiva dell’isola e assai poco nota, sia per capacità tecnica di allevamento, ma anche in termini di produzione, che è stata orientata, in passato ad ottenere capi preambientati per il ripopolamento in libertà, venduti a pagamento e rilasciati, con buon successo, ormai dal 1994. Oggi si vuole integrare con un percorso didattico scolastico e turistico.&nbsp;</span><br />\r\n<br />\r\nAll’interno del perimetro del cantiere è stato creato un sentiero di circa 3 km dove è possibile, partendo dal centro di servizio, immergersi nella natura e raggiungere l’area di sosta provvista di tavoli per la consumazione di merenda e/o pasti denominata IS FIGUERAS. Il sentiero, facilmente percorribile, è adatto anche per bambini e anziani. Un concentrato di novità che rendono la realtà di Pantaleo interessante, ricca di proposte e, cosa più importante, meravigliosamente integrata nella natura.&nbsp;<br />\r\nLa vicinanza con tanti siti archeologici, naturalistici nella zona (Grotte di Is Zuddas, tombe di Montessu) offre ulteriori elementi che arricchiscono le offerte per i visitatori.&nbsp;<br />\r\n<br />\r\n<span>Pantaleo vanta il più imponente albero di eucalipto della sardegna con oltre 5,6 mt. di circonferenza e 27 metri d’altezza, piantato a fine del XIX secolo.&nbsp;Si fa ammirare nel piazzale davanti agli edifici del complesso. Non mancano poi le rarità come la pianta di mirto, visitabile all’interno del recinto delle lepri, con tronco alla base di 50cm di diametro ed un’ altezza di circa 4 mt.. Ma la natura offre anche altre sorprese, come la presenza di piante ibride di leccio-sughera un’esemplare dei quali si trova lungo il percorso tracciato per le escursioni&nbsp;</span><br />\r\n&nbsp;</p>\r\n",
  },
  {
    "name": "Mitza Su Suergiu ",
    "descrizione":"<p>Sorgente di Mitza su Suergiu (450 m s.l.m)</p>\r\n"
  },
  {
    "name": "Lago di Baratz",
    "descrizione": "<p>L’area lago di Baratz – Porto Ferro è un’area protetta in quanto è stata designata Sito dì Importanza Comunitaria (SIC) ai sensi della direttiva Habitat.<br />\r\nLa Rete Natura 2000, prevista dalla Direttiva Habitat, include sia i SIC sia le Zone di Protezione Speciale (ZPS) individuate ai sensi della Direttiva Uccelli; questa Rete nasce con l’intento di proteggere non solo la biodiversità presente all’interno delle aree protette ma anche quella delle aree semi-naturali intese come ambienti dove l’attività umana ha contribuito all’instaurarsi di un equilibrio ecologico duraturo.&nbsp;<br />\r\nIl SIC Lago Baratz-Porto Ferro, oltre ad essere collocato in un area di grande interesse turistico comprende al suo interno sistemi semi-naturali come i pascoli e le zone agricole estensive.</p>\r\n",
  },
  {
    "name": "Foresta demaniale di Pantaleo",
    "descrizione": "<p><span>Inserita nel territorio delimitato dalla legge quadro L.R.n. 31/1989 la foresta di Pantaleo, estesa per&nbsp;1600 ha, è un oasi di protezione faunistica dove è operante il divieto dell’esercizio della caccia. Un’area che presenta caratteri di elevata naturalità, che l’uomo, pur attraverso il suo uso e utilizzo, è riuscito a “mantenere” e rispettare nel tempo. Da ricordare (chi volesse sul posto potrà avere ulteriori e più dettagliate notizie) che, dal 1872 al 1951, Pantaleo è diventata sede di industria boschiva e chimica.&nbsp;</span><br />\r\n<span>Tra gli edifici, alcuni sono stati ristrutturati come sede operativa di cantiere e/o complesso, altri stanno per esserlo, armonizzando gli interventi in sinergia con altri soggetti pubblici e/o privati&nbsp;</span>da utilizzarsi per fini didattici e turistico ricettivi. Sono in essere alcune importanti iniziative come il Progetto miele, il Progetto vigneto, il Progetto Cabriles.</p>\r\n\r\n<p>E' presente anche un centro visite incentarto sulle peculiarità naturalistiche del luogo e sulla presenza in passato dell'industria chimica.</p>\r\n\r\n<p>&nbsp;<span>E', inoltre, presente l’allevamento della lepre sarda (lepus capensis mediterraneus W.) dove sono mediamente presenti 150/200 individui. Ottimi i risultati ottenuti per la conoscenza della specie, esclusiva dell’isola e assai poco nota, sia per capacità tecnica di allevamento, ma anche in termini di produzione, che è stata orientata, in passato ad ottenere capi preambientati per il ripopolamento in libertà, venduti a pagamento e rilasciati, con buon successo, ormai dal 1994. Oggi si vuole integrare con un percorso didattico scolastico e turistico.&nbsp;</span><br />\r\n<br />\r\nAll’interno del perimetro del cantiere è stato creato un sentiero di circa 3 km dove è possibile, partendo dal centro di servizio, immergersi nella natura e raggiungere l’area di sosta provvista di tavoli per la consumazione di merenda e/o pasti denominata IS FIGUERAS. Il sentiero, facilmente percorribile, è adatto anche per bambini e anziani. Un concentrato di novità che rendono la realtà di Pantaleo interessante, ricca di proposte e, cosa più importante, meravigliosamente integrata nella natura.&nbsp;<br />\r\nLa vicinanza con tanti siti archeologici, naturalistici nella zona (Grotte di Is Zuddas, tombe di Montessu) offre ulteriori elementi che arricchiscono le offerte per i visitatori.&nbsp;<br />\r\n<br />\r\n<span>Pantaleo vanta il più imponente albero di eucalipto della sardegna con oltre 5,6 mt. di circonferenza e 27 metri d’altezza, piantato a fine del XIX secolo.&nbsp;Si fa ammirare nel piazzale davanti agli edifici del complesso. Non mancano poi le rarità come la pianta di mirto, visitabile all’interno del recinto delle lepri, con tronco alla base di 50cm di diametro ed un’ altezza di circa 4 mt.. Ma la natura offre anche altre sorprese, come la presenza di piante ibride di leccio-sughera un’esemplare dei quali si trova lungo il percorso tracciato per le escursioni&nbsp;</span><br />\r\n&nbsp;</p>\r\n",
  }
]
const fakePoint = [
{
  "type": "Point",
  "value": "POINT (8.79733 39.0899)"
},

{
  "type": "Point",
  "value": "POINT (8.941 39.2024)"
},
{
  "type": "Point",
  "value": "POINT (8.1925 40.6614)"
},
{
  "type": "Point",
  "value": "POINT (8.79733 39.0899)"
},
{
  "type": "Point",
  "value": "POINT (8.86768 39.1577)"
},
{
  "type": "Point",
  "value": "POINT (8.226369857788 40.680500030518)"
},
{
  "type": "Point",
  "value": "POINT (8.79733 39.0899)"
},
{
  "type": "Point",
  "value": "POINT (8.79733 39.0899)"
}
]
// const fake MultilineString = [

// ]
module.exports = mocks;