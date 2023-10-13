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
    name: 'Contact Me',
    href: '/contact'
  },
  // {
  //   name: 'Steam Library Size Calculator',
  //   href: '/steam-library-size-calculator'
  // }
]

export default applications
