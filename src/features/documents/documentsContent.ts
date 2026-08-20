export interface ObraCardData {
  nombre: string;
  año: number;
  numero: string;
  serie: string;
  tecnica: string;
  materiales: string;
  medidas: string;
  nota?: string;
}

export interface DocBlock {
  type: 'paragraph' | 'image' | 'heading' | 'list' | 'obraCard';
  text?: string;
  src?: string;
  alt?: string;
  caption?: string;
  items?: string[];
  obra?: ObraCardData;
}

export interface DocContent {
  title: string;
  /** 'garamond' usa EB Garamond en el título en lugar de la tipografía Cinzel por defecto. */
  titleFont?: 'garamond';
  author?: string;
  subtitle?: string;
  blocks: DocBlock[];
}

export const storytelling: DocContent = {
  title: 'El origen de las presencias',
  author: 'Por Christián Acuña',
  blocks: [
    {
      type: 'paragraph',
      text: 'Mi encuentro con la talla de madera ocurrió como suceden las cosas más genuinas: en la infancia. Tenía once años cuando quedé hipnotizado viendo a mi tío Juancho tallar un bastón para mi abuela, a orillas del río Los Chorrillos, en Cabalango, en las sierras de Córdoba. Me fascinaba verlo dar vida a una rama recta de ligustro con una navaja española. Aquel hechizo fue inmediato: tomé mi propia rama y, verano tras verano, fui dándole forma. Mi primer báculo tardó tres años en completarse; todavía lo conservo como el testigo silencioso de ese descubrimiento. Mi segunda obra fue continuar aquel bastón que mi tío había dejado inconcluso. Recuerdo con una sonrisa las discusiones con el tío Juancho sobre quién lo había terminado: él aseguraba que había sido suyo, porque ya era incapaz de distinguir sus incisiones de las mías.',
    },
    {
      type: 'paragraph',
      text: 'Sin saberlo, ese fue mi primer gran elogio.',
    },
    {
      type: 'image',
      src: '/assets/DOCUMENTOS/images/storytelling-taller.jpg',
      alt: 'Christián Acuña tallando en su taller',
    },
    {
      type: 'paragraph',
      text: 'Así, la talla en madera se convirtió en una práctica constante que me acompaña durante décadas. En 2018, caminando por las orillas del Río de la Plata, encontré un nuevo territorio para esa búsqueda. Los troncos, maderas y fragmentos que el agua devolvía a la costa parecían conservar historias inscritas en sus formas y cicatrices. Desde entonces recorro la ribera reuniendo esos materiales y trabajando con ellos sin borrar las huellas de su recorrido. En mis obras intento revelar las presencias que ya habitan en la materia, permitiendo que el río siga participando de la construcción de cada pieza.',
    },
  ],
};

export const memoriaConceptual: DocContent = {
  title: 'Lo que el Río no quiso',
  subtitle: 'Maderas Flotantes del Río de la Plata',
  author: 'Christián Acuña',
  blocks: [
    {
      type: 'image',
      src: '/assets/OBRAS/0001-001.JPEG',
      alt: 'Refugiados — escultura de la serie Lo que el Río no quiso',
    },
    {
      type: 'paragraph',
      text: 'Estas esculturas encarnan el grito silencioso de los desplazados, refugiados, desprotegidos y olvidados, cuyas existencias penden del frágil hilo de la esperanza. Cada pieza materializa esa búsqueda desesperada por un nuevo comienzo, un territorio donde reconstruir la dignidad arrasada por el caos.',
    },
    {
      type: 'paragraph',
      text: 'Forman parte de la serie "Lo que el Río no quiso", donde el Río de la Plata se convierte en testigo y cómplice. Trabajadas con técnicas mixtas (tallado, ensamblaje y escultura), las obras nacen de materiales rescatados: maderas desgastadas por la corriente, troncos que perdieron su rumbo y metales oxidados por el tiempo. Son fragmentos de historias arrastradas por el agua, ahora recombinadas en un acto de resistencia poética.',
    },
    {
      type: 'paragraph',
      text: 'La elección de materiales reciclados no es casual: simbolizan la propia condición del exiliado, obligado a reinventarse con los restos de lo que fue. El río, a la vez tumba y cuna, devuelve lo que alguna vez quiso devorar, transformado en arte.',
    },
  ],
};

export const baculosAfricanos: DocContent = {
  title: 'Báculos Africanos',
  author: 'Christián Acuña',
  blocks: [
    {
      type: 'paragraph',
      text: 'En la mayoría de los países africanos los bastones de ceremonia son objetos que implican gran solemnidad. Son un signo externo de poder. Son utilizados por el rey, el jefe de cantón, el jefe de poblado o por los notables. Son objetos de autoridad y de prestigio.',
    },
    {
      type: 'paragraph',
      text: 'En esta serie de bastones africanos, también tallo la madera como si fuera un relato ancestral. Cada uno nace del diálogo con el material, cargado de símbolos, rostros y formas que evocan culturas donde el bastón no es solo un apoyo físico, sino una extensión del espíritu.',
    },
    {
      type: 'paragraph',
      text: 'Son objetos de autoridad, pero también de sabiduría y protección. Inspirados en la tradición africana, estos cetros tallados a mano celebran la conexión entre el arte, el cuerpo y la historia. En sus formas se entrelazan fuerza, resistencia y ceremonia.',
    },
    {
      type: 'paragraph',
      text: 'Trabajados con maderas recuperadas, cada bastón es único. En ellos se encarna una memoria que viene de lejos, pero que hoy vuelve a caminar con nosotros.',
    },
    {
      type: 'image',
      src: '/assets/DOCUMENTOS/images/baculos-shelf.jpg',
      alt: 'Báculos africanos exhibidos en el taller',
    },
    {
      type: 'image',
      src: '/assets/DOCUMENTOS/images/baculos-closeups.jpg',
      alt: 'Detalle de tallas en los báculos africanos',
    },
    {
      type: 'paragraph',
      text: 'Comencé a trabajar la madera cuando tenía once años, después de ver a mi tío Juancho, allá por 1971, quien tallaba un bastón para mi abuela Blanquita. Esto ocurría a orillas del río Los Chorrillos, en la casa de mis abuelos paternos, en Cabalango, Sierras de Córdoba. Me maravillaba ver cómo tío Juancho lograba crear imágenes africanas con gran facilidad, en una rama recta de ligustro, utilizando solo una pequeña navaja española. Comencé entonces a tallar mi propio bastón, agregándole dos o tres figuras verano tras verano, ya que viajábamos en las vacaciones junto con mi familia a la casa de mis abuelos. Luego de tres años, terminé el primer bastón, que aún conservo. Luego continué con el de mi abuela, que todavía tenía inconcluso mi tío. Fue muy divertido y halagador polemizar con tío Juancho, quien aseguraba que él mismo lo había terminado, y no lograba diferenciar su trabajo del mío.',
    },
    {
      type: 'paragraph',
      text: 'Durante más de 40 años, continué tallando un bastón por año, utilizando tan solo un cortaplumas. Este es el primero que tallé:',
    },
    {
      type: 'image',
      src: '/assets/DOCUMENTOS/images/baculos-primerbaston.jpg',
      alt: 'Detalle del primer bastón tallado por Christián Acuña',
    },
  ],
};

export const mascarasTribales: DocContent = {
  title: 'Máscaras Tribales',
  author: 'Christián Acuña',
  blocks: [
    {
      type: 'paragraph',
      text: 'Las máscaras tribales africanas son mucho más que objetos tallados: son portales hacia lo invisible. Su función es transformar a quien las porta, dotándolo de una fuerza que no le pertenece, pero que lo habita durante el ritual. A través del espíritu de la máscara, emerge un ser de otra naturaleza: un ancestro, una deidad, un animal mítico, una energía poderosa que trasciende lo humano.',
    },
    {
      type: 'image',
      src: '/assets/DOCUMENTOS/images/mascaras-hero.jpg',
      alt: 'Máscara tribal africana',
    },
    {
      type: 'paragraph',
      text: 'Tradicionalmente, estas máscaras se utilizan en ceremonias religiosas y sociales — ritos de iniciación, funerales, celebraciones agrarias, danzas sagradas y festividades dedicadas a los dioses—. En cada una, representan fuerzas que encarnan la vida y la muerte, el orden y el caos, la naturaleza y lo sobrenatural.',
    },
    {
      type: 'paragraph',
      text: 'En mis obras, esas formas arcaicas cobran nueva vida. Talladas en maderas recuperadas, con gestos rudos o delicados, intento que cada máscara conserve ese espíritu ancestral: la capacidad de revelar lo invisible, de conectar con lo sagrado.',
    },
    {
      type: 'paragraph',
      text: 'El Comienzo',
    },
    {
      type: 'paragraph',
      text: 'Desde muy chico sentí la necesidad de tallar. Inspirado por los trabajos de mi tío, comencé a crear máscaras tribales en hojas de palmera. Tenía apenas 11 o 12 años, y aquellas primeras piezas me acompañaban a la escuela, donde las presentaba orgulloso en la materia que entonces llamaban "Actividades Prácticas".',
    },
    {
      type: 'paragraph',
      text: 'Esas máscaras fueron mi puerta de entrada al mundo del arte. No eran simples ejercicios: en ellas ya se insinuaba una búsqueda, una conexión con lo ancestral y lo simbólico.',
    },
    {
      type: 'paragraph',
      text: 'Hoy, aquellas primeras creaciones dialogan con las máscaras que sigo tallando en maderas recuperadas. Como en las culturas africanas que me inspiran, las máscaras siguen siendo para mí instrumentos de transformación. Representan espíritus, dioses, animales míticos, fuerzas invisibles. Son símbolos que desafían lo cotidiano y nos recuerdan que aún existe lo sagrado.',
    },
    {
      type: 'image',
      src: '/assets/DOCUMENTOS/images/mascaras-comienzo.jpg',
      alt: 'Primeras máscaras talladas por Christián Acuña',
    },
  ],
};

const RIO_TECNICA = 'Ensamblaje y Talla';
const RIO_MATERIALES = 'Maderas y metales recuperados del Río de la Plata.';

export const portfolio: DocContent = {
  title: 'Lo que el Río no quiso',
  subtitle: 'Esculturas creadas con material recuperado del Río de la Plata',
  author: 'Christián Acuña',
  blocks: [
    { type: 'image', src: '/assets/DOCUMENTOS/images/portfolio/cover-000.jpg', alt: 'Escultura de la serie Lo que el Río no quiso' },

    { type: 'heading', text: 'Premios y reconocimientos' },
    { type: 'paragraph', text: 'Premios' },
    {
      type: 'list',
      items: [
        '2025 — 1.º Premio Escultura — 90.º Salón de Otoño SAAP, Sociedad Argentina de Artistas Plásticos (Esperanza a la Deriva)',
        '2025 — Mención — XVI Salón ARTVILO, Artistas Visuales Vicente Lopez, Museo Rómulo Raggio (La Fábrica)',
        '2024 — 3.º Premio — LXIV Salón de Otoño Ateneo Esteban Echeverría (Mi Arca)',
        '2023 — 3.º Premio — Concurso ArteNew (Viejo Tren)',
      ],
    },
    { type: 'paragraph', text: 'Selecciones institucionales' },
    {
      type: 'list',
      items: [
        'Fondo Nacional de las Artes, MAP Museo de Arte Popular (En el barco)',
        'Museo de Arte Moderno de Buenos Aires, para la plataforma del Banco de Galicia (Refugiados)',
      ],
    },
    { type: 'paragraph', text: 'Colecciones' },
    {
      type: 'list',
      items: ['Museo Fundación Rómulo Raggio (La colina de la vida) — Colección Permanente'],
    },
    {
      type: 'image',
      src: '/assets/DOCUMENTOS/images/portfolio/premio-saap.jpg',
      alt: 'Christián Acuña recibiendo el 1° Premio Escultura, 90° Salón de Otoño SAAP',
      caption: '1° Premio Escultura. 90° Salón de Otoño SAAP — Facultad de Derecho, Universidad de Buenos Aires - 2025.',
    },

    { type: 'heading', text: 'Exposición individual' },
    { type: 'paragraph', text: 'Museo de Arte Contemporáneo Beato Angélico - UCALP' },
    {
      type: 'image',
      src: '/assets/DOCUMENTOS/images/portfolio/expo-wide.jpg',
      alt: 'Sala del Museo Beato Angélico durante la exposición individual',
    },
    {
      type: 'image',
      src: '/assets/DOCUMENTOS/images/portfolio/expo-visitantes.jpg',
      alt: 'Visitantes observando las obras en la exposición',
      caption: 'Exposición individual realizada en el Museo de Arte Contemporáneo Beato Angélico (UCALP), La Plata, con una selección de obras de las series Lo que el Río no quiso, Invisibles y Re-Cuadros.',
    },

    { type: 'heading', text: 'Statement' },
    {
      type: 'paragraph',
      text: 'Empecé a los once años, a orillas de un río en las sierras de Córdoba, con una rama y un cortaplumas. Y ya no paré.',
    },
    {
      type: 'paragraph',
      text: 'Trabajo con lo que el río devuelve. Cada fragmento que recojo en las orillas del Río de la Plata trae una historia que no conozco, y que tampoco intento reconstruir. Es justamente eso lo que me interesa: la parte que falta, esa presencia que se adivina en una madera fatigada por el agua y el tiempo.',
    },
    {
      type: 'paragraph',
      text: 'Trabajo la madera desde chico, pero fue el río el que me enseñó que esculpir no siempre es agregar forma. A veces es reconocer la que ya está ahí, latente, esperando que alguien la vea. Las marcas del desgaste, la pérdida de color, la fractura: no son accidentes que corrijo, son el núcleo mismo de la obra.',
    },
    {
      type: 'paragraph',
      text: 'Este río, en particular, tiene una memoria que excede lo natural. Sus orillas guardan lo que la historia no pudo nombrar. Y es sobre esa orilla que trabajo.',
    },

    { type: 'heading', text: 'Lo que el Río no quiso' },
    { type: 'paragraph', text: 'Hay objetos que el río no termina de llevarse.' },
    {
      type: 'paragraph',
      text: 'Desde 2018, Christián Acuña recorre las orillas del Río de la Plata recogiendo lo que el agua depositó y abandonó: maderas desgastadas, metales oxidados, fragmentos de objetos cuya historia es irrecuperable. Con ese material construye esculturas que no disimulan su origen, sino que lo exhiben: la pérdida de color y cada una de las cicatrices, son parte integral de un todo.',
    },
    {
      type: 'paragraph',
      text: 'En esta serie, Acuña interviene los materiales encontrados para revelar presencias humanas que parecen haber estado siempre ahí, esperando. No las inventa, las reconoce. El encastre y tallado mínimo que agrega —un ojo, una boca, la inclinación de un cuerpo— alcanzan para que lo inerte se vuelva figura, para que el resto se vuelva persona.',
    },
    {
      type: 'paragraph',
      text: 'Los títulos de las obras, Refugiados, En el Barco, Esperanza a la Deriva, Clamor, no son metáforas decorativas. Nombran condiciones humanas que el río, con su memoria larga y silenciosa, ya conoce.',
    },

    {
      type: 'obraCard',
      obra: {
        nombre: 'Refugiados', año: 2018, numero: '0001', serie: 'Lo que el Río no quiso',
        tecnica: RIO_TECNICA, materiales: RIO_MATERIALES, medidas: '48 x 45 x 13 cm',
        nota: 'Seleccionada por el equipo curatorial del Museo de Arte Moderno de Buenos Aires, para la plataforma Galicia Online Banking.',
      },
    },
    {
      type: 'obraCard',
      obra: {
        nombre: 'En el Barco', año: 2019, numero: '0007', serie: 'Lo que el Río no quiso',
        tecnica: RIO_TECNICA, materiales: RIO_MATERIALES, medidas: '68 x 49 x 18 cm',
        nota: 'Seleccionada Fondo Nacional de las Artes, para su exposición en el Museo de Arte Popular José Hernández MAP.',
      },
    },
    {
      type: 'obraCard',
      obra: {
        nombre: 'Mi Arca', año: 2022, numero: '0072', serie: 'Lo que el Río no quiso',
        tecnica: RIO_TECNICA, materiales: RIO_MATERIALES, medidas: '98 x 65 x 19 cm',
        nota: '3° Premio, LXIV Salón de Otoño, Ateneo Esteban Echeverría.',
      },
    },
    {
      type: 'obraCard',
      obra: {
        nombre: 'La Fábrica', año: 2023, numero: '0100', serie: 'Lo que el Río no quiso',
        tecnica: RIO_TECNICA, materiales: RIO_MATERIALES, medidas: '68 x 68 x 21 cm',
        nota: 'Mención — "XVI Salón ARTVILO de Pintura y Escultura", Asociación Artistas Visuales de Vicente López.',
      },
    },
    {
      type: 'obraCard',
      obra: {
        nombre: 'Viejo Tren', año: 2023, numero: '0079', serie: 'Lo que el Río no quiso',
        tecnica: RIO_TECNICA, materiales: RIO_MATERIALES, medidas: '32 x 78 x 15 cm',
        nota: '3º Premio — Concurso ArteNew — Rotary Club.',
      },
    },
    {
      type: 'obraCard',
      obra: {
        nombre: 'Clamor', año: 2024, numero: '0102', serie: 'Lo que el Río no quiso',
        tecnica: RIO_TECNICA, materiales: RIO_MATERIALES, medidas: '145 x 80 x 35 cm',
      },
    },
    {
      type: 'obraCard',
      obra: {
        nombre: 'Esperanza a la Deriva', año: 2024, numero: '0112', serie: 'Lo que el Río no quiso',
        tecnica: RIO_TECNICA, materiales: RIO_MATERIALES, medidas: '120 x 120 x 25 cm',
        nota: '1º Premio Escultura — 90° Salón de Otoño SAAP — 2025.',
      },
    },

    { type: 'heading', text: 'Biografía' },
    {
      type: 'image',
      src: '/assets/DOCUMENTOS/images/storytelling-taller.jpg',
      alt: 'Christián Acuña tallando en su taller',
    },
    {
      type: 'paragraph',
      text: 'Christián Acuña nació en Bell Ville, Córdoba, en 1959. Vive y trabaja en Buenos Aires.',
    },
    {
      type: 'paragraph',
      text: 'Comenzó a tallar en su niñez, con su tío, a orillas del río Los Chorrillos, en las sierras de Córdoba, experiencia que marcó el inicio de un vínculo permanente con la madera. Desde entonces no ha dejado de tallar.',
    },
    {
      type: 'paragraph',
      text: 'Desde 2018 desarrolla Lo que el Río no quiso, un proyecto escultórico realizado con materiales recuperados de las orillas del Río de la Plata, del que surgen, entre otras, las series Invisibles y Re-Cuadros.',
    },
    {
      type: 'paragraph',
      text: 'Su obra fue distinguida con el 1.º Premio Escultura en el 90.º Salón de Otoño SAAP (2025) y seleccionada por el Fondo Nacional de las Artes y el equipo curatorial del Museo de Arte Moderno de Buenos Aires. Expuso en el Museo de Arte Popular José Hernández, el Museo Beato Angélico (UCALP) y el Museo Rómulo Raggio, entre otros. Obras suyas integran la colección permanente del Museo Fundación Rómulo Raggio.',
    },

    { type: 'heading', text: 'Invisibles' },
    {
      type: 'paragraph',
      text: 'Hay un momento en el trabajo escultórico en que la herramienta deja de ser necesaria.',
    },
    {
      type: 'paragraph',
      text: 'En la serie Invisibles, Christián Acuña lleva su práctica hasta ese límite: los materiales recuperados de las orillas del Río de la Plata ya no son intervenidos en sus rostros ni en sus cuerpos. No hay talla que construya una nariz, unos ojos o una boca. La figura humana surge exclusivamente de las formas que el agua dejó.',
    },
    {
      type: 'paragraph',
      text: 'Lo que parece una restricción es, en realidad, una pregunta: ¿cuánta humanidad puede contener la materia sin que el artista la fuerce?',
    },
    {
      type: 'paragraph',
      text: 'Las piezas conservan una condición deliberadamente ambigua: presencia y ausencia, figura y ruina, cuerpo y resto. Acuña no las completa; las organiza y las pone en relación. El ensamblaje es el único gesto que se permite: decidir quién está junto a quién, qué mira hacia dónde y qué permanece en sombra.',
    },
    {
      type: 'paragraph',
      text: 'En un río que guarda memorias que la historia oficial tardó décadas en nombrar, esa decisión de no intervenir adquiere un significado que trasciende lo formal.',
    },
    {
      type: 'obraCard',
      obra: {
        nombre: 'Los que no miramos', año: 2026, numero: '0153', serie: 'Invisibles',
        tecnica: 'Ensamblaje', materiales: RIO_MATERIALES, medidas: '88 x 110 x 30 cm',
      },
    },
    {
      type: 'obraCard',
      obra: {
        nombre: 'Los Sin Nombre', año: 2026, numero: '0154', serie: 'Invisibles',
        tecnica: 'Ensamblaje', materiales: RIO_MATERIALES, medidas: '86 x 72 x 50 cm',
      },
    },
    {
      type: 'obraCard',
      obra: {
        nombre: 'El Abrazo', año: 2026, numero: '0158', serie: 'Invisibles',
        tecnica: 'Ensamblaje', materiales: RIO_MATERIALES, medidas: '60 x 35 x 35 cm',
      },
    },

    { type: 'heading', text: 'Serie Re-Cuadros' },
    { type: 'paragraph', text: 'Un marco sin cuadro es una pregunta sin respuesta.' },
    {
      type: 'paragraph',
      text: 'En esta serie, Christián Acuña interviene marcos antiguos de origen familiar — objetos que alguna vez contuvieron imágenes domésticas, retratos, presencias — introduciéndoles materiales recuperados de las orillas del Río de la Plata. Lo que emerge no es una pintura ni una escultura convencional: es algo intermedio, un objeto que pertenece a dos tiempos y a dos memorias simultáneamente.',
    },
    {
      type: 'paragraph',
      text: 'La memoria íntima está en el marco: su moldura dorada, su madera trabajada, el desgaste particular de quien lo colgó y lo descolgó durante décadas. La memoria colectiva está en lo que el río devolvió: fragmentos anónimos, sin dueño identificable, transformados por el agua y el tiempo.',
    },
    {
      type: 'paragraph',
      text: 'Al reunirlos, Acuña no resuelve la tensión entre ambos — la sostiene. El marco que alguna vez contuvo un rostro conocido ahora alberga figuras que nadie puede nombrar.',
    },
    { type: 'paragraph', text: 'La pregunta sobre quiénes son permanece abierta.' },
    {
      type: 'obraCard',
      obra: {
        nombre: 'Entrelazados', año: 2025, numero: '0146', serie: 'Re-Cuadros',
        tecnica: RIO_TECNICA, materiales: RIO_MATERIALES, medidas: '100 x 137 x 17 cm',
      },
    },
    {
      type: 'obraCard',
      obra: {
        nombre: 'Ecos de un Hogar', año: 2025, numero: '0147', serie: 'Re-Cuadros',
        tecnica: RIO_TECNICA, materiales: RIO_MATERIALES, medidas: '58 x 50 x 12 cm',
      },
    },
    {
      type: 'obraCard',
      obra: {
        nombre: 'Secretos tras el Cristal', año: 2025, numero: '0152', serie: 'Re-Cuadros',
        tecnica: RIO_TECNICA, materiales: RIO_MATERIALES, medidas: '75 x 55 x 19 cm',
      },
    },

    { type: 'heading', text: 'Trayectoria' },
    { type: 'paragraph', text: 'Muestras individuales' },
    {
      type: 'list',
      items: [
        '2026 — Museo de Arte Contemporáneo Beato Angélico, UCALP, La Plata',
        '2025 — Círculo de Bellas Artes de San Miguel (Exhibición especial, 25 metros de vidriera)',
      ],
    },
    { type: 'paragraph', text: 'Salones y muestras institucionales' },
    {
      type: 'list',
      items: [
        '2025 — 90° Salón de Otoño SAAP, Facultad de Derecho, UBA, Bs. As.',
        '2025 — XVI Salón ARTVILO, Museo Rómulo Raggio, Vicente López',
        '2024-2025 — Expoarte, Museo Rómulo Raggio, Vicente López',
        '2024-2025 — Muestras itinerantes AADAE, Casa de Santa Fe, Chaco, Salta, Tierra del Fuego.',
        '2024 — Muestra Colectiva AADAE, Honorable Cámara de Senadores y Honorable Cámara de Diputados de la Provincia de Buenos Aires',
        '2024 — LXIV Salón de Otoño, Ateneo Esteban Echeverría, San Fernando',
        '2024 — Fundación Catedral, Catedral de La Plata',
        '2023 — Escultórica, Paseo de las Artes, Buenos Aires',
        '2023 — Galería Braque, Buenos Aires',
        '2019 — SUMA, Arte y Joyas, Centro Cultural Borges, Buenos Aires',
      ],
    },
    { type: 'paragraph', text: 'Prensa' },
    {
      type: 'list',
      items: [
        '2025 — Entrevista, Radio Nacional',
        '2021 — Entrevista, Radio Cultura, conducción Alicia de Arteaga',
        '2021 — Reportaje, Télam',
      ],
    },
    { type: 'paragraph', text: 'Galerías y Espacios de Arte' },
    {
      type: 'list',
      items: [
        'Los Caracoles - José Ignacio, Punta del Este, Uruguay',
        'Galería F/O - La Boca, Buenos Aires, Argentina',
        'Bertuzzi Atelier - Puerto Madero, Buenos Aires, Argentina',
        'Cohen - Acasusso, Buenos Aires',
      ],
    },

    { type: 'heading', text: 'Contacto' },
    {
      type: 'paragraph',
      text: 'Christián Acuña — Escultor — Buenos Aires, Argentina. Mail: chacunart@gmail.com — Instagram: @chacunart — www.chacunart.com',
    },
  ],
};

export const premios: DocContent = {
  title: 'PREMIOS Y RECONOCIMIENTOS',
  subtitle: 'Esculturas creadas con material recuperado del Río de la Plata',
  author: 'Christián Acuña',
  blocks: [
    { type: 'paragraph', text: 'Premios' },
    {
      type: 'list',
      items: [
        '2025 — 1.º Premio Escultura — 90.º Salón de Otoño SAAP, Sociedad Argentina de Artistas Plásticos (Esperanza a la Deriva)',
        '2025 — Mención — XVI Salón ARTVILO, Artistas Visuales Vicente Lopez, Museo Rómulo Raggio (La Fábrica)',
        '2024 — 3.º Premio — LXIV Salón de Otoño Ateneo Esteban Echeverría (Mi Arca)',
        '2023 — 3.º Premio — Concurso ArteNew (Viejo Tren)',
      ],
    },
    { type: 'paragraph', text: 'Selecciones institucionales' },
    {
      type: 'list',
      items: [
        'Fondo Nacional de las Artes, MAP Museo de Arte Popular (En el Barco)',
        'Museo de Arte Moderno de Buenos Aires, para la plataforma del Banco de Galicia (Refugiados)',
      ],
    },
    { type: 'paragraph', text: 'Colecciones' },
    {
      type: 'list',
      items: ['Museo Fundación Rómulo Raggio (La colina de la vida) — Colección Permanente'],
    },
    {
      type: 'obraCard',
      obra: {
        nombre: 'Esperanza a la Deriva', año: 2024, numero: '0112', serie: 'Lo que el Río no quiso',
        tecnica: RIO_TECNICA, materiales: RIO_MATERIALES, medidas: '120 x 120 x 25 cm',
        nota: '1.º Premio Escultura — 90.º Salón de Otoño SAAP, Sociedad Argentina de Artistas Plásticos — 2025.',
      },
    },
    {
      type: 'obraCard',
      obra: {
        nombre: 'La Fábrica', año: 2023, numero: '0100', serie: 'Lo que el Río no quiso',
        tecnica: RIO_TECNICA, materiales: RIO_MATERIALES, medidas: '68 x 68 x 21 cm',
        nota: 'Mención Escultura — XVI Salón ARTVILO, Artistas Visuales de Vicente López / Museo Rómulo Raggio — 2025.',
      },
    },
    {
      type: 'obraCard',
      obra: {
        nombre: 'Mi Arca', año: 2023, numero: '0072', serie: 'Lo que el Río no quiso',
        tecnica: RIO_TECNICA, materiales: 'Maderas y metales recuperados del Río de la Plata.', medidas: '98 x 65 x 19 cm, Peso: 7 kg',
        nota: '3.er Premio — LXIV Salón de Otoño, Ateneo Popular Esteban Echeverría, San Fernando — 2024.',
      },
    },
    {
      type: 'obraCard',
      obra: {
        nombre: 'Viejo Tren', año: 2023, numero: '0079', serie: 'Lo que el Río no quiso',
        tecnica: RIO_TECNICA, materiales: RIO_MATERIALES, medidas: '32 x 78 x 15 cm',
        nota: '3.er Premio — Concurso Arte New, Rotary Club (Villa Luro · Palermo New · Villa Urquiza) — 2023.',
      },
    },
    {
      type: 'obraCard',
      obra: {
        nombre: 'Refugiados', año: 2018, numero: '0001', serie: 'Lo que el Río no quiso',
        tecnica: RIO_TECNICA, materiales: 'Maderas y metales recuperados del Río de la Plata.', medidas: '48 x 45 x 13 cm, Peso: 2 kg',
        nota: 'Selección Oficial — Galicia Homebanking, curaduría del Museo de Arte Moderno de Buenos Aires (MAMBA) — 2021.',
      },
    },
    {
      type: 'obraCard',
      obra: {
        nombre: 'En el Barco', año: 2019, numero: '0007', serie: 'Lo que el Río no quiso',
        tecnica: RIO_TECNICA, materiales: 'Maderas y metales recuperados del Río de la Plata.', medidas: '68 x 49 x 18 cm, Peso: 26 kg',
        nota: 'Selección Oficial — Fondo Nacional de las Artes, Artesanías Tradicionales y Contemporáneas, exhibida en el Museo de Arte Popular José Hernández (MAP) — 2019.',
      },
    },
  ],
};

export const loQueElRioNoQuiso: DocContent = {
  title: 'LO QUE EL RÍO NO QUISO',
  author: 'Christián Acuña',
  blocks: [
    { type: 'paragraph', text: 'Hay objetos que el río no termina de llevarse.' },
    {
      type: 'paragraph',
      text: 'Desde 2018, Christián Acuña recorre las orillas del Río de la Plata recogiendo lo que el agua depositó y abandonó: maderas desgastadas, metales oxidados, fragmentos de objetos cuya historia es irrecuperable. Con ese material construye esculturas que no disimulan su origen, sino que lo exhiben:  la pérdida de color y cada una de las cicatrices, son parte integral de un todo.',
    },
    {
      type: 'paragraph',
      text: 'En esta serie, Acuña interviene los materiales encontrados para revelar presencias humanas que parecen haber estado siempre ahí, esperando. No las inventa, las reconoce. El encastre y tallado mínimo que agrega —un ojo, una boca, la inclinación de un cuerpo— alcanzan para que lo inerte se vuelva figura, para que el resto se vuelva persona.',
    },
    {
      type: 'paragraph',
      text: 'Los títulos de las obras, Refugiados, En el Barco, Esperanza a la Deriva, Clamor, no son metáforas decorativas. Nombran condiciones humanas que el río, con su memoria larga y silenciosa, ya conoce.',
    },
  ],
};

export const serieInvisibles: DocContent = {
  title: 'INVISIBLES',
  titleFont: 'garamond',
  author: 'Christián Acuña',
  blocks: [
    {
      type: 'paragraph',
      text: 'Hay un momento en el trabajo escultórico en que la herramienta deja de ser necesaria.',
    },
    {
      type: 'paragraph',
      text: 'En la serie Invisibles, Christián Acuña lleva su práctica hasta ese límite: los materiales recuperados de las orillas del Río de la Plata ya no son intervenidos en sus rostros ni en sus cuerpos. No hay talla que construya una nariz, unos ojos o una boca. La figura humana surge exclusivamente de las formas que el agua dejó.',
    },
    {
      type: 'paragraph',
      text: 'Lo que parece una restricción es, en realidad, una pregunta: ¿cuánta humanidad puede contener la materia sin que el artista la fuerce?',
    },
    {
      type: 'paragraph',
      text: 'Las piezas conservan una condición deliberadamente ambigua: presencia y ausencia, figura y ruina, cuerpo y resto. Acuña no las completa; las organiza y las pone en relación. El ensamblaje es el único gesto que se permite: decidir quién está junto a quién, qué mira hacia dónde y qué permanece en sombra.',
    },
    {
      type: 'paragraph',
      text: 'En un río que guarda memorias que la historia oficial tardó décadas en nombrar, esa decisión de no intervenir adquiere un significado que trasciende lo formal.',
    },
  ],
};

export const serieRecuadros: DocContent = {
  title: 'SERIE RE-CUADROS',
  titleFont: 'garamond',
  author: 'Christián Acuña',
  blocks: [
    { type: 'paragraph', text: 'Un marco sin cuadro es una pregunta sin respuesta.' },
    {
      type: 'paragraph',
      text: 'En esta serie, Christián Acuña interviene marcos antiguos de origen familiar — objetos que alguna vez contuvieron imágenes domésticas, retratos, presencias — introduciéndoles materiales recuperados de las orillas del Río de la Plata. Lo que emerge no es una pintura ni una escultura convencional: es algo intermedio, un objeto que pertenece a dos tiempos y a dos memorias simultáneamente.',
    },
    {
      type: 'paragraph',
      text: 'La memoria íntima está en el marco: su moldura dorada, su madera trabajada, el desgaste particular de quien lo colgó y lo descolgó durante décadas. La memoria colectiva está en lo que el río devolvió: fragmentos anónimos, sin dueño identificable, transformados por el agua y el tiempo.',
    },
    {
      type: 'paragraph',
      text: 'Al reunirlos, Acuña no resuelve la tensión entre ambos — la sostiene. El marco que alguna vez contuvo un rostro conocido ahora alberga figuras que nadie puede nombrar.',
    },
    { type: 'paragraph', text: 'La pregunta sobre quiénes son permanece abierta.' },
  ],
};

export const documentsByPath: Record<string, DocContent> = {
  'Storytelling.pdf': storytelling,
  'MemoriaConceptual.pdf': memoriaConceptual,
  'BaculosAfricanos.pdf': baculosAfricanos,
  'MascarasTribales.pdf': mascarasTribales,
  'Portfolio.pdf': portfolio,
  'Premios.pdf': premios,
  'LoQueElRioNoQuiso.pdf': loQueElRioNoQuiso,
  'SerieInvisibles.pdf': serieInvisibles,
  'SerieRecuadros.pdf': serieRecuadros,
};
