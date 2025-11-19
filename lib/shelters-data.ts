export interface ShelterNeed {
    icon: 'food' | 'medicine' | 'blankets' | 'volunteers';
    label: string;
    urgent?: boolean;
}

export interface Shelter {
    id: string;
    name: string;
    location: string;
    phone?: string;
    email?: string;
    description: string;
    mission?: string;
    image: string;
    bannerImage?: string;
    needs: ShelterNeed[];
    dogsCount: number;
    totalRescued?: number;
    adoptionRate?: number;
    availableDogs?: number;
}

export const shelters: Shelter[] = [
    {
        id: '1',
        name: 'Asociación Amigos de los Animales (AMA)',
        location: 'Ciudad de Guatemala',
        phone: '+502 2222-3333',
        email: 'info@ama.org.gt',
        description: 'La organización se dedica a ayudar a mejorar la calidad de vida de los animales en Guatemala sin importar su estado, procedencia o apariencia.',
        mission: 'Nuestra misión es erradicar el maltrato animal y fomentar una cultura de respeto y amor hacia todos los seres vivos.',
        image: '/Refugios/AMA.png',
        bannerImage: '/Refugios/AMA.png',
        needs: [
            { icon: 'food', label: 'Alimento', urgent: true },
            { icon: 'medicine', label: 'Medicina', urgent: true },
            { icon: 'volunteers', label: 'Voluntarios', urgent: false },
        ],
        dogsCount: 45,
        totalRescued: 1200,
        adoptionRate: 92,
        availableDogs: 45,
    },
    {
        id: '2',
        name: 'Asociación Guatemalteca Mano Amiga',
        location: 'Ciudad de Guatemala',
        phone: '+502 4444-5555',
        email: 'contacto@manoamiga.gt',
        description: 'Esta asociación busca darle un hogar a los animales que están en calidad de abandono, ofreciéndoles cuidados veterinarios y afectividad, para luego darlos en adopción a familias.',
        mission: 'Brindar una segunda oportunidad a animales abandonados, rehabilitándolos física y emocionalmente para su reinserción en familias amorosas.',
        image: '/Refugios/ManoAmiga.png',
        bannerImage: '/Refugios/ManoAmiga.png',
        needs: [
            { icon: 'food', label: 'Alimento', urgent: true },
            { icon: 'blankets', label: 'Cobijas', urgent: false },
        ],
        dogsCount: 32,
        totalRescued: 850,
        adoptionRate: 88,
        availableDogs: 32,
    },
    {
        id: '3',
        name: 'Albergue Municipal de Mixco',
        location: 'Mixco, Guatemala',
        phone: '+502 6666-7777',
        email: 'albergue@munimixco.gob.gt',
        description: 'Este refugio para perros es parte de los proyectos comunitarios de la municipalidad de Mixco. El albergue rescata perritos de la calle y les brinda la atención veterinaria que necesiten.',
        mission: 'Controlar la sobrepoblación canina mediante la esterilización y promover la adopción responsable en el municipio de Mixco.',
        image: '/Refugios/AlbergueMunicipal.png',
        bannerImage: '/Refugios/AlbergueMunicipal.png',
        needs: [
            { icon: 'medicine', label: 'Medicina', urgent: true },
            { icon: 'blankets', label: 'Cobijas', urgent: true },
            { icon: 'volunteers', label: 'Voluntarios', urgent: true },
        ],
        dogsCount: 28,
        totalRescued: 400,
        adoptionRate: 75,
        availableDogs: 28,
    },
    {
        id: '4',
        name: 'Animal Aware Guatemala',
        location: 'Sumpango, Sacatepéquez',
        phone: '+502 8888-9999',
        email: 'info@animalaware.org',
        description: 'Esta organización sin fines de lucro opera en el sector de Sumpango, Sacatepéquez. Desde 1998 se dedican al rescate de animales maltratados y agredidos.',
        mission: 'Proporcionar refugio, atención médica y amor a los animales necesitados, mientras educamos a la comunidad sobre el bienestar animal.',
        image: '/Refugios/AnimalAware.png',
        bannerImage: '/Refugios/AnimalAware.png',
        needs: [
            { icon: 'food', label: 'Alimento', urgent: true },
            { icon: 'medicine', label: 'Medicina', urgent: true },
        ],
        dogsCount: 18,
        totalRescued: 3000,
        adoptionRate: 95,
        availableDogs: 18,
    },
    {
        id: '5',
        name: 'Ayudando Huellitas',
        location: 'Ciudad de Guatemala',
        phone: '+502 1010-2020',
        email: 'hola@ayudandohuellitas.gt',
        description: 'Son un grupo benéfico enfocado en el rescate de peludos maltratados en la calle. Están ubicados sobre la calzada Roosevelt a la altura del Centro Comercial Eskala.',
        mission: 'Rescatar, rehabilitar y reubicar perros en situación de calle, promoviendo la esterilización como método ético de control poblacional.',
        image: '/Refugios/AyudandoHuellitas.png',
        bannerImage: '/Refugios/AyudandoHuellitas.png',
        needs: [
            { icon: 'volunteers', label: 'Voluntarios', urgent: true },
            { icon: 'blankets', label: 'Cobijas', urgent: false },
        ],
        dogsCount: 15,
        totalRescued: 150,
        adoptionRate: 80,
        availableDogs: 15,
    },
];
