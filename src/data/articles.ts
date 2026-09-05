export interface Article {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: {
    name: string;
    avatar: string;
    bio: string;
  };
  content: {
    introduction: string;
    sections: {
      heading: string;
      content: string;
    }[];
    conclusion: string;
  };
  tags: string[];
}

export const articles: Article[] = [
  {
    id: "01",
    title: "Gestión de prensa y vocería, construcción de reputación y presencia en medios clave",
    subtitle: "Posicionamiento estratégico en medios",
    category: "Relaciones Públicas y Medios",
    date: "2025",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1920&q=80",
    author: {
      name: "Híper&Com",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80",
      bio: "Expertos en relaciones públicas",
    },
    content: {
      introduction: "Gestión integral de relaciones con medios de comunicación para posicionar tu marca.",
      sections: [
        {
          heading: "Gestión de prensa",
          content: "Desarrollamos estrategias de comunicación con medios clave.",
        },
      ],
      conclusion: "Construimos tu reputación con presencia mediática estratégica.",
    },
    tags: ["relaciones públicas", "medios", "reputación"],
  },
  {
    id: "02",
    title: "Mensajes clave, narrativa institucional, storytelling y estrategias para lanzamientos",
    subtitle: "Comunicación que conecta",
    category: "Comunicación Estratégica",
    date: "2025",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&q=80",
    author: {
      name: "Híper&Com",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80",
      bio: "Expertos en comunicación estratégica",
    },
    content: {
      introduction: "Construimos narrativas que resuenan con tu audiencia.",
      sections: [
        {
          heading: "Storytelling",
          content: "Creamos historias que conectan con tu público objetivo.",
        },
      ],
      conclusion: "Tu mensaje, amplificado con estrategia.",
    },
    tags: ["comunicación", "storytelling", "lanzamientos"],
  },
  {
    id: "03",
    title: "Vinculación institucional, sinergias estratégicas y proyectos de impacto social y ambiental",
    subtitle: "Conexiones que transforman",
    category: "Alianzas Institucionales",
    date: "2025",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80",
    author: {
      name: "Híper&Com",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80",
      bio: "Expertos en alianzas institucionales",
    },
    content: {
      introduction: "Conectamos tu marca con instituciones y sector privado.",
      sections: [
        {
          heading: "Sinergias estratégicas",
          content: "Desarrollamos alianzas de alto impacto.",
        },
      ],
      conclusion: "Proyectos que generan valor social y ambiental.",
    },
    tags: ["alianzas", "instituciones", "impacto social"],
  },
  {
    id: "04",
    title: "Campañas alineadas a reputación, activaciones de marca y gestión digital estratégica",
    subtitle: "Marketing con propósito",
    category: "Marketing & Activaciones",
    date: "2025",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=1920&q=80",
    author: {
      name: "Híper&Com",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80",
      bio: "Expertos en marketing estratégico",
    },
    content: {
      introduction: "Campañas que fortalecen tu reputación de marca.",
      sections: [
        {
          heading: "Activaciones de marca",
          content: "Creamos experiencias memorables para tu audiencia.",
        },
      ],
      conclusion: "Gestión digital que impulsa resultados.",
    },
    tags: ["marketing", "activaciones", "digital"],
  },
];

export const getArticleById = (id: string): Article | undefined => {
  return articles.find((article) => article.id === id);
};

export const getRelatedArticles = (currentId: string, limit: number = 3): Article[] => {
  return articles.filter((article) => article.id !== currentId).slice(0, limit);
};
