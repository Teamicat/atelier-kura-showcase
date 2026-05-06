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
    name: "Cocotte en Fonte",
    description: "L'art de la cuisson lente et homogène.",
    price: "180€",
    image: "https://images.unsplash.com/photo-1584990344321-2766350c2399?auto=format&fit=crop&q=80&w=800",
    details: "Une cocotte en fonte émaillée robuste, idéale pour les ragoûts et les cuissons longues. Son design intemporel passe directement de la cuisine à la table."
  },
  {
    id: 2,
    name: "Spatule en Bois",
    description: "Douceur et précision pour vos poêles.",
    price: "15€",
    image: "https://images.unsplash.com/photo-1594793012214-e5788d929497?auto=format&fit=crop&q=80&w=800",
    details: "Fabriquée artisanalement en bois de hêtre, cette spatule respecte les surfaces antiadhésives tout en offrant une prise en main chaleureuse."
  },
  {
    id: 3,
    name: "Planche à Découper en Bois",
    description: "Un billot naturel et résistant.",
    price: "45€",
    image: "https://images.unsplash.com/photo-1594794112450-b50a2569ef5c?auto=format&fit=crop&q=80&w=800",
    details: "Une planche épaisse en bois de chêne, traitée aux huiles naturelles. Sa surface auto-cicatrisante protège le tranchant de vos couteaux."
  },
  {
    id: 4,
    name: "Porte-Couteaux Magnétique",
    description: "L'élégance de l'acier pour vos lames.",
    price: "60€",
    image: "https://images.unsplash.com/photo-1613274330681-6f067468646b?auto=format&fit=crop&q=80&w=800",
    details: "Un support minimaliste qui maintient vos couteaux en sécurité et à portée de main. Un gain de place esthétique pour toute cuisine moderne."
  }
];
