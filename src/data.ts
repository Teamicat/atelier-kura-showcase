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
    image: "https://images.unsplash.com/photo-1593611664162-f79aa73a14d3?auto=format&fit=crop&q=80&w=800",
    details: "Un couteau polyvalent japonais dont le nom signifie 'trois vertus'. Idéal pour trancher, couper en dés et hacher avec une précision chirurgicale. Forgé dans un acier de haute qualité pour un tranchant durable."
  },
  {
    id: 2,
    name: "Théière Tetsubin",
    description: "L'art du thé dans la pure tradition japonaise.",
    price: "85€",
    image: "https://images.unsplash.com/photo-1580633154195-067a12ed1767?auto=format&fit=crop&q=80&w=800",
    details: "Cette théière en fonte émaillée conserve la chaleur de manière exceptionnelle. Son motif traditionnel et sa patine artisanale en font une pièce maîtresse pour vos moments de sérénité."
  },
  {
    id: 3,
    name: "Planche en Hinoki",
    description: "Le bois sacré du Japon pour vos lames.",
    price: "55€",
    image: "https://images.unsplash.com/photo-1622320703808-142e03290940?auto=format&fit=crop&q=80&w=800",
    details: "Fabriquée en cyprès japonais (Hinoki), cette planche est naturellement antibactérienne. Sa texture souple protège le fil de vos couteaux les plus précieux tout en diffusant un léger parfum boisé."
  },
  {
    id: 4,
    name: "Bol à Riz Wabi-sabi",
    description: "La beauté de l'imperfection artisanale.",
    price: "28€",
    image: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&q=80&w=800",
    details: "Un bol en céramique tourné à la main, arborant un émail irrégulier qui célèbre l'esthétique Wabi-sabi. Chaque pièce est unique, invitant à la contemplation lors de chaque repas."
  },
  {
    id: 5,
    name: "Cuit-Vapeur en Bambou",
    description: "Une cuisson saine et authentique.",
    price: "35€",
    image: "https://images.unsplash.com/photo-1563245339-6b2e4428546a?auto=format&fit=crop&q=80&w=800",
    details: "Le Mushiki traditionnel permet une cuisson à la vapeur douce qui préserve les nutriments et les saveurs délicates des aliments. Tissé à la main pour une durabilité et une esthétique naturelle."
  }
];
