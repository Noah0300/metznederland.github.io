// Metz Nederland B.V. — Website data
// Bevat alleen wat nog dynamisch wordt opgehaald uit pagina's.
// Pagina-content staat per pagina inline (Home, OverOns, Werkwijze, DaaromMetz, etc.)

const BASE_URL = process.env.PUBLIC_URL || '';
const imageUrl = (path) => `${BASE_URL}${path}`;

export const siteData = {
  company: {
    name: 'Metz Nederland B.V.',
    shortName: 'Metz Nederland',
    tagline: 'Bouwen en mensen verbinden',
    description:
      'Metz Nederland is een flexibel aannemersbedrijf met een persoonlijke en betrokken aanpak. Sinds 1999 werken wij voor woningcorporaties, zorginstellingen, ziekenhuizen, VvE’s, gemeenten en particulieren.',
    location: {
      street: 'Cornelis Houtmanstraat 9',
      city: '3124 LB Schiedam',
      country: 'Nederland'
    },
    contact: {
      phone: '010 471 81 10',
      phoneRaw: '+31104718110',
      email: 'info@metz-nederland.nl',
      kvk: '24294561'
    }
  },

  // Projecten worden getoond op /projecten en /projecten/:slug.
  // Voorbeeldstructuur per project:
  // {
  //   id: 1,
  //   title: 'Renovatie Erasmus MC',
  //   slug: 'renovatie-erasmus-mc',
  //   excerpt: 'Korte beschrijving in 1-2 zinnen.',
  //   content: 'Volledige tekst over het project.',
  //   image: imageUrl('/images/jouw-project-foto.jpg'),    // thumbnail op /projecten
  //   gallery: [imageUrl('/images/foto-1.jpg'), ...]        // optioneel: meerdere foto's op de detailpagina
  // }
  projects: [
    {
      id: 1,
      title: 'Diergaarde Blijdorp, Rotterdam',
      slug: 'diergaarde-blijdorp',
      excerpt:
        'Verbouwings- en onderhoudswerkzaamheden in een volop bezochte omgeving, uitgevoerd met oog voor dier, bezoeker en medewerker.',
      // TODO: definitieve projecttekst wordt later door Metz zelf aangeleverd.
      content:
        'Voor Diergaarde Blijdorp in Rotterdam voerden wij uiteenlopende verbouwings- en onderhoudswerkzaamheden uit, midden in een park dat dagelijks duizenden bezoekers ontvangt. Juist die context maakt dit project typisch Metz: werken in een omgeving die volop in gebruik is, vraagt om een zorgvuldige voorbereiding en een strakke planning.\n\nVan de eerste inventarisatie tot de oplevering stond het beperken van overlast centraal. We stemden de werkzaamheden nauwkeurig af op de openingstijden en de routes van bezoekers, hielden rekening met de rust van de dieren en zorgden dat het park altijd veilig toegankelijk bleef. Door korte lijnen met de opdrachtgever en een hechte samenwerking met leveranciers en onderaannemers konden we flexibel inspelen op de dagelijkse gang van zaken in de dierentuin.\n\nHet resultaat: kwalitatief hoogwaardig werk, opgeleverd met minimale hinder voor mens en dier. Een project waarin onze kernwaarden — zorg, aandacht en samenwerken als één team — duidelijk zichtbaar zijn.',
      image: imageUrl('/images/blijdorp-1.jpg'),
      gallery: [
        imageUrl('/images/blijdorp-1.jpg'),
        imageUrl('/images/blijdorp-2.jpg'),
        imageUrl('/images/blijdorp-3.jpg')
      ]
    }
  ],

  // Vacatures — voeg hier openstaande functies toe.
  // - `title` verschijnt automatisch in de keuzelijst op /solliciteren én als kop op /werken-bij.
  // - `intro` is de korte tekst bovenaan de vacaturekaart.
  // - `sections` is de volledige vacaturetekst; elke sectie heeft een `heading` en
  //   optioneel `paragraphs` (array tekst) en/of `list` (array bullets) en `subheading`.
  // - `image` is de foto op de kaart; `contact` toont de HR-contactgegevens onderaan.
  // Vanuit een vacature link je naar: /solliciteren?functie=<title>
  vacancies: [
    {
      id: 1,
      title: 'Werkvoorbereider/Calculator',
      slug: 'werkvoorbereider-calculator',
      type: 'Fulltime',
      intro:
        'Metz Nederland is een betrokken bouwbedrijf dat zich bezighoudt met renovatie en onderhoud voor woningcorporaties en zorginstellingen. Wij onderscheiden ons door van een idee of vraag, een project te maken. Samenwerken, assertiviteit, communicatie en flexibiliteit zijn belangrijke kernwaarden.',
      image: imageUrl('/images/werkvoorbereider-calculator.jpg'),
      sections: [
        {
          heading: 'Algemene karakterisering',
          paragraphs: [
            'Als werkvoorbereider/calculator speel je een cruciale rol in het succesvol realiseren van diverse bouwkundige onderhouds- en renovatieprojecten. Je vormt de spil tussen de aanvraag van de opdrachtgever en de daadwerkelijke uitvoering van het werk. Je bent verantwoordelijk voor het zorgvuldig opnemen, calculeren én voorbereiden van zowel kleine als grote projecten.',
            'In deze veelzijdige rol beoordeel je aanvragen op haalbaarheid, stel je kostprijsbegrotingen op en bereid je het werk voor tot in de puntjes. Je schakelt dagelijks met collega’s van uitvoering en projectleiding, zorgt voor een nauwkeurige planning, maakt werkplannen en stelt waar nodig tekeningen op. Ook verzorg je de inkoop van materialen en diensten en draag je zorg voor een vlotte overdracht naar de uitvoering.',
            'Je werkt regelmatig op locatie, in een omgeving waar vaak extra aandacht is voor veiligheid, continuïteit en samenwerking met andere belanghebbenden, zoals opdrachtgevers, beheerders en gebruikers van het pand. Goede communicatie en het vermogen om mee te denken met de klant zijn in deze functie essentieel.'
          ]
        },
        {
          heading: 'Taken en verantwoordelijkheden',
          list: [
            'Opnemen van werken op locatie en beoordelen van de technische haalbaarheid',
            'Opstellen van calculaties en offertes voor bouwkundig onderhoud en renovatieprojecten',
            'Uitwerken van werkplannen, materiaallijsten, tekeningen en planningen',
            'Aanvragen en beoordelen van offertes van leveranciers en onderaannemers',
            'Verzorgen van inkoop en afstemming met de uitvoering',
            'Zorgdragen voor een goede projectoverdracht richting uitvoeringsteam',
            'Onderhouden van contact met opdrachtgevers, beheerders en andere betrokken partijen',
            'Signaleren van meer- of minderwerk en verzorgen van de bijbehorende afhandeling',
            'Bewaken van budgetten, planning en kwaliteit tijdens de voorbereidingsfase'
          ]
        },
        {
          heading: 'Functie-eisen',
          subheading: 'Opleiding, ervaring en persoonlijke vaardigheden',
          list: [
            'Mbo werk- en denkniveau bouwkunde',
            'Enkele jaren ervaring in een soortgelijke functie als werkvoorbereider en/of calculator, bij voorkeur in renovatie- en onderhoudswerkzaamheden',
            'Goede communicatieve en organisatorische vaardigheden',
            'Oog voor detail, nauwkeurigheid en verantwoordelijkheidsgevoel',
            'Proactieve en flexibele werkhouding',
            'Vermogen om zelfstandig te werken en tegelijkertijd goed te kunnen schakelen binnen een team',
            'Bereidheid om je te blijven ontwikkelen en mee te denken over verbeteringen in het werkproces'
          ]
        },
        {
          heading: 'Dit krijg je bij ons',
          list: [
            'Aantrekkelijk salaris en secundaire arbeidsvoorwaarden conform CAO Bouw en Infra',
            'Een degelijke auto, mobiele telefoon en laptop van de zaak',
            'Opleidingsmogelijkheden voor persoonlijke ontwikkeling',
            'Een uitdagende functie met vrijheid en verantwoordelijkheid',
            'Een gedreven, betrokken en enthousiast team van collega’s in een familiebedrijf'
          ]
        }
      ],
      contact: {
        name: 'Anne Spits',
        role: 'HR Officer',
        email: 'A.Spits@metz-nederland.nl'
      }
    },
    {
      id: 2,
      title: '(Onderhouds-) Timmerman',
      slug: 'onderhouds-timmerman',
      type: 'Fulltime',
      intro:
        'Metz Nederland is een betrokken bouwbedrijf dat zich bezighoudt met renovatie en onderhoud voor woningcorporaties en zorginstellingen. Wij onderscheiden ons door van een idee of vraag, een project te maken. Samenwerken, assertiviteit, communicatie en flexibiliteit zijn belangrijke kernwaarden.',
      image: imageUrl('/images/onderhouds-timmerman.jpg'),
      sections: [
        {
          heading: 'Algemene karakterisering',
          paragraphs: [
            'Als (ervaren) timmerman wil je graag vakmanschap leveren. Bij onze onderhouds- en renovatieprojecten hebben wij vakmannen/timmermannen nodig die graag kwaliteit leveren en het visitekaartje van Metz willen zijn. De werkzaamheden zijn zeer divers en soms moet rekening gehouden worden met bewoners en/of cliënten. Een duidelijke en fijne manier van communiceren is van belang. Je werkt in een fijn team en wordt aangestuurd door een uitvoerder, maar soms zul je ook zelfstandig een klus moeten klaren. Wanneer vakmanschap bij jou hoog in het vaandel zit of jij iemand bent die het timmeren graag wilt leren, neem dan contact op voor een lekkere kop koffie en goed gesprek.'
          ]
        },
        {
          heading: 'Functie-eisen',
          list: [
            'MBO Bouwkunde, niveau 2, Timmerman of je hebt relevante werkervaring en staat open om het vak te leren',
            'Je kunt goed zelfstandig werken en toont daarbij ook initiatief',
            'Je bent communicatief vaardig en het is voor jou een feestje om, samen met je collega’s, het werk kwalitatief goed af te leveren',
            'Je bent in het bezit van VCA Basis/VOL of je bent bereid dit te behalen'
          ]
        },
        {
          heading: 'Overige vereisten',
          list: [
            'Bereidheid tot werken bij het Erasmus MC'
          ]
        },
        {
          heading: 'Dit krijg je bij ons',
          list: [
            'Aantrekkelijk salaris en secundaire arbeidsvoorwaarden conform CAO Bouw en Infra',
            'iPad van de zaak',
            'Opleidingsmogelijkheden voor persoonlijke ontwikkeling',
            'Een uitdagende functie met vrijheid en verantwoordelijkheid',
            'Een gedreven, betrokken en enthousiast team van collega’s in een familiebedrijf'
          ]
        }
      ],
      contact: {
        name: 'Anne Spits',
        role: 'HR Officer',
        email: 'A.Spits@metz-nederland.nl'
      }
    }
  ]
};

export { imageUrl };
