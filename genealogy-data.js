// ── DATA GÉNÉALOGIQUE COMPLET ─────────────────────────────
// Mis à jour avec les données du document AMATEKA Y'UMURYANGO WA KARORI

const tree = {
  id:"karori", name:"MUHUTU Charles (KARORI)\n× KARUSHONGA Leoncie", status:"deceased",
  spouse:"", notes:"Fils de SEMUZIMA · Époux de KARUSHONGA Leoncie (fille de BAJIJI Paul & NYIRABANTU Anne) · †avant 1994",
  children:[
    {
      id:"a", label:"[A]", name:"KAGABO Boniface", status:"deceased",
      spouse:"MUKABERA Eliane", notes:"†1997",
      children:[
        {id:"a1",name:"MURINDWA Rafiki",status:"living"},
        {id:"a2",name:"MURINDWA Chance",status:"living",children:[
          {id:"a2a",name:"Shami Murindwa Liam",status:"living",notes:"Né le 03/04/2018"}
        ]},
        {id:"a3",name:"UWAMAHORO Yvette",status:"living",spouse:"Didier Munyentwari",children:[
          {id:"a3a",name:"Ryan",status:"living"}
        ]}
      ]
    },
    {
      id:"b", label:"[B]", name:"MUKARUBAYIZA Leocadie", status:"living",
      spouse:"NZAMWITA Paul (†Génocide 1994)",
      children:[
        {
          id:"b1",name:"USABYIMBABAZI Eugenie",status:"living",
          spouse:"NSABIYERA Gaspard",
          children:[
            {id:"b1a",name:"MUKAMUSONI Alice",status:"living",spouse:"Hakizimana Gashabana",
             notes:"Thierry Gashabana, Ketia Uwizeye, Thania Irakoze, Keghan, Meghan, Mickel, Mirakel, Meladie"},
            {id:"b1b",name:"NISHIMWE Jean Paul",status:"living",spouse:"Solange",
             notes:"Ishimwe Jacey, Jaiden"},
            {id:"b1c",name:"UMUGWANEZA Odile",status:"living",notes:"née 27/7/1986",spouse:"Alex Mugisha",children:[
              {id:"b1c1",name:"Mugisha Alvin",status:"living",notes:"3/10/2018"},
              {id:"b1c2",name:"Mugisha Angelo & Angela (jumeaux)",status:"living",notes:"29/2/2020"},
              {id:"b1c3",name:"Mugisha Adonis",status:"living",notes:"16/2/2022"}
            ]}
          ]
        },
        {id:"b2",name:"NZABANITA Eugene",status:"living"},
        {
          id:"b3",name:"NDUWAYEZU Leonard",status:"living",
          spouse:"DUSABUMUREMYI Immaculee",
          children:[
            {id:"b3a",name:"BUKANDA Shukuru",status:"living"},
            {id:"b3b",name:"UMWALI Riziki",status:"living"},
            {id:"b3c",name:"ASIFIWE Dorcas",status:"living"}
          ]
        },
        {
          id:"b4",name:"MUKAYIRANGA Odette",status:"living",spouse:"Hererimana Leonard",
          children:[
            {id:"b4a",name:"IZABAYO Sandra",status:"living",spouse:"Jean Aime",
             notes:"Mucyo Kenzo Kevin, David, Chris"},
            {id:"b4b",name:"MUTUYIMANA Divine",status:"living"},
            {id:"b4c",name:"Uwineza Nicole",status:"living"},
            {id:"b4d",name:"Manzi Cedric",status:"living"},
            {id:"b4e",name:"Almand Mugisha Serge",status:"living"}
          ]
        },
        {id:"b5",name:"SINDIKUBWABO Emmanuel",status:"living"},
        {
          id:"b6",name:"UWANYIRIJURU Beata",status:"deceased",
          notes:"†2007 (uburwayi)",
          children:[
            {id:"b6a",name:"MUHIRE Heritier",status:"living",notes:"né 16/11/1993 · États-Unis",
             spouse:"Aimee Muhire",children:[
              {id:"b6a1",name:"Muhire Ryker",status:"living",notes:"6/3/2025"}
            ]},
            {id:"b6b",name:"MPANGUHE Maurice",status:"living",notes:"né 21/6/1997 · États-Unis"}
          ]
        },
        {id:"b7",name:"KARANGWA Alex",status:"genocide",
         notes:"Tué à Gisenyi · Inhumé au Mémorial de la Commune Rouge"},
        {id:"b8",name:"NIYOMUGABA Diane",status:"living",notes:"Bucura (8ème enfant)"}
      ]
    },
    {
      id:"c", label:"[C]", name:"KANYOMBERA Verena", status:"genocide",
      notes:"Jamais mariée · Travaillait à Edeluese (Gisenyi) · Tombée à Tegwe · Habyarimana & Faranga/Rogole Leonard impliqués · Restes à Mushubati"
    },
    {
      id:"d", label:"[D]", name:"MUKAKAYONDE Venancie", status:"living",
      spouse:"MUNYANKINDI",
      children:[
        {id:"d1",name:"MUGABO Bernard",status:"living",spouse:"Farhiya Sheikh",
         notes:"Christian 12.12.2014, Ornella 08.11.2017, Ineza Tianna 17.06.2020, Jean Kaiden 24.06.2023"},
        {id:"d2",name:"CYAMAKARE Bonaventure",status:"living",spouse:"Doro",
         notes:"Sine Keren 11/09/2001, Shimwa Jeyz 26/10/2003, Atete Hirwa Jessica 27/02/2006, Isaro Jensina & Inoni Jensen 30/12/2012, Ikirezi Jeiro 30/03/2014"},
        {
          id:"d3",name:"MUNYANKINDI Benoit",status:"living",
          spouse:"UWINEZA Providence",
          notes:"Parents de Providence: Benimana Christopher & Mukangarambe Agnes (†Génocide · Commune Rouge)",
          children:[
            {id:"d3a",name:"Iganze Nkindi Uriel",status:"living",notes:"02/01/2016"},
            {id:"d3b",name:"Ineza Nkindi Ethan",status:"living",notes:"27/04/2018"},
            {id:"d3c",name:"Tuza Nkindi Janoah",status:"living",notes:"17/06/2025"}
          ]
        },
        {id:"d4",name:"MUNYANKINDI Toussaint",status:"living",spouse:"Iradukunda Marie Victore",
         notes:"Arame Naomi Anike, Munyankindi Mael Mpano Benson…"},
        {id:"d5",name:"Nikuze Agnes",status:"living",spouse:"Niyongoma Madjaliwa",
         notes:"Manzi Spassiva, Nganji Heri Savant, Iriza Izza Anissah, Akariza Del'Or Anillah"},
        {id:"d6",name:"MUNYANKINDI Henry",status:"living",spouse:"Mabengeza Friday",
         notes:"Ishimwe Ruth Henritte, Gwiza Munyankindi Caleb"},
        {id:"d7",name:"BAGABO Daddy",status:"living",spouse:"Mukamana Germaine"}
      ]
    },
    {
      id:"e", label:"[E]", name:"MUKAMBARAGA Agathe", status:"genocide",
      spouse:"RWABIRINDA Emmanuel (†Génocide)",
      notes:"Tombée au stade de Gatwaro (Kibuye) · Famille entièrement décimée · Toto à Ibonde · Restes inhumés à Mushubati",
      children:[
        {id:"e1",name:"MUTUYEYEZU Damascene",status:"genocide",
         notes:"Étudiant en médecine (5ème année, Baptiste Gisenyi) · Tué à Gihara après Gatwaro & Bisesero"},
        {id:"e2",name:"DUSABIMANA Toto",status:"genocide",
         notes:"Tué à Ibonde (Gisenyi) · Caché par quelqu'un, découvert en allant récupérer ses affaires · Commune Rouge"},
        {id:"e3",name:"Tuyisenge",status:"genocide"},
        {id:"e4",name:"Habamenshi",status:"genocide"},
        {id:"e5",name:"5ème enfant (†)",status:"genocide",notes:"Trouvé sous la maison à Tegwe · Inhumé à Mushubati"}
      ]
    },
    {
      id:"f", label:"[F]", name:"UZABUMWANA Patricie", status:"deceased",
      spouse:"Époux belge", notes:"†2023 en Belgique (uburwayi) · Réfugiée en Belgique pendant le Génocide",
      children:[
        {id:"f1",name:"Yves",status:"deceased",notes:"†2008 · Célibataire"},
        {id:"f2",name:"Henriette",status:"living",notes:"Belgique"}
      ]
    },
    {
      id:"g", label:"[G]", name:"NYIRABANYIGINYA Prukeria", status:"genocide",
      spouse:"Francois (†Génocide)",
      notes:"Tombée au stade de Gatwaro (Kibuye) · Enfants: Karenzi, Ingabire, Mugisha, Murenzi, Mutoni (tués à Gatwaro)",
      children:[
        {id:"g0",name:"KARENZI",status:"living"},
        {id:"g1",name:"INGABIRE",status:"genocide",notes:"Gatwaro"},
        {id:"g2",name:"MUGISHA",status:"genocide",notes:"Gatwaro"},
        {id:"g3",name:"MURENZI",status:"genocide",notes:"Gatwaro"},
        {id:"g4",name:"MUTONI",status:"genocide",notes:"Gatwaro"}
      ]
    },
    {
      id:"h", label:"[H]", name:"KAMPORORO Euthalie", status:"genocide",
      spouse:"KARANGIRA Laurent (†Génocide)",
      notes:"Tombée à Gatwaro · Jumeaux nés 1988",
      children:[
        {
          id:"h1",name:"MUKAKARAKE Vestine",status:"living",
          spouse:"KAYIGEMA Guillaume",
          children:[
            {id:"h1a",name:"Ishimwe K. Nixie",status:"living",notes:"26/3/2013"},
            {id:"h1b",name:"Ihirwe K. Nicky",status:"living",notes:"10/2/2016"}
          ]
        },
        {id:"h2",name:"NIKUZE Athanase / KAKUZE Athanasie (jumeaux)",status:"genocide",
         notes:"Nés 1988 · Tués à Gatwaro (confirmé 2021)"}
      ]
    },
    {
      id:"i", label:"[I]", name:"MUKASARASI Dansille", status:"genocide",
      spouse:"BUTERA François (†Gitarama 1994)",
      children:[
        {id:"i1",name:"BUTERA Felix",status:"living",children:[
          {id:"i1a",name:"Gabriel",status:"living"}
        ]},
        {id:"i2",name:"UMUTESI Felicite",status:"living",spouse:"Debeli",
         notes:"Enfants: Christian, Fiellete, Dieme…",children:[
          {id:"i2a",name:"Fielle",status:"living"}
        ]},
        {
          id:"i3",name:"UWASE Florence",status:"living",
          children:[
            {id:"i3a",name:"Sifa Ines",status:"living",notes:"née 28/04/1998",
             spouse:"Niyongira Eliezer",children:[
              {id:"i3a1",name:"Gasaro Eliza Annick",status:"living",notes:"16/06/2018"},
              {id:"i3a2",name:"Ishimwe Angela Nancy",status:"living",notes:"20/05/2020"},
              {id:"i3a3",name:"Arame Kentha Kiana",status:"living",notes:"03/03/2026"}
            ]},
            {id:"i3b",name:"Mwami Samuel",status:"living"},
            {id:"i3c",name:"Bora Uzima Benigne",status:"living",notes:"née 06/09/2002",children:[
              {id:"i3c1",name:"Barinshuti Nazimu",status:"living",notes:"07/09/2018"}
            ]},
            {id:"i3d",name:"Ishimwe Rodrige",status:"living"},
            {id:"i3e",name:"Uwineza Benitha",status:"living"}
          ]
        },
        {id:"i4",name:"MANZI Felicien Reagan",status:"living",notes:"Namur, Belgique · 🔵 Vous"},
        {id:"i5",name:"UMUTONI Francoise",status:"living"}
      ]
    },
    {
      id:"j", label:"[J]", name:"TWAYIGIZE Deogratius", status:"deceased",
      notes:"Bucura wa KARORI · †1973 (maladie) · Décédé avant le Génocide"
    }
  ]
};

// ── BRANCHE BAJIJI (famille maternelle de Leoncie) ─────────
const bajiji = {
  id:"bajiji", name:"BAJIJI Paul\n× NYIRABANTU Anne", status:"deceased",
  notes:"Parents de KARUSHONGA Leoncie (épouse de KARORI)",
  children:[
    {
      id:"baj1", label:"[1]", name:"NYIRAMAKUMI Genereuse", status:"deceased",
      spouse:"NDABUKIYE Raphael",
      children:[
        {
          id:"baj1A", label:"[A]", name:"MUKAHIGIRO Catherine", status:"deceased",
          spouse:"KANYANKORE Antoine",
          children:[
            {id:"baj1Aa",name:"NDOLI RUTAYISIRE Cililo",status:"living",spouse:"NZAMUKOSHA Immaculee"},
            {id:"baj1Ab",name:"MUKASHEMA Antoniya",status:"living",spouse:"NSANZINTWALI Damascene",
             notes:"NKUNDIMFURA Pierre, DUSENGIMANA Valentine (mariée, 1 enfant, vit hors Rwanda), Ancilla, Claude"},
            {id:"baj1Ac",name:"MBARAGA Aloys",status:"deceased",notes:"Militaire · Tombé au combat de libération du pays"},
            {id:"baj1Ad",name:"MFIZI Theogene",status:"living",spouse:"MUKAMUGEMA Herene",
             notes:"Fils, INGABIRE Claudette (fils: MUGISHA), NGABO, SHEMA, Eugene, Ange, Emmanuel"},
            {id:"baj1Ae",name:"MUKAMBARAGA Claudine",status:"living",spouse:"MUNYURANGABO Athanase",
             notes:"MUHIRE Fiacle, UWAMARIYA Phionah, MUHIRWA KAMANZI Frank, MUGISHA Fabrice, HIRWA Fred · D'autres ont péri dans le Génocide"},
            {id:"baj1Af",name:"MUDACUMURA Andre",status:"living"},
            {id:"baj1Ag",name:"MUKANGOGA Marie Rose",status:"living"},
            {id:"baj1Ah",name:"DUSABEMARIYA Rosette",status:"living"},
            {id:"baj1Ai",name:"BAGIRISHEMA Fabien",status:"living"}
          ]
        },
        {id:"baj1B",label:"[B]",name:"MUKAMANIHURA Bonifride",status:"deceased",
         notes:"Yabyaye: MATIBORI, MUGISHA, NKUSI"},
        {
          id:"baj1C",label:"[C]",name:"KARIBU",status:"genocide",
          spouse:"Abureriya",
          notes:"5 enfants · Famille entièrement décimée",
          children:[
            {id:"baj1Ca",name:"Beatrice",status:"genocide"},
            {id:"baj1Cb",name:"MPAMBARA",status:"genocide"},
            {id:"baj1Cc",name:"Donatile",status:"genocide"},
            {id:"baj1Cd",name:"2 autres enfants",status:"genocide"}
          ]
        },
        {id:"baj1D",label:"[D]",name:"KAYINAMURA Alex",status:"living",spouse:"KAYIRANGWA",
         notes:"Dont: YAMFASHIJE Gaudence (mariée, 4 enfants dont ISHIMWE)"},
        {id:"baj1E",label:"[E]",name:"Fidensi",status:"living",spouse:"UWIMANA Silas",
         notes:"7 enfants: Jeanne, Jacqueline, MUTAMURIZA, Emmanuel + 3 autres"},
        {id:"baj1F",label:"[F]",name:"KANAMUGIRE Casimille",status:"living",
         notes:"1ère épouse Florida → Yvode, Epiphanie · 2ème épouse Verena → 1 enfant"},
        {id:"baj1G",label:"[G]",name:"Josephine",status:"living",spouse:"GASANA",
         notes:"Dont: BUKARA"},
        {id:"baj1H",label:"[H]",name:"YAKOBO",status:"deceased",
         notes:"†avant le Génocide · Célibataire"},
        {
          id:"baj1I",label:"[I]",name:"MUSAYIDIZI Joseph",status:"deceased",
          spouse:"MUKABAGINA (cousine de Catherine)",
          children:[
            {id:"baj1Ia",name:"Victoria",status:"living"},
            {id:"baj1Ib",name:"Florida",status:"living"},
            {id:"baj1Ic",name:"Speciose",status:"living"},
            {id:"baj1Id",name:"NTIVUGURUZWA",status:"living"},
            {id:"baj1Ie",name:"(1 enfant brûlé dans sa maison)",status:"genocide",
             notes:"†avant le Génocide"}
          ]
        }
      ]
    },
    {id:"baj2",label:"[2]",name:"KARUSHONGA Leoncie",status:"deceased",
     notes:"Épouse de KARORI · Mère des 10 enfants"},
    {id:"baj3",label:"[3]",name:"NYAMIRONKO Thadeo",status:"deceased",spouse:"Steria",
     notes:"3 enfants: NTIRAMIRA (famille décimée), KANIZIYO Dismas (famille décimée), KAGESERA → Emile"},
    {id:"baj4",label:"[4]",name:"MUNYAMBIBI",status:"deceased",
     children:[
       {id:"baj4A",name:"MATAYO MASANDUKU",status:"deceased",spouse:"MUKANGANGO Dansille",
        notes:"Nyinawimanzi Budoziya, Eugene, Emmanuel, Emile, Mariya, Louise, Archimede, Martha, Jeannette"},
       {id:"baj4B",name:"NYIRABAJYAMBERE Xaverine",status:"genocide",notes:"Famille non documentée · décimée"},
       {id:"baj4C",name:"KAMUGWERA Eugenie",status:"genocide",notes:"Famille non documentée · décimée"}
     ]},
    {id:"baj5",label:"[5]",name:"Stephano",status:"deceased",spouse:"Clotilde",
     notes:"Plusieurs enfants · Famille entièrement décimée"},
    {
      id:"baj6",label:"[6]",name:"KAMPOGO Melanie",status:"deceased",spouse:"GAHAMA Raphael",
      children:[
        {id:"baj6a",name:"Dismas",status:"living"},
        {id:"baj6b",name:"Matride",status:"living",notes:"A un enfant: Donatha"},
        {id:"baj6c",name:"Virginie",status:"living"}
      ]
    },
    {
      id:"baj7",label:"[7]",name:"MUKARUBEGA Devotha",status:"deceased",spouse:"RUREMESHA Christophe",
      children:[
        {id:"baj7A",name:"Theodore",status:"living"},
        {id:"baj7B",name:"Nathale",status:"living"},
        {id:"baj7C",name:"Liberatha",status:"living"},
        {id:"baj7D",name:"KANYANA Ancilla / Cecilia",status:"living"}
      ]
    },
    {id:"baj8",label:"[8]",name:"Isaias",status:"deceased",notes:"(Peu d'informations disponibles)"}
  ]
};

const victimes = [
  {name:"MUKARUBAYIZA Leocadie", rel:"Fille de KARORI · [B]",
   note:"Veuve de NZAMWITA Paul (†Génocide 1994).", loc:"Rwanda"},
  {name:"NZAMWITA Paul", rel:"Époux de Leocadie [B]",
   note:"Victime du Génocide de 1994.", loc:"Rwanda"},
  {name:"KANYOMBERA Verena", rel:"Fille de KARORI · [C]",
   note:"Jamais mariée. Travaillait à Edeluese (Gisenyi). Tombée à Tegwe. Habyarimana & Faranga/Rogole Leonard impliqués. Restes à Mushubati.", loc:"Tegwe → Mémorial Mushubati"},
  {name:"MUKAMBARAGA Agathe", rel:"Fille de KARORI · [E]",
   note:"Avec son époux RWABIRINDA Emmanuel. Toute la famille décimée. Gatwaro, Kibuye.", loc:"Gatwaro, Kibuye"},
  {name:"RWABIRINDA Emmanuel", rel:"Époux de Agathe [E]",
   note:"Victime du Génocide de 1994.", loc:"Rwanda"},
  {name:"MUTUYEYEZU Damascene", rel:"Petit-enfant de KARORI — via Agathe [E]",
   note:"Étudiant en médecine (5ème année, Baptiste Gisenyi). Blessé à Gatwaro, fuit jusqu'à Gihara. Tué à Gihara. Conduit à Mushubati pour localiser les affaires cachées chez Mukeshabatware.", loc:"Gihara / Mushubati"},
  {name:"DUSABIMANA Toto", rel:"Petit-enfant de KARORI — via Agathe [E]",
   note:"Caché par quelqu'un. Découvert en sortant récupérer ses affaires. Tué à Ibonde (Gisenyi).", loc:"Ibonde, Gisenyi · Commune Rouge"},
  {name:"Tuyisenge", rel:"Petit-enfant de KARORI — via Agathe [E]",
   note:"En 1992, sauva son cousin Felicien Reagan de la noyade dans une rivière. Deux ans plus tard, victime du Génocide.", loc:"Rwanda"},
  {name:"Habamenshi", rel:"Petit-enfant de KARORI — via Agathe [E]",
   note:"Trouvé sous la maison à Tegwe. Inhumé à la paroisse catholique de Mushubati.", loc:"Mushubati, Rwanda"},
  {name:"5ème enfant (Agathe)", rel:"Petit-enfant de KARORI — via Agathe [E]",
   note:"5ème enfant d'Agathe. Trouvé sous la maison à Tegwe. Inhumé à Mushubati.", loc:"Mushubati, Rwanda"},
  {name:"NYIRABANYIGINYA Prukeria", rel:"Fille de KARORI [G]",
   note:"Tombée au stade de Gatwaro, Kibuye. Époux François également tué.", loc:"Gatwaro, Kibuye"},
  {name:"François", rel:"Époux de Prukeria [G]",
   note:"Victime du Génocide de 1994.", loc:"Rwanda"},
  {name:"INGABIRE", rel:"Petit-enfant de KARORI — via Prukeria [G]",
   note:"Tué à Gatwaro.", loc:"Gatwaro"},
  {name:"MUGISHA", rel:"Petit-enfant de KARORI — via Prukeria [G]",
   note:"Tué à Gatwaro.", loc:"Gatwaro"},
  {name:"MURENZI", rel:"Petit-enfant de KARORI — via Prukeria [G]",
   note:"Tué à Gatwaro.", loc:"Gatwaro"},
  {name:"MUTONI", rel:"Petit-enfant de KARORI — via Prukeria [G]",
   note:"Tué à Gatwaro.", loc:"Gatwaro"},
  {name:"KAMPORORO Euthalie", rel:"Fille de KARORI · [H]",
   note:"Tombée à Gatwaro. Époux Laurent Karangira également tué.", loc:"Gatwaro"},
  {name:"KARANGIRA Laurent", rel:"Époux de Euthalie [H]",
   note:"Victime du Génocide de 1994.", loc:"Rwanda"},
  {name:"NIKUZE Athanase / KAKUZE Athanasie", rel:"Jumeaux — via Euthalie [H]",
   note:"Nés en 1988. Tués à Gatwaro (confirmé lors de la commémoration 2021).", loc:"Gatwaro"},
  {name:"KARANGWA Alex", rel:"Petit-enfant de KARORI — via Leocadie [B]",
   note:"Tué à Gisenyi. Corps au Mémorial de la Commune Rouge.", loc:"Gisenyi · Commune Rouge"},
  {name:"BUTERA François", rel:"Époux de Dansille · Père de Felicien Reagan",
   note:"Abattu à Gitarama par un soldat. Felicien Reagan (Reagan) et Françoise (Mawuwa) étaient avec lui environ 2 heures avant sa mort.", loc:"Gitarama, Rwanda"},
  {name:"MUKASARASI Dansille", rel:"Fille de KARORI [I] · Mère de Felicien Reagan",
   note:"Enlevée de nuit à l'hôtel Edeluese à Gisenyi. Patricie l'entendit crier quand on la forçait dans la voiture. Présumée tuée à la Commune Rouge, Gisenyi, 2 jours après le début du Génocide.", loc:"Commune Rouge, Gisenyi (présumé)"},
  {name:"KARIBU (famille)", rel:"Branche BAJIJI [1-C via Genereuse]",
   note:"KARIBU et son époux Abureriya: 5 enfants. Famille entièrement décimée: Beatrice, MPAMBARA, Donatile et 2 autres.", loc:"Rwanda"},
  {name:"YAKOBO", rel:"Branche BAJIJI [1-H via Genereuse]",
   note:"Décédé avant le Génocide, célibataire.", loc:"Rwanda"},
  {name:"MBARAGA Aloys", rel:"Branche BAJIJI [1-A-c via Catherine]",
   note:"Militaire, tombé au combat de libération du pays.", loc:"Rwanda"},
  {name:"Benimana Christopher & Mukangarambe Agnes", rel:"Beaux-parents de Benoit Munyankindi [D-c]",
   note:"Tués lors du Génocide. Inhumés à la Commune Rouge.", loc:"Commune Rouge"},
  {name:"NYIRABAJYAMBERE Xaverine (famille)", rel:"Branche BAJIJI [4-B via Munyambibi]",
   note:"Famille non documentée · décimée.", loc:"Rwanda"},
  {name:"KAMUGWERA Eugenie (famille)", rel:"Branche BAJIJI [4-C via Munyambibi]",
   note:"Famille non documentée · décimée.", loc:"Rwanda"},
  {name:"Stephano (famille)", rel:"Branche BAJIJI [5 via Bajiji]",
   note:"Stephano & Clotilde: plusieurs enfants. Famille entièrement décimée.", loc:"Rwanda"}
];
