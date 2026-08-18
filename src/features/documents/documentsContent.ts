export interface DocBlock {
  type: 'paragraph' | 'image';
  text?: string;
  src?: string;
  alt?: string;
}

export interface DocContent {
  title: string;
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

export const documentsByPath: Record<string, DocContent> = {
  'Storytelling.pdf': storytelling,
  'MemoriaConceptual.pdf': memoriaConceptual,
  'BaculosAfricanos.pdf': baculosAfricanos,
  'MascarasTribales.pdf': mascarasTribales,
};
