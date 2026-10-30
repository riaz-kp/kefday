import { unsplash } from './site';

export type MenuItem = {
  name: string;
  description: string;
  tag?: string;
  /** Optional, e.g. '₹180'. Left out on purpose for now. */
  price?: string;
};

export type MenuCategory = {
  id: string;
  label: string;
  image: { src: string; alt: string };
  items: MenuItem[];
  link?: { href: string; label: string };
};

export const menu: MenuCategory[] = [
  {
    id: 'coffee',
    label: 'Coffee & Brews',
    image: { src: unsplash('1509042239860-f550ce710b93'), alt: 'A cappuccino with latte art' },
    items: [
      { name: 'Espresso', description: 'Short, dense and honest — the heart of everything we brew.' },
      { name: 'Cappuccino', description: 'Velvet milk, a double shot and a little latte art for luck.' },
      { name: 'Spanish Latte', tag: 'Favourite', description: 'Condensed-milk sweetness, layered over espresso and ice.' },
      { name: 'Pour-over', description: 'Hand-brewed, slow and clear. For the unhurried.' },
      { name: 'Iced Americano', description: 'Espresso over cold water and ice. Bright and clean.' },
      { name: 'Classic Cold Coffee', description: 'Creamy, chilled, a Kerala café essential.' },
    ],
  },
  {
    id: 'coolers',
    label: 'Coolers',
    image: { src: unsplash('1556679343-c7306c1976bc'), alt: 'An iced drink with fresh lime' },
    items: [
      { name: 'Virgin Mojito', tag: 'Signature', description: 'Muddled mint, fresh lime and soda — our most refreshing delight.' },
      { name: 'Fresh Lime Soda', description: 'Sweet, salted or both. Always freshly squeezed.' },
      { name: 'Blue Lagoon', description: 'Citrus fizz in electric blue, built for photos and sunny days.' },
      { name: 'Thick Shakes', description: 'Chocolate, strawberry, Oreo — spoon optional.' },
      { name: 'Peach Iced Tea', description: 'Brewed in-house, chilled and lightly sweet.' },
    ],
  },
  {
    id: 'plates',
    label: 'Plates',
    image: { src: unsplash('1528735602780-2552fd46c7af'), alt: 'A toasted club sandwich with dips' },
    items: [
      { name: 'Kefday Club Sandwich', tag: 'Signature', description: 'Triple-decker, toasted golden — the ultimate club sandwich experience.' },
      { name: 'Beef Steak', description: 'Seared to order and served with smashed potatoes.' },
      { name: 'Pizzas', description: 'Cheesy, generous and made for sharing.' },
      { name: 'Thaikudam Wings', description: 'Sticky, spicy, unapologetically messy. A crowd favourite.' },
      { name: 'Hawaiian Chicken Salad', description: 'Grilled chicken, pineapple and crisp greens with a bright dressing.' },
      { name: 'Fish ’n’ Chips', description: 'Crisp battered fish, fries and house tartare.' },
      { name: 'Crispy Fried Chicken', description: 'Seasoned, double-fried, shatteringly crunchy.' },
      { name: 'Loaded Fries', description: 'Cheese, sauces and toppings piled high — made for sharing.' },
    ],
  },
  {
    id: 'sweet',
    label: 'Kefcake',
    image: { src: unsplash('1578985545062-69928b1d9587'), alt: 'A rich chocolate cake' },
    items: [
      { name: 'Chocolate Truffle', tag: 'Kefcake', description: 'Dark, glossy and deeply chocolatey. Our house classic.' },
      { name: 'Celebration Cakes', description: 'Custom cakes for birthdays, proposals and every good day. Order ahead.' },
      { name: 'Brownie & Ice Cream', description: 'Warm, fudgy brownie with a cold scoop on top.' },
      { name: 'Cake of the Day', description: 'Fresh from the Kefcake kitchen — ask what’s on the stand.' },
    ],
    link: { href: 'https://www.instagram.com/kefcake_/', label: 'Follow @kefcake_' },
  },
];
