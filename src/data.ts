import type { Product } from './types';

export type { Product };

export const products: Product[] = [
  {
    id: 1,
    name: "Couteau Santoku",
    description: "La précision japonaise à portée de main.",
    price: "120€",
    image: "https://images.unsplash.com/photo-1566454419290-57a64afe30ac?auto=format&fit=crop&w=800&q=80",
    details: "Forgé en acier inoxydable japonais, ce couteau polyvalent excelle dans la découpe des légumes, viandes et poissons."
  },
  {
    id: 2,
    name: "Théière Tetsubin",
    description: "L'art du thé dans toute sa splendeur.",
    price: "85€",
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=80",
    details: "Théière en fonte traditionnelle, conserve la chaleur longtemps et enrichit le goût du thé."
  },
  {
    id: 3,
    name: "Planche en Hinoki",
    description: "Le bois sacré de la cuisine japonaise.",
    price: "55€",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    details: "Planche à découper en cyprès hinoki, naturellement antibactérienne et douce pour les lames."
  },
  {
    id: 4,
    name: "Bol en Céramique",
    description: "Élégance minimaliste pour chaque repas.",
    price: "35€",
    image: "https://images.unsplash.com/photo-1519984388953-d2406bc725e1?auto=format&fit=crop&w=800&q=80",
    details: "Bol artisanal en céramique émaillée, fabriqué à la main dans un atelier de Kyoto."
  },
  {
    id: 5,
    name: "Casserole en Fonte",
    description: "La cuisson lente pour des saveurs profondes.",
    price: "180€",
    image: "https://images.unsplash.com/photo-1585515320310-259814833e62?auto=format&fit=crop&w=800&q=80",
    details: "Casserole en fonte émaillée, idéale pour les mijotés et les soupes japonaises comme le ramen."
  }
];
