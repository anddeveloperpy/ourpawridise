export interface DogTag {
  label: string;
  variant?: 'default' | 'secondary' | 'accent';
}

export interface DogHealthInfo {
  label: string;
  status: string;
}

export interface DogShelterInfo {
  id: string;
  name: string;
  location: string;
  phone: string;
  email?: string;
}

export interface Dog {
  id: string;
  name: string;
  breed: string;
  age: string;
  size: string;
  sizeCategory: 'Grande' | 'Mediano' | 'Pequeño' | 'Mini';
  type: 'Perro' | 'Gato' | 'Otro';
  temperament: string;
  color: string;
  healthStatus: string;
  gender: 'Macho' | 'Hembra';
  images: string[];
  story: string;
  personality: string[];
  healthInfo: DogHealthInfo[];
  tags: DogTag[];
  shelter: DogShelterInfo;
  adoptionFee: string;
}

export const dogs: Dog[] = [
  // Asociación Amigos de los Animales (AMA) - ID: 1
  {
    id: '1',
    name: 'Luna',
    breed: 'Labrador Mix',
    age: '2 años',
    size: 'Mediano (22kg)',
    sizeCategory: 'Mediano',
    type: 'Perro',
    temperament: 'Amigable y sociable',
    color: 'Dorado',
    healthStatus: 'Excelente',
    gender: 'Hembra',
    images: [
      '/friendly-golden-labrador-rescue-dog.jpg',
      '/happy-rescued-golden-retriever-dog-smiling-outdoor.jpg',
    ],
    story: 'Luna fue rescatada de la calle cuando apenas era una cachorra. A pesar de su difícil comienzo, ha demostrado ser una perrita increíblemente amorosa y resiliente. Le encanta jugar con otros perros y es extremadamente cariñosa con las personas. Luna busca una familia activa que le brinde el amor y ejercicio que necesita para ser feliz.',
    personality: [
      'Extremadamente amigable con personas y otros perros',
      'Le encanta jugar y hacer ejercicio',
      'Obediente y fácil de entrenar',
      'Perfecta para familias con niños',
      'Necesita caminatas diarias y espacio para jugar',
    ],
    healthInfo: [
      { label: 'Vacunada', status: 'Completo' },
      { label: 'Esterilizada', status: 'Sí' },
      { label: 'Desparasitada', status: 'Sí' },
      { label: 'Microchip', status: 'Sí' },
    ],
    tags: [
      { label: 'Amigable con niños', variant: 'default' },
      { label: 'Amigable con perros', variant: 'default' },
      { label: 'Activa', variant: 'secondary' },
      { label: 'Entrenada', variant: 'accent' },
    ],
    shelter: {
      id: '1',
      name: 'Asociación Amigos de los Animales (AMA)',
      location: 'Ciudad de Guatemala',
      phone: '+502 2222-3333',
    },
    adoptionFee: 'Q500 (incluye vacunas y esterilización)',
  },
  {
    id: '2',
    name: 'Max',
    breed: 'Golden Retriever Mix',
    age: '5 años',
    size: 'Grande (30kg)',
    sizeCategory: 'Grande',
    type: 'Perro',
    temperament: 'Tranquilo y cariñoso',
    color: 'Dorado oscuro',
    healthStatus: 'Bueno',
    gender: 'Macho',
    images: [
      '/gentle-golden-retriever-senior-rescue-dog.jpg',
    ],
    story: 'Max es un perro senior que busca un hogar tranquilo para pasar sus años dorados. Es muy calmado, le gusta dormir a los pies de sus dueños y recibir caricias. Ideal para alguien que busca compañía relajada.',
    personality: [
      'Muy tranquilo y relajado',
      'Se lleva bien con gatos',
      'No necesita mucho ejercicio intenso',
      'Leal y protector',
    ],
    healthInfo: [
      { label: 'Vacunada', status: 'Completo' },
      { label: 'Castrado', status: 'Sí' },
      { label: 'Desparasitada', status: 'Sí' },
    ],
    tags: [
      { label: 'Senior', variant: 'secondary' },
      { label: 'Tranquilo', variant: 'default' },
      { label: 'Ideal apartamento', variant: 'accent' },
    ],
    shelter: {
      id: '1',
      name: 'Asociación Amigos de los Animales (AMA)',
      location: 'Ciudad de Guatemala',
      phone: '+502 2222-3333',
    },
    adoptionFee: 'Q350',
  },

  // Asociación Guatemalteca Mano Amiga - ID: 2
  {
    id: '3',
    name: 'Rocky',
    breed: 'Pastor Alemán',
    age: '3 años',
    size: 'Grande (35kg)',
    sizeCategory: 'Grande',
    type: 'Perro',
    temperament: 'Leal y alerta',
    color: 'Negro y Fuego',
    healthStatus: 'Excelente',
    gender: 'Macho',
    images: [
      '/german-shepherd-rescue-dog-loyal.jpg',
    ],
    story: 'Rocky es un Pastor Alemán inteligente y enérgico. Necesita un dueño con experiencia que pueda darle estimulación mental y física. Es muy leal y será un gran compañero de aventuras.',
    personality: [
      'Inteligente y aprende rápido',
      'Protector con su familia',
      'Necesita actividad constante',
      'Bueno para entrenamiento avanzado',
    ],
    healthInfo: [
      { label: 'Vacunada', status: 'Completo' },
      { label: 'Castrado', status: 'Sí' },
      { label: 'Desparasitada', status: 'Sí' },
    ],
    tags: [
      { label: 'Guardián', variant: 'default' },
      { label: 'Inteligente', variant: 'accent' },
      { label: 'Activo', variant: 'secondary' },
    ],
    shelter: {
      id: '2',
      name: 'Asociación Guatemalteca Mano Amiga',
      location: 'Ciudad de Guatemala',
      phone: '+502 4444-5555',
    },
    adoptionFee: 'Q600',
  },
  {
    id: '4',
    name: 'Bella',
    breed: 'Pitbull Mix',
    age: '2 años',
    size: 'Mediano (25kg)',
    sizeCategory: 'Mediano',
    type: 'Perro',
    temperament: 'Duce y juguetona',
    color: 'Gris',
    healthStatus: 'Excelente',
    gender: 'Hembra',
    images: [
      '/loving-gray-pitbull-rescue-dog.jpg',
    ],
    story: 'Bella rompe todos los estereotipos. Es la perrita más dulce y besucona que conocerás. Le encantan los niños y acurrucarse en el sofá. Busca una familia que le de mucho amor.',
    personality: [
      'Muy cariñosa (besucona)',
      'Le encantan los niños',
      'Juguetona pero sabe calmarse',
      'Sociable con personas',
    ],
    healthInfo: [
      { label: 'Vacunada', status: 'Completo' },
      { label: 'Esterilizada', status: 'Sí' },
      { label: 'Microchip', status: 'Sí' },
    ],
    tags: [
      { label: 'Cariñosa', variant: 'accent' },
      { label: 'Niñera', variant: 'default' },
      { label: 'Fuerte', variant: 'secondary' },
    ],
    shelter: {
      id: '2',
      name: 'Asociación Guatemalteca Mano Amiga',
      location: 'Ciudad de Guatemala',
      phone: '+502 4444-5555',
    },
    adoptionFee: 'Q450',
  },

  // Albergue Municipal de Mixco - ID: 3
  {
    id: '5',
    name: 'Charlie',
    breed: 'Beagle',
    age: '6 meses',
    size: 'Pequeño (en crecimiento)',
    sizeCategory: 'Pequeño',
    type: 'Perro',
    temperament: 'Curioso y energético',
    color: 'Tricolor',
    healthStatus: 'Excelente',
    gender: 'Macho',
    images: [
      '/playful-beagle-puppy-rescue-dog.jpg',
    ],
    story: 'Charlie es un cachorro lleno de vida. Todo le da curiosidad y siempre está moviendo la colita. Necesita paciencia para su entrenamiento de cachorro, pero recompensará con muchas risas.',
    personality: [
      'Muy curioso y olfateador',
      'Juguetón incansable',
      'Sociable con todos',
      'Necesita entrenamiento básico',
    ],
    healthInfo: [
      { label: 'Vacunas', status: 'Al día (cachorro)' },
      { label: 'Desparasitado', status: 'Sí' },
    ],
    tags: [
      { label: 'Cachorro', variant: 'accent' },
      { label: 'Juguetón', variant: 'default' },
      { label: 'Curioso', variant: 'secondary' }
    ],
    shelter: {
      id: '3',
      name: 'Albergue Municipal de Mixco',
      location: 'Mixco, Guatemala',
      phone: '+502 6666-7777',
    },
    adoptionFee: 'Q300',
  },

  // Animal Aware Guatemala - ID: 4
  {
    id: '6',
    name: 'Zeus',
    breed: 'Rottweiler',
    age: '4 años',
    size: 'Muy Grande (45kg)',
    sizeCategory: 'Grande',
    type: 'Perro',
    temperament: 'Seguro y calmado',
    color: 'Negro y Fuego',
    healthStatus: 'Bueno',
    gender: 'Macho',
    images: [
      '/protective-black-rottweiler-rescue-dog.jpg',
    ],
    story: 'Zeus es un gigante gentil. A pesar de su apariencia imponente, es un perro muy tranquilo que disfruta de paseos relajados. Es muy obediente y respetuoso.',
    personality: [
      'Calmado y seguro',
      'Obediente',
      'Buen guardián',
      'Requiere dueño con experiencia en razas grandes',
    ],
    healthInfo: [
      { label: 'Vacunada', status: 'Completo' },
      { label: 'Castrado', status: 'Sí' },
    ],
    tags: [
      { label: 'Gigante', variant: 'secondary' },
      { label: 'Tranquilo', variant: 'default' },
      { label: 'Protector', variant: 'accent' },
    ],
    shelter: {
      id: '4',
      name: 'Animal Aware Guatemala',
      location: 'Sumpango, Sacatepéquez',
      phone: '+502 8888-9999',
    },
    adoptionFee: 'Q500',
  },
  {
    id: '7',
    name: 'Koda',
    breed: 'Husky Siberiano',
    age: '1.5 años',
    size: 'Mediano (24kg)',
    sizeCategory: 'Mediano',
    type: 'Perro',
    temperament: 'Aventurero y vocal',
    color: 'Gris y Blanco',
    healthStatus: 'Excelente',
    gender: 'Macho',
    images: [
      '/siberian-husky-rescue-dog-adventurous.jpg',
    ],
    story: 'Koda es un espíritu libre. Le encanta correr y "hablar". Necesita mucho ejercicio y un patio seguro (escapista experto). Ideal para gente que hace running o senderismo.',
    personality: [
      'Muy energético',
      'Vocal (aulla)',
      'Independiente pero cariñoso',
      'Necesita mucho ejercicio',
    ],
    healthInfo: [
      { label: 'Vacunada', status: 'Completo' },
      { label: 'Castrado', status: 'Sí' },
      { label: 'Microchip', status: 'Sí' },
    ],
    tags: [
      { label: 'Deportista', variant: 'accent' },
      { label: 'Vocal', variant: 'secondary' },
      { label: 'Hermoso', variant: 'default' },
    ],
    shelter: {
      id: '4',
      name: 'Animal Aware Guatemala',
      location: 'Sumpango, Sacatepéquez',
      phone: '+502 8888-9999',
    },
    adoptionFee: 'Q600',
  },

  // Ayudando Huellitas - ID: 5
  {
    id: '8',
    name: 'Coco',
    breed: 'Poodle Mix',
    age: '3 años',
    size: 'Pequeño (8kg)',
    sizeCategory: 'Pequeño',
    type: 'Perro',
    temperament: 'Elegante y mimada',
    color: 'Blanco',
    healthStatus: 'Excelente',
    gender: 'Hembra',
    images: [
      '/sweet-white-poodle-mix-rescue-dog.jpg',
    ],
    story: 'Coco es una perrita faldera ideal. Le encanta que la cepillen y la mimen. Es perfecta para vivir en apartamento y acompañarte a todos lados.',
    personality: [
      'Cariñosa y apegada',
      'Le gusta el aseo',
      'Ideal para interiores',
      'Sociable',
    ],
    healthInfo: [
      { label: 'Vacunada', status: 'Completo' },
      { label: 'Esterilizada', status: 'Sí' },
    ],
    tags: [
      { label: 'Apartamento', variant: 'accent' },
      { label: 'Hipoalergénico', variant: 'default' },
      { label: 'Faldera', variant: 'secondary' },
    ],
    shelter: {
      id: '5',
      name: 'Ayudando Huellitas',
      location: 'Ciudad de Guatemala',
      phone: '+502 1010-2020',
    },
    adoptionFee: 'Q400',
  },
  {
    id: '9',
    name: 'Pepe',
    breed: 'Chihuahua',
    age: '4 años',
    size: 'Muy Pequeño (3kg)',
    sizeCategory: 'Mini',
    type: 'Perro',
    temperament: 'Alerta y valiente',
    color: 'Café',
    healthStatus: 'Bueno',
    gender: 'Macho',
    images: [
      '/brown-chihuahua-rescue-dog-alert.jpg',
    ],
    story: 'Pepe es pequeño pero tiene una gran personalidad. Es muy leal a su dueño y buen perro de alerta. Prefiere un hogar sin niños pequeños.',
    personality: [
      'Leal a una persona',
      'Territorial y alerta',
      'Cariñoso con sus conocidos',
      'Baja energía',
    ],
    healthInfo: [
      { label: 'Vacunada', status: 'Completo' },
      { label: 'Castrado', status: 'Sí' },
    ],
    tags: [
      { label: 'Mini', variant: 'secondary' },
      { label: 'Guardián', variant: 'default' },
      { label: 'Leal', variant: 'accent' },
    ],
    shelter: {
      id: '5',
      name: 'Ayudando Huellitas',
      location: 'Ciudad de Guatemala',
      phone: '+502 1010-2020',
    },
    adoptionFee: 'Q300',
  },
  {
    id: '10',
    name: 'Lola',
    breed: 'Mestiza',
    age: '4 meses',
    size: 'Pequeño (Cachorro)',
    sizeCategory: 'Pequeño',
    type: 'Perro',
    temperament: 'Juguetona',
    color: 'Marrón y Blanco',
    healthStatus: 'Excelente',
    gender: 'Hembra',
    images: [
      '/rescued-puppy-playing-with-toy.jpg',
    ],
    story: 'Lola fue encontrada solita en una caja. Ahora está segura y buscando un hogar para siempre. Es una cachorrita muy dulce y juguetona.',
    personality: [
      'Juguetona',
      'Cariñosa',
      'Aprende rápido',
      'Sociable',
    ],
    healthInfo: [
      { label: 'Vacunas', status: 'Iniciando esquema' },
      { label: 'Desparasitada', status: 'Sí' },
    ],
    tags: [
      { label: 'Cachorro', variant: 'accent' },
      { label: 'Rescatada', variant: 'default' },
      { label: 'Dulce', variant: 'secondary' },
    ],
    shelter: {
      id: '5',
      name: 'Ayudando Huellitas',
      location: 'Ciudad de Guatemala',
      phone: '+502 1010-2020',
    },
    adoptionFee: 'Q250',
  },
  {
    id: '11',
    name: 'Nala',
    breed: 'Mestiza',
    age: '4 meses',
    size: 'Pequeño (Cachorro)',
    sizeCategory: 'Pequeño',
    type: 'Perro',
    temperament: 'Juguetona',
    color: 'Marrón y Blanco',
    healthStatus: 'Excelente',
    gender: 'Hembra',
    images: [
      '/Dogs/navideno.jpg',
      '/Dogs/navideno.jpg',
    ],
    story: 'Nala fue encontrada solita en una caja. Ahora está segura y buscando un hogar para siempre. Es una cachorrita muy dulce y juguetona.',
    personality: [
      'Muy curioso y olfateador',
      'Juguetón incansable',
      'Sociable con todos',
      'Necesita entrenamiento básico',
    ],
    healthInfo: [
      { label: 'Vacunas', status: 'Al día (cachorro)' },
      { label: 'Desparasitado', status: 'Sí' },
    ],
    tags: [
      { label: 'Cachorro', variant: 'accent' },
      { label: 'Juguetón', variant: 'default' },
      { label: 'Curioso', variant: 'secondary' }
    ],
    shelter: {
      id: '3',
      name: 'Albergue Municipal de Mixco',
      location: 'Mixco, Guatemala',
      phone: '+502 6666-7777',
    },
    adoptionFee: 'Q300',
  }
];

