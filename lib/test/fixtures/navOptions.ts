export const getNavOptions = () => [
  {
    __typename: 'NavOption',
    order: 1,
    name: 'Featured',
    href: null,
    options: [
      {
        __typename: 'NavCategory',
        order: 1,
        name: 'New Arrivals',
        href: '/search?cat=new',
        imageSrc:
          'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
        imageAlt:
          'Models sitting back to back, wearing Basic Tee in black and bone.',
      },
      {
        __typename: 'NavCategory',
        order: 2,
        name: 'Basic Tees',
        href: '/search?cat=new',
        imageSrc:
          'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
        imageAlt:
          'Models sitting back to back, wearing Basic Tee in black and bone.',
      },
      {
        __typename: 'NavCategory',
        order: 3,
        name: 'Accessories',
        href: '/search?cat=new',
        imageSrc:
          'https://tailwindui.com/img/ecommerce-images/mega-menu-category-03.jpg',
        imageAlt:
          'Models sitting back to back, wearing Basic Tee in black and bone.',
      },
      {
        __typename: 'NavCategory',
        order: 4,
        name: 'Carry',
        href: '/search?cat=new',
        imageSrc:
          'https://tailwindui.com/img/ecommerce-images/mega-menu-category-04.jpg',
        imageAlt:
          'Models sitting back to back, wearing Basic Tee in black and bone.',
      },
    ],
  },
  {
    __typename: 'NavOption',
    order: 2,
    name: 'Shop',
    href: '/search',
    options: null,
  },
  {
    __typename: 'NavOption',
    order: 3,
    name: 'Contact',
    href: '/contact',
    options: null,
  },
];
