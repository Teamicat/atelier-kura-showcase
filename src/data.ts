export interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  details: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Couteau Santoku",
    description: "L'équilibre parfait pour la découpe quotidienne.",
    price: "120€",
    image: "https://images.unsplash.com/photo-1593618998160-e34014e67546?w=800",
    details: "Un couteau polyvalent japonais dont le nom signifie 'trois vertus'. Idéal pour trancher, couper en dés et hacher avec une précision chirurgicale. Forgé dans un acier de haute qualité pour un tranchant durable."
  },
  {
    id: 2,
    name: "Théière Tetsubin",
    description: "L'art du thé dans la pure tradition japonaise.",
    price: "85€",
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800",
    details: "Cette théière en fonte émaillée conserve la chaleur de manière exceptionnelle. Son motif traditionnel et sa patine artisanale en font une pièce maîtresse pour vos moments de sérénité."
  },
  {
    id: 3,
    name: "Planche en Hinoki",
    description: "Le bois sacré du Japon pour vos lames.",
    price: "55€",
    image: "https://images.unsplash.com/photo-1544233726-9f1d2b27be8b?w=800",
    details: "Fabriquée en cyprès japonais (Hinoki), cette planche est naturellement antibactérienne. Sa texture souple protège le fil de vos couteaux les plus précieux tout en diffusant un léger parfum boisé."
  },
  {
    id: 4,
    name: "Bol en Céramique",
    description: "La beauté de l'imperfection artisanale.",
    price: "35€",
    image: "https://images.unsplash.com/photo-1610701596061-2ecf227e85b2?w=800",
    details: "Un bol en céramique tourné à la main, arborant un émail irrégulier qui célèbre l'esthétique Wabi-sabi. Chaque pièce est unique, invitant à la contemplation lors de chaque repas."
  },
  {
    id: 5,
    name: "Casserole en Fonte",
    description: "Une cuisson saine et authentique.",
    price: "180€",
    image: "https://images.unsplash.com/photo-1585515320310-259814833e62?w=800",
    details: "Une casserole en fonte robuste pour une diffusion de chaleur homogène. Parfaite pour les mijotés et les cuissons traditionnelles, alliant durabilité et design minimaliste."
  }
];
