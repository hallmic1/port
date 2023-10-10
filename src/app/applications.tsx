export interface Application {
  name: string;
  href: string;
}

const applications: Application[] = [
  {
    name: 'Home',
    href: '/'
  },
  {
    name: 'About',
    href: '/about'
  },
  // {
  //   name: 'Steam Library Size Calculator',
  //   href: '/steam-library-size-calculator'
  // }
]

export default applications