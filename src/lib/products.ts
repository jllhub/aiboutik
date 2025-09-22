export type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
};

export const products: Product[] = [
  {
    id: 1,
    name: 'T-shirt en coton',
    price: 2500,
    category: 'Vêtements',
    image: 'https://via.placeholder.com/150/FFFFFF/000000?text=T-shirt',
  },
  {
    id: 2,
    name: 'Jean Slim',
    price: 4500,
    category: 'Vêtements',
    image: 'https://via.placeholder.com/150/FFFFFF/000000?text=Jean',
  },
  {
    id: 3,
    name: 'Baskets de course',
    price: 6000,
    category: 'Chaussures',
    image: 'https://via.placeholder.com/150/FFFFFF/000000?text=Baskets',
  },
  {
    id: 4,
    name: 'Montre intelligente',
    price: 15000,
    category: 'Accessoires',
    image: 'https://via.placeholder.com/150/FFFFFF/000000?text=Montre',
  },
  {
    id: 5,
    name: 'Sac à dos en cuir',
    price: 7500,
    category: 'Accessoires',
    image: 'https://via.placeholder.com/150/FFFFFF/000000?text=Sac+a+dos',
  },
];

export const getProducts = (): Product[] => {
  return products;
};
