/**
 * Monalisa Internacional SA - Archivo Histórico & Datos de la Línea de Tiempo
 * Edición Revista Conmemorativa (53 Años)
 */

const TIMELINE_DATA = [
  {
    id: 1,
    year: '1972',
    slug: 'fundacion',
    title: {
      es: 'La fundación',
      en: 'The Foundation'
    },
    tag: {
      es: 'Génesis & Visión Pionera',
      en: 'Genesis & Pioneering Vision'
    },
    location: 'Ciudad del Este, Paraguay',
    body: {
      es: 'Faisal Hammoud vio el potencial de la región y abrió en la naciente Ciudad del Este una tienda de productos finos: nace Monalisa, un símbolo de belleza para toda la Triple Frontera.',
      en: 'Faisal Hammoud envisioned the region\'s immense potential and opened a luxury boutique in the emerging Ciudad del Este: Monalisa was born, an enduring symbol of beauty for the entire Triple Frontier.'
    },
    quote: {
      es: '«Una visión forjada con perseverancia y devoción al buen gusto.»',
      en: '«A vision forged with dedication and passion for global refinement.»'
    },
    highlight: {
      es: 'Puntapié inicial del retail de lujo en la Triple Frontera.',
      en: 'Inaugural milestone of luxury retail in the Triple Frontier.'
    },
    img: 'assets/img/m1972.png',
    fallbackImg: 'https://monalisainternacional.com/wp-content/uploads/2026/07/m1972.png',
    badge: '1972'
  },
  {
    id: 2,
    year: '1975',
    slug: 'crecimiento',
    title: {
      es: 'Crecimiento acelerado',
      en: 'Accelerated Growth'
    },
    tag: {
      es: 'Auge Comercial & Turismo',
      en: 'Commercial Boom & Tourism'
    },
    location: 'Itaipú & Frontera Trinacional',
    body: {
      es: 'El turismo de las Cataratas del Iguazú y la construcción de la represa de Itaipú multiplicaron el comercio. Monalisa ya era reconocida como una de las mejores tiendas de la Triple Frontera.',
      en: 'Tourism around Iguazu Falls and the monumental construction of the Itaipu Dam multiplied regional commerce. Monalisa became acclaimed as the preeminent retail house in the Triple Frontier.'
    },
    quote: {
      es: '«El cruce de fronteras se convirtió en un viaje hacia la sofisticación.»',
      en: '«Crossing borders became an inspiring journey into sophistication.»'
    },
    highlight: {
      es: 'Destino obligado para viajeros y compradores de todo el continente.',
      en: 'Must-visit destination for travelers and buyers from across the continent.'
    },
    img: 'assets/img/m1975.png',
    fallbackImg: 'https://monalisainternacional.com/wp-content/uploads/2026/07/m1975.png',
    badge: '1975'
  },
  {
    id: 3,
    year: '1980',
    slug: 'alianzas',
    title: {
      es: 'Aumento de operaciones',
      en: 'Global Expansion'
    },
    tag: {
      es: 'Alianzas con Maisons Internacionales',
      en: 'Alliances with Global Maisons'
    },
    location: 'Asunción · Nueva York · Miami',
    body: {
      es: 'L’Oréal, Shiseido, Estée Lauder, Cartier y La Prairie confiaron en Monalisa. La empresa se modernizó y abrió oficinas en Asunción, Nueva York y Miami.',
      en: 'Legendary houses such as L’Oréal, Shiseido, Estée Lauder, Cartier, and La Prairie trusted Monalisa. The company modernized and inaugurated executive offices in Asunción, New York, and Miami.'
    },
    quote: {
      es: '«Las casas más prestigiosas de París, Ginebra y Nueva York eligen un socio estratégico.»',
      en: '«The finest houses in Paris, Geneva, and New York chose an elite strategic partner.»'
    },
    highlight: {
      es: 'Representaciones directas y distribución exclusiva regional.',
      en: 'Direct representations and exclusive regional luxury distribution.'
    },
    img: 'assets/img/m1980.png',
    fallbackImg: 'https://monalisainternacional.com/wp-content/uploads/2026/07/m1980.png',
    badge: '1980'
  },
  {
    id: 4,
    year: '1992',
    slug: 'icono',
    title: {
      es: 'La explosión de los 90',
      en: 'The 1990s Icon'
    },
    tag: {
      es: 'Arquitectura & Magno Hito',
      en: 'Architecture & Grand Milestone'
    },
    location: 'Av. Boquerón, Ciudad del Este',
    body: {
      es: 'Comenzó la construcción del Edificio Monalisa: la primera tienda por departamentos especializada en lujo y la más completa de Sudamérica, y un ícono de la ciudad.',
      en: 'Construction began on the landmark Edificio Monalisa: South America\'s most comprehensive luxury department store, and an undeniable architectural icon of the city.'
    },
    quote: {
      es: '«Una catedral del retail diseñada para elevar los estándares del continente.»',
      en: '«A retail cathedral crafted to elevate standards across South America.»'
    },
    highlight: {
      es: 'Diseño arquitectónico pionero de clase mundial en Ciudad del Este.',
      en: 'World-class landmark architectural design in Ciudad del Este.'
    },
    img: 'assets/img/m1992.png',
    fallbackImg: 'https://monalisainternacional.com/wp-content/uploads/2026/07/m1992.png',
    badge: '1992'
  },
  {
    id: 5,
    year: '1993',
    slug: 'asuncion',
    title: {
      es: 'Operaciones en Asunción',
      en: 'Operations in Asunción'
    },
    tag: {
      es: 'Distribución Nacional & La Gioconda S.A.',
      en: 'National Distribution & La Gioconda S.A.'
    },
    location: 'Asunción, Paraguay',
    body: {
      es: 'La expansión llega a la capital: Monalisa abre sus operaciones en Asunción con La Gioconda S.A., oficinas administrativas y distribuidora.',
      en: 'Expansion arrived in the nation\'s capital: Monalisa expanded operations to Asunción through La Gioconda S.A., establishing administrative headquarters and major distribution.'
    },
    quote: {
      es: '«Conectando la capital con la cadena de distribución más sólida del país.»',
      en: '«Connecting the capital with the nation\'s strongest luxury supply network.»'
    },
    highlight: {
      es: 'Sólida base logística mayorista para el mercado paraguayo.',
      en: 'Robust wholesale logistics foundation for the Paraguayan market.'
    },
    img: 'assets/img/gioconda.png',
    fallbackImg: 'https://monalisainternacional.com/wp-content/uploads/2026/08/gioconda.png',
    badge: '1993'
  },
  {
    id: 6,
    year: '1994',
    slug: 'aphrodite',
    title: {
      es: 'Nace Aphrodite Boutique',
      en: 'Birth of Aphrodite Boutique'
    },
    tag: {
      es: 'Boutiques de Mall & Expansión a Brasil',
      en: 'Mall Boutiques & Brazil Expansion'
    },
    location: 'Asunción & São Paulo',
    body: {
      es: 'Con la llegada de los grandes shoppings a Asunción nace la cadena Aphrodite Boutique. En 1998 el grupo se expande a Brasil con oficinas en São Paulo.',
      en: 'With the arrival of premier shopping malls in Asunción, the Aphrodite Boutique chain was established. In 1998, the corporate group ventured into Brazil with offices in São Paulo.'
    },
    quote: {
      es: '«Llevando la experiencia personalizada de belleza y elegancia a los mejores centros comerciales.»',
      en: '«Bringing personalized beauty and refinement to South America\'s finest malls.»'
    },
    highlight: {
      es: 'Presencia en los principales centros comerciales y proyección transnacional.',
      en: 'Footprint in premier retail centers and transnational corporate presence.'
    },
    img: 'assets/img/aphrodite.png',
    fallbackImg: 'https://monalisainternacional.com/wp-content/uploads/2026/08/aphrodite.png',
    badge: '1994'
  },
  {
    id: 7,
    year: 'Hoy',
    slug: 'presente',
    title: {
      es: 'En el siglo XXI',
      en: 'In the 21st Century'
    },
    tag: {
      es: 'Vanguardia, Gastronomía & Bodega',
      en: 'Vanguard, Fine Dining & Wine Cellar'
    },
    location: 'Paraguay & Mercosur',
    body: {
      es: 'Un edificio de 8 pisos con las marcas más prestigiosas del mundo, restaurante, café y bodega de alta gama. Monalisa es hoy un símbolo del Paraguay.',
      en: 'An 8-floor destination showcasing the world\'s most prestigious brands, fine dining bistro, cafe, and high-end cava. Monalisa is today an enduring pride of Paraguay.'
    },
    quote: {
      es: '«Más que una tienda, un templo vivo del lujo y la excelencia sudamericana.»',
      en: '«More than a boutique: a living temple of South American excellence.»'
    },
    highlight: {
      es: '8 niveles de experiencias exclusivas de retail, gourmet y alta gama.',
      en: '8 levels of exclusive retail, gastronomy, and international luxury.'
    },
    img: 'assets/img/mhoy.png',
    fallbackImg: 'https://monalisainternacional.com/wp-content/uploads/2026/07/mhoy.png',
    badge: '2026'
  }
];

// Unidades de Negocio (Business Units)
const BUSINESS_UNITS = [
  {
    id: 'perfumes',
    number: '01',
    title: {
      es: 'Perfumería & Alta Cosmética',
      en: 'Perfumery & Haute Cosmetics'
    },
    desc: {
      es: 'Pioneros en la representación de las maisones de belleza más exclusivas de Francia, Suiza, Italia y Estados Unidos.',
      en: 'Pioneers in representing the most exclusive beauty houses from France, Switzerland, Italy, and the United States.'
    },
    brands: ['Chanel', 'Dior', 'Shiseido', 'La Prairie', 'Estée Lauder', 'Guerlain', 'Lancôme', 'Hermès']
  },
  {
    id: 'moda',
    number: '02',
    title: {
      es: 'Alta Moda & Accesorios',
      en: 'Haute Couture & Leather Goods'
    },
    desc: {
      es: 'Colecciones de indumentaria, marroquinería y calzado de diseñadores internacionales con curaduría selecta para cada temporada.',
      en: 'Curated apparel, leather goods, and designer footwear from international runways for every season.'
    },
    brands: ['Armani', 'Hugo Boss', 'Ferragamo', 'Zegna', 'Ralph Lauren', 'Michael Kors']
  },
  {
    id: 'relojes',
    number: '03',
    title: {
      es: 'Relojería & Joyería Suiza',
      en: 'Swiss Horology & Fine Jewelry'
    },
    desc: {
      es: 'Espacio maestro para la alta relojería ginebrina, piedras preciosas y piezas de orfebrería con certificación internacional.',
      en: 'Master showcase for Geneva watchmaking icons, precious gemstones, and certified fine jewelry.'
    },
    brands: ['Cartier', 'Omega', 'TAG Heuer', 'Breitling', 'Longines', 'Chopard', 'Montblanc']
  },
  {
    id: 'vinos',
    number: '04',
    title: {
      es: 'Bodega de Alta Gama & Licores',
      en: 'Grand Cru Wine Cellar & Spirits'
    },
    desc: {
      es: 'Una de las cavas climatizadas más completas del continente, albergando cosechas legendarias de Burdeos, Toscana, Napa y Mendoza.',
      en: 'One of the continent’s premier temperature-controlled cellars, housing legendary vintages from Bordeaux, Tuscany, Napa, and Mendoza.'
    },
    brands: ['Château Lafite', 'Sassicaia', 'Catena Zapata', 'Macallan', 'Dom Pérignon', 'Hennessy']
  },
  {
    id: 'gourmet',
    number: '05',
    title: {
      es: 'Chocolates Finos & Delicatessen',
      en: 'Fine Chocolaterie & Delicatessen'
    },
    desc: {
      es: 'Selección de bombones belgas, confitería suiza y delicias gourmet importadas con los más rigurosos estándares de conservación.',
      en: 'Selection of Belgian pralines, Swiss confectioneries, and imported gourmet delicacies preserved under strict climatic standards.'
    },
    brands: ['Neuhaus', 'Lindt', 'Godiva', 'Leonidas', 'Valrhona']
  },
  {
    id: 'gastronomia',
    number: '06',
    title: {
      es: 'Bistró, Cava & Restaurante',
      en: 'Bistrot, Cava & Fine Dining'
    },
    desc: {
      es: 'Gastronomía de autor en las alturas del Edificio Monalisa, fusionando cocina mediterránea con maridajes de excepción.',
      en: 'Signature dining atop the Monalisa building, marrying Mediterranean culinary craft with exceptional wine pairings.'
    },
    brands: ['Monalisa Bistró', 'Cava Privada', 'Café Monalisa']
  }
];
