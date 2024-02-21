export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  rating: string;
  link: string;
}

export const products = [
  {
    id: 1,
    name: 'iPhone 13',
    price: 1000,
    description: 'Apples iPhone 13 features a 6.1-inch Super Retina XDR display that features.' +
      ' an incredibly high pixel density that makes photos, videos,' +
      ' and text look strikingly sharp. And thanks to the reduced area of the TrueDepth camera, there\'s now more room for the image on the display.',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
    rating: '5',
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-midnight-chernyi-102298404/?c=750000000'
  },
  {
    id: 2,
    name: 'Xiaomi Redmi 12',
    price: 170,
    description: 'nFC Technology: No\n' +
      'color: Black' +
      ' screen Type: IPS, Touch\n' +
      'diagonal: 6.79 inches',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h75/hbc/81335343775774.png?format=gallery-medium',
    rating: '3.5',
    link: 'https://kaspi.kz/shop/p/xiaomi-redmi-12-4g-8-gb-256-gb-chernyi-110918152/?c=750000000'
  },
  {
    id: 3,
    name: 'Samsung Galaxy A24',
    price: 199,
    description: '- NFC Technology: Yes\n' +
      'color: Black\n' +
      'screen Type: Super AMOLED, Touch\n' +
      'diagonal: 6.5 in\n' +
      'rAM size: 6 GB',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hdc/h12/80750151303198.jpg?format=gallery-medium',
    rating: '4.8',
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-a24-6-gb-128-gb-chernyi-110343531/?c=750000000'
  },
  {
    id: 4,
    name: 'Samsung Galaxy S23 Ultra',
    price: 700,
    description: 'The Samsung Galaxy S23 Ultra is powered by Snapdragon 8 Gen 2 for Galaxy, the fastest Snapdragon ever. It features an accelerated Qualcomm® Kryo™ CPU with up to 3.36GHz peak speeds, providing superior performance when you need it most.',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hb0/hf3/69635680239646.jpg?format=preview-large',
    rating: '4.9',
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-s23-ultra-12-gb-256-gb-chernyi-109174566/?c=750000000'
  },
  {
    id: 5,
    name: 'Samsung Galaxy A54',
    price: 450,
    description: 'NFC Technology: Yes\n' +
      'color: Black\n' +
      'screen Type: Super AMOLED, Touch\n' +
      'diagonal: 6.4 inches',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hc4/h8b/80435552223262.jpg?format=gallery-medium',
    rating: '3',
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-a54-5g-6-gb-128-gb-chernyi-110044409/?c=750000000'
  },
  {
    id: 6,
    name: 'iPhone 15 Pro Max',
    price: 1499,
    description: 'The Apple iPhone 15 Pro Max is a heavy-duty flagship made of titanium. The latest Apple A17 Pro chip is responsible for the uncompromising performance of the smartphone.',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hc1/h65/83559848181790.png?format=gallery-medium',
    rating: '5',
    link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-seryi-113138420/?c=750000000'
  },
  {
    id: 7,
    name: 'Samsung Galaxy S23',
    price: 699,
    description: 'The Samsung Galaxy S23 specs are top-notch including a Snapdragon 8 Gen 2 chipset, 8GB RAM coupled with 128/256GB storage, and a 3900mAh battery.' +
      ' The phone sports a 6.1-inch Dynamic AMOLED display with an adaptive 120Hz refresh rate',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h9b/h20/69065028435998.jpg?format=preview-large',
    rating: '3.9',
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-s23-5g-8-gb-256-gb-zelenyi-108915923/?c=750000000'
  },
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
