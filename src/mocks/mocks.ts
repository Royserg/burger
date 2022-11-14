export const placePhotoUrls = [
  'https://i.pinimg.com/originals/fd/82/2e/fd822e7d6f97325dfd137e875a70a776.png',
  'https://images.bonnier.cloud/files/cos/production/2021/08/09105143/burgersiteteaser.jpg',
  'https://www.mydinners.dk/wp-content/uploads/2022/09/burger-koebenhavn-1.jpg',
];

export interface MockPlaceMenu {
  id: string;
  name: string;
  price: string;
  description: string;
}

export const placeMenu: MockPlaceMenu[] = [
  {
    id: 'iaowjerebs',
    name: 'Crispy Cheeseburger',
    price: '90dkk',
    description: 'Organic meat with crispy ingredients.',
  },
  {
    id: 'iasadi120wjerebs',
    name: 'American Burger',
    price: '75dkk',
    description: 'Organic meat with crispy ingredients.',
  },
  {
    id: 'zz92ns=s;1kmd-9',
    name: 'Vegetarian Burger',
    price: '80dkk',
    description: 'Vegetarian option - fresh mushrooms, tomatoes and lettuce',
  },
];
