import type { Product } from './types';

export type { Product };

export const products: Product[] = [
  {
    id: 1,
    name: "Couteau Santoku",
    description: "La précision japonaise à portée de main.",
    price: "120€",
    image: "https://images.unsplash.com/photo-1593618998160-e34014e67546?auto=format&fit=crop&w=800&q=80",
    details: "Forgé en acier inoxydable japonais, ce couteau polyvalent excelle dans la découpe des légumes, viandes et poissons."
  },
  {
    id: 2,
    name: "Théière Tetsubin",
    description: "L'art du thé dans toute sa splendeur.",
    price: "85€",
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
    details: "Théière en fonte traditionnelle, conserve la chaleur longtemps et enrichit le goût du thé."
  },
  {
    id: 3,
    name: "Planche en Hinoki",
    description: "Le bois sacré de la cuisine japonaise.",
    price: "55€",
    image: "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?auto=format&fit=crop&w=800&q=80",
    details: "Planche à découper en cyprès hinoki, naturally antibactérienne et douce pour les lames."
  },
  {
    id: 4,
    name: "Bol en Céramique",
    description: "Élégance minimaliste pour chaque repas.",
    price: "35€",
    image: "https://images.unsplash.com/photo-1610701596061-2ecf227e85b2?auto=format&fit=crop&w=800&q=80",
    details: "Bol artisanal en céramique émaillée, fabriqué à la main dans un atelier de Kyoto."
  },
  {
    id: 5,
    name: "Casserole en Fonte",
    description: "La cuisson lente pour des saveurs profondes.",
    price: "180€",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80",
    details: "Casserole en fonte émaillée, idéale pour les mijotés et les soupes japonaises comme le ramen."
  }
];
