export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  rating: number;
  img: string[];
  link: string;
  indexOfImage: number;
  categoryId: number;
  likes: number;
  liked: boolean;
}

export const products = [
  {
    id: 1,
    name: 'Книга Достоевский Ф. М.: Преступление и наказание',
    price: 1292,
    description: '    -ISBN: 9785170906307' +
        '-Язык издания: русский\n' +
        '    -Переплет: мягкий переплет\n' +
        '    -Жанр: русская классика',
    rating: 9.9,
    img: ['https://resources.cdn-kaspi.kz/img/m/p/h38/h4b/64342519021598.jpg?format=gallery-large', 'https://resources.cdn-kaspi.kz/img/m/p/h57/h13/64342522691614.jpg?format=gallery-large'],
    link: 'https://kaspi.kz/shop/p/dostoevskii-f-m-prestuplenie-i-nakazanie-101475338/?c=750000000',
    indexOfImage: 0,
    categoryId:1,
    likes: 0,
    liked: false,
  },
  {
    id: 2,
    name: 'Книга Достоевский Ф. М.: Белые ночи',
    price: 1050,
    description: '    ISBN: 9785171065751\n' +
        '    Язык издания: русский\n' +
        '    Переплет: мягкий переплет\n' +
        '    Жанр: русская классика',
    rating: 8.9,
    img: ['https://resources.cdn-kaspi.kz/img/m/p/ha0/hf1/64342382641182.jpg?format=gallery-large', 'https://resources.cdn-kaspi.kz/img/m/p/hee/h08/64342385328158.jpg?format=gallery-large'],
    link: 'https://kaspi.kz/shop/p/dostoevskii-f-m-belye-nochi-101542854/?c=750000000',
    indexOfImage: 0,
    categoryId:1,
    likes: 0,
    liked: false,
  },
  {
    id: 3,
    name: 'Книга Достоевский Ф.М.: Идиот',
    price: 1080,
    description: '    ISBN: 9785171464844\n' +
        '    Возраст: 12+\n' +
        '    Язык издания: русский\n' +
        '    Переплет: мягкий переплет\n' +
        '    Жанр: русская классика',
    rating: 8.9,
    img: ['https://resources.cdn-kaspi.kz/img/m/p/hba/hf2/64366163820574.jpg?format=gallery-large', 'https://resources.cdn-kaspi.kz/img/m/p/h73/hb3/64366166442014.jpg?format=gallery-large'],
    link: 'https://kaspi.kz/shop/p/dostoevskii-f-m-idiot-103455708/?c=750000000',
    indexOfImage: 0,
    categoryId:1,
    likes: 0,
    liked: false,
  },
  {
    id: 4,
    name: 'Книга Достоевский Ф. М.: Братья Карамазовы',
    price: 1120,
    description: '    ISBN: 9785389066571\n' +
        '    Язык издания: русский\n' +
        '    Переплет: твердый переплет\n' +
        '    Жанр: русская классика',
    rating: 8.9,
    img: ['https://resources.cdn-kaspi.kz/img/m/p/h38/hfb/63895561797662.jpg?format=gallery-large', 'https://resources.cdn-kaspi.kz/img/m/p/hc0/h72/63895597383710.jpg?format=gallery-large'],
    link: 'https://kaspi.kz/shop/p/dostoevskii-f-m-brat-ja-karamazovy-100299037/?c=750000000',
    indexOfImage: 0,
    categoryId:1,
    likes: 0,
    liked: false,
  },
  {
    id: 5,
    name: 'Книга Достоевский Ф. М.: Бесы',
    price: 1124,
    description: '    ISBN: 9785171384777\n' +
        '    Возраст: 12+\n' +
        '    Язык издания: русский\n' +
        '    Переплет: мягкий переплет\n' +
        '    Жанр: русская классика',
    rating: 8.9,
    img: ['https://resources.cdn-kaspi.kz/img/m/p/h7c/hec/63914644439070.jpg?format=gallery-large', 'https://resources.cdn-kaspi.kz/img/m/p/hd6/h13/63914647388190.jpg?format=gallery-large'],
    link: 'https://kaspi.kz/shop/p/dostoevskii-f-m-besy-102161288/?c=750000000',
    indexOfImage: 0,
    categoryId:1,
    likes: 0,
    liked: false,
  },
  {
    id: 6,
    name: 'Книга Достоевский Ф. М.: Униженные и оскорбленные',
    price: 1050,
    description: '    ISBN: 9785170937257\n' +
        '    Язык издания: русский\n' +
        '    Переплет: мягкий переплет\n' +
        '    Жанр: русская классика',
    rating: 8.9,
    img: ['https://resources.cdn-kaspi.kz/img/m/p/h45/he3/64076432506910.jpg?format=gallery-large', 'https://resources.cdn-kaspi.kz/img/m/p/h21/h02/64076435226654.jpg?format=gallery-large'],
    link: 'https://kaspi.kz/shop/p/dostoevskii-f-m-unizhennye-i-oskorblennye-101475245/?c=750000000',
    indexOfImage: 0,
    categoryId:1,
    likes: 0,
    liked: false,
  },
  {
    id: 7,
    name: 'Книга Достоевский Ф.М.: Идиот',
    price: 1750,
    description: '    ISBN: 9785041166779\n' +
        '    Язык издания: русский\n' +
        '    Переплет: твердый переплет\n' +
        '    Жанр: русская классика',
    rating: 8.9,
    img: ['https://resources.cdn-kaspi.kz/img/m/p/h9c/h6d/64328533409822.jpg?format=gallery-large', 'https://resources.cdn-kaspi.kz/img/m/p/h01/h0f/64328535605278.jpg?format=gallery-large', 'https://resources.cdn-kaspi.kz/img/m/p/h39/hac/64328538357790.jpg?format=gallery-large'],
    link: 'https://kaspi.kz/shop/p/dostoevskii-f-m-idiot-101756378/?c=750000000',
    indexOfImage: 0,
    categoryId:1,
    likes: 0,
    liked: false,
  },
  {
    id: 8,
    name: 'Смартфон Apple iPhone 13 128Gb белый',
    price: 288874,
    description: '    Технология NFC: Да\n' +
        '    Цвет: белый\n' +
        '    Тип экрана: OLED, Super Retina XDR\n' +
        '    Диагональ: 6.1 дюйм\n' +
        '    Размер оперативной памяти: 4 ГБ\n' +
        '    Процессор: 6-ядерный Apple A15 Bionic\n' +
        '    Объем встроенной памяти: 128.0 ГБ\n' +
        '    Емкость аккумулятора: 3095.0 мАч',
    rating: 8.9,
    img: ['https://resources.cdn-kaspi.kz/img/m/p/hc9/h90/64209083007006.jpg?format=gallery-large', 'https://resources.cdn-kaspi.kz/img/m/p/h3b/h93/64209085235230.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h8f/hce/64209121476638.jpg?format=gallery-large', 'https://resources.cdn-kaspi.kz/img/m/p/h4b/h84/64209123573790.jpg?format=gallery-large','https://resources.cdn-kaspi.kz/img/m/p/h4b/h84/64209123573790.jpg?format=gallery-large', 'https://resources.cdn-kaspi.kz/img/m/p/hba/hc4/64209127243806.jpg?format=gallery-large' ],
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-belyi-102298420/?c=750000000',
    indexOfImage: 0,
    categoryId:2,
    likes: 0,
    liked: false,
  },
  {
    id: 9,
    name: 'Wi-Fi роутер Xiaomi Mi Wi-Fi Router 4A Gigabit Edition',
    price: 24990,
    description: '    Тип: Wi-Fi роутер\n' +
        '    Максимальная скорость беспроводного соединения: 1167.0 Мбит/с\n' +
        '    Стандарты Wi-Fi: Wi-Fi 4 (802.11n), ,Wi-Fi 5 (802.11ac)\n' +
        '    Количество LAN портов: 2\n' +
        '    Диапазоны частот: 2.4 ГГц, ,5 ГГц',
    rating: 8.9,
    img: ['https://resources.cdn-kaspi.kz/img/m/p/h9e/ha1/63832974196766.jpg?format=gallery-large', 'https://resources.cdn-kaspi.kz/img/m/p/hd4/h0a/63832977145886.jpg?format=gallery-large', 'https://resources.cdn-kaspi.kz/img/m/p/hd3/h05/63832980422686.jpg?format=gallery-large', 'https://resources.cdn-kaspi.kz/img/m/p/h65/hec/85091164356638.jpg?format=gallery-large', 'https://resources.cdn-kaspi.kz/img/m/p/hc0/h3f/85091164422174.jpg?format=gallery-large'],
    link: 'https://kaspi.kz/shop/p/wi-fi-router-xiaomi-mi-wi-fi-router-4a-gigabit-edition-100044713/?c=750000000',
    indexOfImage: 0,
    categoryId:3,
    likes: 0,
    liked: false,
  },
  {
    id: 10,
    name: 'МФУ Epson EcoTank L3250',
    price: 113031,
    description: '    Устройство: МФУ\n' +
        '    Тип печати: цветная\n' +
        '    Технология печати: пьезоэлектрическая струйная\n' +
        '    Максимальный формат: A4\n' +
        '    Максимальное разрешение для ч/б печати: 5760x1440 dpi\n' +
        '    Максимальное разрешение для цветной печати: 5760x1440 dpi',
    rating: 8.9,
    img: ['https://resources.cdn-kaspi.kz/img/m/p/ha6/hf3/66594300821534.jpg?format=gallery-large', 'https://resources.cdn-kaspi.kz/img/m/p/h69/h7d/66594301870110.jpg?format=gallery-large', 'https://resources.cdn-kaspi.kz/img/m/p/h5d/h67/66594499002398.jpg?format=gallery-large', 'https://resources.cdn-kaspi.kz/img/m/p/h19/hbc/66594499526686.jpg?format=gallery-medium'],
    link: 'https://kaspi.kz/shop/p/mfu-epson-ecotank-l3250-107929066/?c=750000000',
    indexOfImage: 0,
    categoryId:4,
    likes: 0,
    liked: false,
  },
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/