import Sidebar from "./index";
import { render, screen } from "@testing-library/react";

jest.mock('../applications', () => {
  return [
    {
      name: 'one',
      href: '/one'
    },
    {
      name: 'two',
      href: '/two'
    }
  ]
})

describe('Sidebar', () => {
    it('renders the sidebar', () => {
        render(<Sidebar />)
        expect(screen.getByText('one')).toBeInTheDocument()
        expect(screen.getByText('two')).toBeInTheDocument()
      expect(true).toBe(true)
    })
})