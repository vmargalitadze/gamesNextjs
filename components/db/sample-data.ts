
const sampleData = {
  products: [
    {
      name: 'God of War (2018)',
      slug: 'god-of-war-2018',
      category: 'Action-Adventure',
      description:
        'An epic action-adventure game following Kratos and his son Atreus on a journey through Norse mythology.',
      images: [
        '/images/sample-products/god-of-war-1.jpg',
        '/images/sample-products/god-of-war-2.jpg',
      ],
      developer: 'Santa Monica Studio',
      publisher: 'Sony Interactive Entertainment',
      genre: "Action",
      platform: "Playstation",
      price: 49.99,
      rating: 4.9,
      numReviews: 15000,
      isFeatured: true,
      releaseDate: new Date('2018-04-20'),
    },
    {
      name: 'The Legend of Zelda: Breath of the Wild',
      slug: 'legend-of-zelda-breath-of-the-wild',
      category: 'Action-Adventure',
      description:
        'Explore a vast open world filled with puzzles, dungeons, and mysteries in this critically acclaimed adventure.',
      images: [
        '/images/sample-products/zelda-1.jpg',
        '/images/sample-products/zelda-2.jpg',
      ],
      developer: 'Nintendo',
      publisher: 'Nintendo',
      genre: "Action",
      platform: "Nintendo",
      price: 59.99,
      rating: 4.8,
      numReviews: 20000,
      isFeatured: true,
      releaseDate: new Date('2017-03-03'),
    },
    {
      name: 'Elden Ring',
      slug: 'elden-ring',
      category: 'RPG',
      description:
        'An expansive dark fantasy RPG crafted by FromSoftware and George R.R. Martin.',
      images: [
        '/images/sample-products/elden-ring-1.jpg',
        '/images/sample-products/elden-ring-2.jpg',
      ],
      developer: 'FromSoftware',
      publisher: 'Bandai Namco Entertainment',
      genre: "Souls Like",
      platform: "PC",
      price: 59.99,
      rating: 4.7,
      numReviews: 25000,
      isFeatured: true,
      releaseDate: new Date('2022-02-25'),
    },
  ],
};

export default sampleData;
