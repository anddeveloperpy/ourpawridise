
export interface Author {
  name: string;
  avatar: string;
  type: 'user' | 'shelter';
}

export interface Post {
  id: string;
  author: Author;
  image?: string;
  caption: string;
  likes: number;
  comments: number;
  timeAgo: string;
  isLiked?: boolean;
}

export const communityPosts: Post[] = [
  {
    id: '1',
    author: {
      name: 'María González',
      avatar: '/placeholder.svg?key=user1',
      type: 'user',
    },
    image: '/person-hugging-adopted-dog.jpg',
    caption: 'Hoy cumple 1 año desde que adopté a Max del Refugio Esperanza Canina. Ha sido el mejor año de mi vida. Gracias por darme la oportunidad de ser su mamá. ❤️ #AdoptaNoCompres',
    likes: 234,
    comments: 42,
    timeAgo: 'Hace 2 horas',
    isLiked: false,
  },
  {
    id: '2',
    author: {
      name: 'Asociación Amigos de los Animales (AMA)',
      avatar: '/Refugios/AMA.png',
      type: 'shelter',
    },
    image: '/rescued-puppy-playing-with-toy.jpg',
    caption: 'Conoce a estos angelitos que fueron rescatados esta semana. Están buscando hogar temporal mientras se recuperan. Si puedes ayudar, contáctanos. 🐾',
    likes: 189,
    comments: 56,
    timeAgo: 'Hace 5 horas',
    isLiked: true,
  },
  {
    id: '3',
    author: {
      name: 'Carlos Ramírez',
      avatar: '/placeholder.svg?key=user2',
      type: 'user',
    },
    image: '/happy-rescued-golden-retriever-dog-smiling-outdoor.jpg',
    caption: 'Luna disfrutando su primer día en el parque. No puedo creer que alguien la abandonó. Es la perrita más amorosa del mundo. 🌳🐕',
    likes: 412,
    comments: 78,
    timeAgo: 'Hace 1 día',
    isLiked: false,
  },
  {
    id: '4',
    author: {
      name: 'Patitas Felices GT',
      avatar: '/Refugios/AyudandoHuellitas.png',
      type: 'shelter',
    },
    image: '/Shows/Show1.JPG',
    caption: 'Gracias a todos los que nos apoyaron en la campaña de alimento. Logramos recolectar 500kg de comida para nuestros perritos. Esta comunidad es increíble. 💙',
    likes: 567,
    comments: 93,
    timeAgo: 'Hace 1 día',
    isLiked: true,
  },
  {
    id: '5',
    author: {
      name: 'Ana Sofía López',
      avatar: '/placeholder.svg?key=user3',
      type: 'user',
    },
    image: '/gentle-golden-retriever-senior-rescue-dog.jpg',
    caption: 'Mi hijo y Rocky son mejores amigos. Adoptar fue la mejor decisión que tomamos como familia. Gracias por esta bendición. 🙏',
    likes: 298,
    comments: 34,
    timeAgo: 'Hace 2 días',
    isLiked: false,
  },
  {
    id: '6',
    author: {
      name: 'Amor Sin Fronteras',
      avatar: '/Refugios/ManoAmiga.png',
      type: 'shelter',
    },
    image: '/loving-gray-pitbull-rescue-dog.jpg',
    caption: '¡Bella encontró su hogar para siempre! Después de 6 meses en el refugio, finalmente tiene una familia que la ama. Momentos como este hacen que todo valga la pena. 🏡❤️',
    likes: 823,
    comments: 127,
    timeAgo: 'Hace 3 días',
    isLiked: true,
  },
  {
    id: '7',
    author: {
      name: 'Luis Hernández',
      avatar: '/placeholder.svg?key=user4',
      type: 'user',
    },
    image: '/playful-beagle-puppy-rescue-dog.jpg',
    caption: 'Toby aprendiendo nuevos trucos. ¡Es súper inteligente! ¿Alguien tiene tips para enseñarles a dar la patita? 🐶✨',
    likes: 156,
    comments: 23,
    timeAgo: 'Hace 4 días',
    isLiked: false,
  }
];

